import React, { useState, useEffect } from 'react'
import { AcademicCapIcon, ArrowUpRightIcon, CheckBadgeIcon, CheckCircleIcon, ChevronLeftIcon, CreditCardIcon, UserGroupIcon } from '@heroicons/react/24/outline'
import {DocumentImage} from '@uniwebcms/module-sdk';


export default function Solutions(props) {

    const { block, activeLang, documentId } = props;

    const {title, subheading, description} = block.items[0].header;

    const [features, setFeatures] = useState([]);

    useEffect(() => {

        block.items.map((item, index) => {

            const { header, } = item;

            setFeatures(features => [...features,{
                name: header.title || '',
                description:  header.subtitle || '',
                image: null,
                icon: AcademicCapIcon,
                color: "255,0,0",
                href: '#',
            }]);
        });
    }, []);


  return (
    <div className="py-24 bg-white sm:py-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto lg:text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600" dangerouslySetInnerHTML={{__html: subheading}}></h2>
          <p className="mt-2 text-6xl font-bold tracking-tight text-gray-900" dangerouslySetInnerHTML={{__html: title}}>
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600" dangerouslySetInnerHTML={{__html: description}}>
          </p>
        </div>
        <div className="max-w-2xl mx-auto mt-16 sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-8">
            {features.map((feature) => (
              <a href={feature.href}>
              <div key={feature.name} className="relative p-8 transition-all ease-in-out border rounded-md hover:border-black hover:scale-105">
                <dt className="flex flex-row justify-between text-base font-semibold leading-7 text-gray-900">
                  <div className="flex items-center justify-center w-10 h-10 mb-8 rounded-lg" style={{
                    backgroundColor: `rgba(${feature.color.substring(1, feature.color.length - 1)}, 0.1)`
                  }}>
                    {/* <DocumentImage
                        documentId={documentId}
                        value={feature.image.value}
                        alt={feature.image.alt}
                        className="w-6 h-6"
                        activeLang={activeLang}
                      /> */}
                  </div>
                  <div className="flex items-center justify-center w-10 h-10 mb-8">
                    <ArrowUpRightIcon className="w-6 h-6 text-gray-500" aria-hidden="true" />
                  </div>
                </dt>
                <strong dangerouslySetInnerHTML={{__html: feature.name}}></strong>
                <dd className="mt-2 text-base leading-7 text-gray-600" dangerouslySetInnerHTML={{__html: feature.description}}></dd>
              </div>
              </a>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
