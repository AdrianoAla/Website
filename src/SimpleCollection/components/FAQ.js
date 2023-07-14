import React from 'react';

/* This example requires Tailwind CSS v3.0+ */  
export default function (props) {
    const { main, items } = props.block;

    const { title, subtitle } = items[0].header

    items.shift();

    const infos = items.map((item) => {
      const { header } = item;

      const { title, subtitle } = header;
      return {
          title,
          subtitle,
      };

    });

    return (
      <div className="bg-white">
        <div className="px-6 py-24 mx-auto max-w-7xl sm:pt-32 lg:py-40 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-5">
              <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900" dangerouslySetInnerHTML={{__html: title}}></h2>
              <p className="mt-4 text-base leading-7 text-gray-600" dangerouslySetInnerHTML={{__html: subtitle}}></p>
            </div>
            <div className="mt-10 lg:col-span-7 lg:mt-0">
              <dl className="space-y-10">
                {infos.map((faq) => (
                  <div key={faq.title }>
                    <dt className="text-base font-semibold leading-7 text-gray-900" dangerouslySetInnerHTML={{__html: faq.title}}></dt>
                    <dd className="mt-2 text-base leading-7 text-gray-600" dangerouslySetInnerHTML={{__html: faq.subtitle}}></dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    )
  }
  