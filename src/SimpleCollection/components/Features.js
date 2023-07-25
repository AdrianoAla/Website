import React, { useEffect, useState } from 'react';
import { SafeHtml, Image, Link } from '@uniwebcms/module-sdk'

export default function Features({block, profile, website}) {

    const {main, items} = block;

    const {title, subtitle, subheading} = main.header
    const alignment = main.header.alignment;
  
    const [features, setFeatures] = useState([]);

    useEffect(() => {
        items.map((item) => {

            const { header, banner, body } = item;

            setFeatures(features => [...features,{
                
                name: header.subtitle || '',
                description:  header.description || '',
                icon: banner,
                link: body?.links[0],

            }]);
        })
    }, []);
  
  if (alignment == "center") return centerAlign(block, profile, features, subheading, title, subtitle);

  return (
    <div className={`py-24 bg-primary-100 sm:py-32 ${block.theme}`}>
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {alignment == "left" && 
            <div className='flex flex-col'>
              {subheading && <h2 className="text-base font-semibold leading-7 text-indigo-600">
                <SafeHtml value={subheading} />
              </h2>}
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                <SafeHtml value={title} />
              </h1>
              {subtitle && <h2 className="mt-6 text-lg leading-8 text-gray-600">
                <SafeHtml value={subtitle} />
              </h2>}
            </div>
          }
          <dl className="grid grid-cols-1 col-span-2 gap-x-8 gap-y-16 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.name}>
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="flex items-center justify-center w-10 h-10 mb-6 rounded-lg bg-secondary-100">
                    <Image 
                      profile={profile}
                      value={feature.icon.value}
                      alt={feature.icon.alt}
                      className="w-6 h-6 text-secondary-0"
                    />
                  </div>
                  <div><SafeHtml value={feature.name} as="h3"/></div>
                </dt>
                <dd className="mt-1 text-base leading-7 text-gray-600"><SafeHtml value={feature.description}/></dd>
                {feature.link && <Link to={website.makeHref(feature.link.href)} ><dd className="mt-2 text-base leading-7 text-gray-600"><SafeHtml value={feature.link.label} className="text-[var(--link)]"/></dd></Link>}
              </div>
            ))}
          </dl>
          {alignment == "right" && 
          <div className='flex flex-col'>
            {subheading && <h2 className="text-base font-semibold leading-7 text-indigo-600">
              <SafeHtml value={subheading} />
            </h2>}
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              <SafeHtml value={title} />
            </h1>
            {subtitle && <h2 className="mt-6 text-lg leading-8 text-gray-600">
              <SafeHtml value={subtitle} />
            </h2>}
          </div>
          }
        </div>
      </div>
      {main.body?.links[0] && 
        <center>
          <Link to={website.makeHref(main.body.links[0].href)} >
            <button 
                className="px-6 py-3 mt-24 text-lg font-semibold text-center transition-all duration-300 border rounded-full text-secondary-0 bg-secondary-100 border-secondary-0 hover:shadow-2xl hover:bg-secondary-0 hover:text-secondary-100 hover:border-secondary-100">
                <SafeHtml value={main.body.links[0].label} className="text-inherit"/>
              </button>
            </Link>
          </center>
        }
    </div>
  )
}


const centerAlign = (block, profile, features, subheading, title, subtitle) => {
  const main = block.main;
 return (
    <div className={`py-24 bg-primary-100 sm:py-32 ${block.theme}`}>
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto lg:text-center">
          {subheading && <h2 className="text-base font-semibold leading-7 text-indigo-600">
            <SafeHtml value={subheading} />
          </h2>}
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            <SafeHtml value={title} />
          </h1>
          {subtitle && <h2 className="mt-6 text-lg leading-8 text-gray-600">
            <SafeHtml value={subtitle} />
          </h2>}
        </div>
        <div className="max-w-2xl mx-auto mt-16 sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute top-0 left-0 flex items-center justify-center w-10 h-10 rounded-lg bg-secondary-100">
                    <Image 
                      profile={profile}
                      value={feature.icon.value}
                      alt={feature.icon.alt}
                      className="w-6 h-6 text-secondary-0" 
                    />
                  </div>
                  <SafeHtml value={feature.name} as="h3"/>
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600"><SafeHtml value={feature.description}/></dd>
                {feature.link && <Link to={website.makeHref(feature.link.href)} ><dd className="mt-2 text-base leading-7 text-gray-600"><SafeHtml value={feature.link.label} /></dd></Link>}
              </div>
            ))}
          </dl>
        </div>
      </div>
      {main.body?.links[0] && 
        <center>
          <Link to={website.makeHref(main.body.links[0].href)} >
            <button 
              className="px-6 py-3 mt-24 text-lg font-semibold text-center transition-all duration-300 border rounded-full text-secondary-0 bg-secondary-100 border-secondary-0 hover:shadow-2xl hover:bg-secondary-0 hover:text-secondary-100 hover:border-secondary-100">
                <SafeHtml value={main.body.links[0].label} className="text-inherit"/>
              </button>
            </Link>
          </center>
        }
    </div>
 )
}