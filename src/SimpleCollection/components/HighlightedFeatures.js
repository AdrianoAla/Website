import {Image, SafeHtml, Link} from '@uniwebcms/module-sdk';
import React, {useEffect, useState} from 'react';

export default function Features({block, profile, page, website}) {

    const { body, items } = block;


    const [features, setFeatures] = useState([]);

    // const profile = page.getPageProfile();

    useEffect(() => {
      items.map((item, index) => {

          const { header, body, banner } = item;

          setFeatures(features => [...features,{
              name: header.title || '',
              description:  header.subtitle || '',
              button:  body?.links[0] || null,
              icon: banner || null,
              image : body?.imgs[0] || null,
          }]);
      })
    }, []);

    // <EnvelopeIcon className="w-12 h-12 p-3 text-white bg-indigo-500 rounded-md"/>


    return (
    <>
    {features.map((feature) => {
      return (
        <div className={` ${block.theme} py-24 overflow-hidden bg-[var(--primary)] sm:py-32`}>
          <div className="px-6 mx-auto max-w-7xl lg:px-8">
            <div className="grid max-w-2xl grid-cols-1 mx-auto gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
              {feature.image.direction == "left" && (
                <div>
                  <Image
                    profile={profile}
                    value={feature.image.value}
                    alt={feature.image.alt}
                  ></Image>
                </div>
              )}
              <div className="lg:pt-4 lg:pr-4">
                <div className="lg:max-w-lg">
                  {feature.icon && (
                    <Image
                      profile={profile}
                      value={feature.icon.value}
                      alt={feature.icon.alt}
                      className="w-12 h-12 p-3 text-white bg-[var(--secondary)] rounded-md"
                    />
                  )}
                  <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl" ><SafeHtml value={feature.name}/></p>
                  <p className="mt-6 text-lg leading-8 text-gray-600" >
                    <SafeHtml value={feature.description}/>
                  </p>
                  <div className="mt-8">
                    {feature.button && 
                      <Link
                        to={website.makeHref(feature.button.href)}
                        className="inline-flex rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        <SafeHtml value={feature.button.label}/>
                      </Link>
                    }
                  </div>
                </div>
              </div>
              {feature.image.direction == "right" && (
                <div>
                  <Image
                    profile={profile}
                    value={feature.image.value}
                    alt={feature.image.alt}
                  ></Image>
                </div>
              )}
            </div>
          </div>
        </div>

      );
    })}
      </>
    )
  }
  