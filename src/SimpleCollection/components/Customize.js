import React, { useEffect, useState } from 'react';

import { ChatBubbleOvalLeftEllipsisIcon, HeartIcon, PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline'

const icons = [
    TrashIcon,
    PencilSquareIcon,
    ChatBubbleOvalLeftEllipsisIcon,
    HeartIcon,
]

export default function Customizes(props) {

  const { items } = props.block;

  const title = items[0].header.title
  
    items.shift();

    const [features, setFeatures] = useState([]);

    useEffect(() => {
        items.map((item, index) => {

            const { header, body } = item;

            setFeatures(features => [...features,{
                name: header.title || '',
                description:  header.subtitle || '',
                icon: icons[index],

            }]);
        })
    }, []);


  return (
    <div className="py-24 bg-gray-50 sm:py-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl" dangerouslySetInnerHTML={{__html: title}}></h2>
          <dl className="grid grid-cols-1 col-span-2 gap-x-8 gap-y-16 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.name}>
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="flex items-center justify-center w-10 h-10 mb-6 bg-indigo-600 rounded-lg">
                    <feature.icon className="w-6 h-6 text-white" aria-hidden="true" />
                  </div>
                  <div dangerouslySetInnerHTML={{__html: feature.name}}></div>
                </dt>
                <dd className="mt-1 text-base leading-7 text-gray-600" dangerouslySetInnerHTML={{__html: feature.description}}></dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
