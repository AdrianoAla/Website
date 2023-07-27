import {Image, Icon, SafeHtml, Link} from '@uniwebcms/module-sdk';
import React, {useEffect, useState} from 'react';

export default function Spotlight({block, profile, page, website}) {

    const { body, items } = block;


    const [features, setFeatures] = useState([]);

    // const profile = page.getPageProfile();

    useEffect(() => {
      items.map((item, index) => {

          const { header, body, banner } = item;

          setFeatures(features => [...features,{
              name: header?.title || '',
              description:  header?.subtitle || '',
              button:  body?.links[0] || null,
              icon: body?.icons?.[0] || null,
              image : body?.imgs?.[0] || null,
          }]);
      })
    }, []);

    // <EnvelopeIcon className="w-12 h-12 p-3 text-white bg-indigo-500 rounded-md"/>


    return (
    <div className={`${block.theme} pt-24  bg-primary-100`}>
    {features.map((feature) => {
      return (
        <div className={` py-24 overflow-hidden`}>
          <div className="px-6 mx-auto max-w-7xl lg:px-8">
            <div className="grid max-w-2xl grid-cols-1 mx-auto gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
              {feature.image.direction == "left" && (
                <div className="h-full">
                  <Image
                    profile={profile}
                    value={feature.image.value}
                    alt={feature.image.alt}
                    className="rounded-md"
                  ></Image>
                </div>
              )}
              <div className="lg:pt-4 lg:pr-4">
                <div className="lg:max-w-lg">
                  {feature.icon && (
                    <Icon
                      icon={feature.icon}
                      className="w-12 h-12 p-3 rounded-md bg-secondary-100 fill-secondary-0"
                    />
                  )}
                  <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl" ><SafeHtml value={feature.name} as="h1"/></p>
                  <p className="mt-6 text-lg leading-8 text-gray-600" >
                    <SafeHtml value={feature.description} as="h2"/>
                  </p>
                  <div className="mt-8">
                    {feature.button && 
                      <Link
                        to={website.makeHref(feature.button.href)}
                        className="inline-flex rounded-md bg-secondary-100 px-3.5 py-1.5 text-base font-semibold group leading-7 text-secondary-0 shadow-sm hover:bg-secondary-0 border border-secondary-100 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-100"
                      >
                        <SafeHtml value={feature.button.label} className="text-secondary-0 group-hover:text-secondary-100"/>
                      </Link>
                    }
                  </div>
                </div>
              </div>
              {feature.image.direction == "right" && (
                <div className="h-full">
                  <Image
                    profile={profile}
                    value={feature.image.value}
                    alt={feature.image.alt}
                    className="rounded-lg"
                  ></Image>
                </div>
              )}
            </div>
          </div>
        </div>

      );
    })}
      </div>
    )
  }
  