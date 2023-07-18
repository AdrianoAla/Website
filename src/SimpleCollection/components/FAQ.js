import React from 'react';

import { SafeHtml } from '@uniwebcms/module-sdk'

/* This example requires Tailwind CSS v3.0+ */  
export default function (props) {
    const { main, items } = props.block;

    const { title, subtitle, alignment } = items[0].header;

    items.shift();
    const center = alignment === "center" ? true : false;
    const leftAlign = alignment != "right" ? true : false;

    const infos = items.map((item) => {
      const { header } = item;

      const { title, subtitle } = header;
      return {
          title,
          subtitle,
      };

    });

    if (center) return CenterAligned(title, subtitle, infos)

    return (
      <div className="bg-white">
        <div className="px-6 py-24 mx-auto max-w-7xl sm:pt-32 lg:py-40 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            {leftAlign && <div className="lg:col-span-5">
              <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900"><SafeHtml value={title}/></h2>
              <p className="mt-4 text-base leading-7 text-gray-600" ><SafeHtml value={subtitle}/></p>
            </div>}
            <div className="mt-10 lg:col-span-7 lg:mt-0">
              <dl className="space-y-10">
                {infos.map((faq) => (
                  <div key={faq.title }>
                    <dt className="text-base font-semibold leading-7 text-gray-900" ><SafeHtml value={faq.title}/></dt>
                    <dd className="mt-2 text-base leading-7 text-gray-600" ><SafeHtml value={faq.subtitle}/></dd>
                  </div>
                ))}
              </dl>
            </div>
            {!leftAlign && <div className="lg:col-span-5">
            <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900"><SafeHtml value={title}/></h2>
              <p className="mt-4 text-base leading-7 text-gray-600" ><SafeHtml value={subtitle}/></p>
            </div>}
          </div>
        </div>
      </div>
    )
  }
  

import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

function CenterAligned(title, subtitle, faqs) {
  return (
    <div className="bg-white">
      <div className="px-6 py-24 mx-auto max-w-7xl sm:py-32 lg:px-8 lg:py-40">
        <div className="max-w-4xl mx-auto divide-y divide-gray-900/10">
          <div>
            <h2 className="text-2xl font-bold leading-10 text-gray-900"><SafeHtml value={title}/></h2>
            <h3 className="text-lg leading-8 text-gray-600"><SafeHtml value={subtitle}/></h3>
          </div>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.title} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex items-start justify-between w-full text-left text-gray-900">
                        <span className="text-base font-semibold leading-7"><SafeHtml value={faq.title}/></span>
                        <span className="flex items-center ml-6 h-7">
                          {open ? (
                            <MinusSmallIcon className="w-6 h-6" aria-hidden="true" />
                          ) : (
                            <PlusSmallIcon className="w-6 h-6" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="pr-12 mt-2">
                      <p className="text-base leading-7 text-gray-600"><SafeHtml value={faq.subtitle}/></p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}