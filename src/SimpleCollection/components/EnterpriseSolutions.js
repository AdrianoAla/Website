import React, { useEffect, useState } from 'react'
import { Image, SafeHtml, Link } from '@uniwebcms/module-sdk';


export default function EnterpriseSolutions({block, profile, website}) {

    const {main, items} = block;

    const {title, subtitle} = main.header;
    const {value, alt} = main.banner;
    
    const alignment = main.header.alignment;
    const align_items = (alignment === "left" || alignment === "") ? "items-start" : alignment === "center" ? "items-center" : "items-end";

    const [supportLinks, setSupportLinks] = useState([]);

    useEffect(() => {
        items.forEach((item) => {
            const {header, body, banner} = item;

            const {subtitle} = header;

            let CTA = body.paragraphs[0];

            if (body.links.length > 0) {
              CTA = body.links[0];
            }

            setSupportLinks(supportLinks => [...supportLinks,{
                name: subtitle || '',
                list: body.lists[0],
                icon: banner,
                CTA: CTA,
            }]);

        });
    }, []);



  return (
    <div className="bg-white">
      {/* Header */}
      <div className="relative pb-32 bg-gray-800">
        <div className="absolute inset-0">
          <Image
            profile={profile}
            value={value}
            alt={alt}
          />
          <div className="absolute inset-0 bg-gray-800 mix-blend-multiply" aria-hidden="true" />
        </div>
        <div className={`relative flex flex-col px-6 py-24 mx-auto max-w-7xl sm:py-32 lg:px-8 text-${alignment} ${align_items}`}>
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl"><SafeHtml value={title}/></h1>
          <p className="max-w-3xl mt-6 text-xl text-gray-300">
            <SafeHtml value={subtitle} />
          </p>
        </div>
      </div>

      {/* Overlapping cards */}
      <section className="relative z-10 px-6 pb-32 mx-auto -mt-32 max-w-7xl lg:px-8" aria-labelledby="contact-heading">
        <h2 className="sr-only" id="contact-heading">
          Contact us
        </h2>
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-2 lg:gap-y-0 lg:gap-x-8">
          {supportLinks.map((link) => (
            <div key={link.name} className="flex flex-col bg-white shadow-xl rounded-2xl">
              <div className="relative flex-1 px-6 pt-16 pb-8 md:px-8">
                <div className="absolute top-0 inline-block p-5 transform -translate-y-1/2 bg-indigo-600 shadow-lg rounded-xl">
                  <Image 
                    profile={profile}
                    value={link.icon.value}
                    className="w-6 h-6 text-white"
                  />
                </div>
                <h3 className="text-xl font-medium text-gray-900">{link.name}</h3>
                <div className='text-base text-gray-500'>
                    <ul className='mt-2 ml-4 list-disc'>
                        {link.list.map(l => {
                            return (
                                <li key={l.paragraphs[0]}><SafeHtml value={l.paragraphs[0]}/></li>
                            )
                        })}
                    </ul>
                </div>
              </div>
              <div className="p-6 rounded-bl-2xl rounded-br-2xl bg-gray-50 md:px-8">
                <a className="text-base font-medium text-indigo-700 hover:text-indigo-600">
                  <Link
                    profile={profile}
                    to={website.makeHref(link.CTA.href)}
                  >
                    <SafeHtml value={link.CTA.label}/>
                  </Link>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
