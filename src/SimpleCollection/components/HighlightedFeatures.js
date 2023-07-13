import React, {useEffect, useState} from 'react';
import { EnvelopeIcon, SparklesIcon } from "@heroicons/react/24/outline";
import {DocumentImage} from '@uniwebcms/module-sdk';

export default function Features(props) {

    const { body, items, activeLang } = props.block;

    console.log("MMM", props.block)

    const [features, setFeatures] = useState([]);

    useEffect(() => {
      items.map((item, index) => {

          const { header, body } = item;

          console.log('itemmm', item)

          setFeatures(features => [...features,{
              name: header.title || '',
              description:  header.subtitle || '',
              button:  header.description || '',
              image : body.imgs[0],
          }]);
      })
    }, []);

    // <EnvelopeIcon className="w-12 h-12 p-3 text-white bg-indigo-500 rounded-md"/>


    return (
    <>
    {features.map((feature) => {
      return (
        <div className="py-24 overflow-hidden bg-white sm:py-32">
          <div className="px-6 mx-auto max-w-7xl lg:px-8">
            <div className="grid max-w-2xl grid-cols-1 mx-auto gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
              {feature.image == "left" && (
                <div>
                  <DocumentImage
                    contentId={feature.image.contentId}
                    value={feature.image.value}
                    alt={feature.name}
                    activeLang={activeLang}
                    className={"max-h-12"}
                  ></DocumentImage>
                </div>
              )}
              <div className="lg:pt-4 lg:pr-4">
                <div className="lg:max-w-lg">

                  <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl" dangerouslySetInnerHTML={{ __html: feature.name }}></p>
                  <p className="mt-6 text-lg leading-8 text-gray-600" dangerouslySetInnerHTML={{ __html: feature.description }}>
                  </p>
                  <div className="mt-8">
                    <a
                      href="#"
                      className="inline-flex rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      dangerouslySetInnerHTML={{ __html: feature.button }}
                    >
                    </a>
                  </div>
                </div>
              </div>
              {feature.image == "right" && (
              <DocumentImage
                  contentId={feature.image.contentId}
                  value={feature.image.value}
                  alt={feature.name}
                  activeLang={activeLang}
                  className={"max-h-12"}
                ></DocumentImage>
            )}
            </div>
          </div>
        </div>

      );
    })}
      </>
    )
  }
  