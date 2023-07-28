import React, { useEffect, useState } from 'react';

import { SafeHtml } from '@uniwebcms/module-sdk'

/* This example requires Tailwind CSS v3.0+ */  
export default function Details(props) {
    const { main, items } = props.block;

    const { title, subtitle, alignment } = main.header;

    const center = alignment === "center" ? true : false;
    const leftAlign = alignment != "right" ? true : false;

    const infos = items.map((item) => {
      const { header } = item;

      const { subtitle, description } = header;
      return {
          subtitle,
          description
      };

    });

    if (center) return CenterAligned(title, subtitle, infos, props.block)

    return (
      <div className={`${props.block.theme} bg-primary-100`}>
        <div className="px-6 py-24 mx-auto max-w-7xl sm:pt-32 lg:py-40 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            {leftAlign && <div className="lg:col-span-5">
              <h2 className="text-2xl font-bold leading-10 tracking-tight !text-primary-0"><SafeHtml value={title}/></h2>
              <p className="mt-4 text-base leading-7 !text-primary-0" ><SafeHtml value={subtitle}/></p>
            </div>}
            <div className="mt-10 lg:col-span-7 lg:mt-0">
              <dl className="space-y-10">
                {infos.map((faq) => (
                  <div key={faq.title }>
                    <dt className="text-base font-semibold leading-7 !text-primary-0" ><SafeHtml value={faq.subtitle} as="h1"/></dt>
                    <dd className="mt-2 text-base leading-7 !text-primary-0" ><SafeHtml value={faq.description} as="h2"/></dd>
                  </div>
                ))}
              </dl>
            </div>
            {!leftAlign && <div className="lg:col-span-5">
              <h3 className="text-2xl font-bold leading-10 tracking-tight !text-primary-0"><SafeHtml value={title}/></h3>
              <p className="mt-4 text-base leading-7 !text-primary-0" ><SafeHtml value={subtitle} /></p>
            </div>}
          </div>
        </div>
      </div>
    )
  }
  

import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

function CenterAligned(title, subtitle, faqs, block) {


  return (
    <div className={`${block.theme} !bg-primary-100 `}>
      <div className="px-6 py-24 mx-auto max-w-7xl sm:py-32 lg:px-8 lg:py-40">
        <div className="max-w-4xl mx-auto">
          <div>
            <h1 className="text-2xl font-bold leading-10 !text-primary-0"><SafeHtml value={title}/></h1>
            <h2 className="text-lg leading-8 !text-primary-0"><SafeHtml value={subtitle}/></h2>
          </div>
          <dl className="mt-10 space-y-6">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.title} className="pt-6 border-t-[1px] border-primary-60">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex items-start justify-between w-full text-left !text-primary-0" >
                        <h3 className="text-base font-semibold leading-7"><SafeHtml value={faq.subtitle}/></h3>
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
                      <p className="text-base leading-7  !text-primary-0"><SafeHtml value={faq.description}/></p>
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