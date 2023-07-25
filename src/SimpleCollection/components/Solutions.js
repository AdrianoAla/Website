import React, { useState, useEffect } from 'react'
import {ArrowUpRightIcon} from '@heroicons/react/24/outline'
import {Image, SafeHtml, Link} from '@uniwebcms/module-sdk';


export default function Solutions({ block, profile, website }) {

    const items = JSON.parse(JSON.stringify(block.items)); // wtf how does this work???

    const {title, subheading, description} = block.items[0].header;

    items.shift();

    const [features, setFeatures] = useState([]);

    useEffect(() => {

        items.map((item) => {

            const { header, banner, body } = item;

            setFeatures(features => [...features,{
                name: header.title || '',
                description:  header.subtitle || '',
                image: banner,
                link: body?.links[0] || null,
            }]);
        });
    }, []);


  return (
    <div className={`${block.theme} py-24 bg-primary-100 sm:py-32`}>
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto lg:text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600" ><SafeHtml value={subheading}/></h2>
          <h1 className="mt-2 text-6xl font-bold tracking-tight text-gray-900" ><SafeHtml value={title}/>
          </h1>
          <h2 className="mt-6 text-lg leading-8 text-gray-600" ><SafeHtml value={description}/>
          </h2>
        </div>
        <div className="max-w-2xl mx-auto mt-16 sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-8">
            {features.map((feature) => (
              feature.link ?

              <Link to={website.makeHref(feature.link.href)}>
                <FeatureCard feature={feature} profile={profile} />
              </Link>

              :

              <FeatureCard feature={feature} profile={profile} />
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}


const FeatureCard = ({feature, profile}) => {
  return (
    <div key={feature.name} className="relative p-8 transition-all ease-in-out border rounded-md hover:border-primary-0 hover:scale-105 bg-primary-100">
      <dt className="flex flex-row justify-between text-base font-semibold leading-7 text-gray-900">
        <div className="flex items-center justify-center w-10 h-10 mb-8 ">
          <Image
              profile={profile}
              value={feature.image.value}
              alt={feature.image.alt}
              className="w-10 h-10 p-2 rounded-lg bg-secondary-100 text-secondary-0 2-md"
            />
        </div>
        {feature.link && <div className="flex items-center justify-center w-10 h-10 mb-8">
          <ArrowUpRightIcon className="w-6 h-6 text-primary-0" aria-hidden="true" />
        </div>}
      </dt>
      <strong  ><SafeHtml value={feature.name} as="h3"/></strong>
      <dd className="mt-2 text-base leading-7 text-gray-600"><SafeHtml value={feature.description} as="p"/></dd>
    </div>
  )
}