import React, { useEffect, useState } from 'react';
import { SafeHtml, Image, Link } from '@uniwebcms/module-sdk'

export default function Customizes({block, profile, website}) {

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
    <div className="py-24 bg-gray-50 sm:py-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {alignment == "left" && 
            <div className='flex flex-col'>
              {subheading && <h2 className="text-base font-semibold leading-7 text-indigo-600">
                <SafeHtml value={subheading} />
              </h2>}
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                <SafeHtml value={title} />
              </h2>
              {subtitle && <p className="mt-6 text-lg leading-8 text-gray-600">
                <SafeHtml value={subtitle} />
              </p>}
            </div>
          }
          <dl className="grid grid-cols-1 col-span-2 gap-x-8 gap-y-16 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.name}>
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="flex items-center justify-center w-10 h-10 mb-6 bg-indigo-600 rounded-lg">
                    <Image 
                      profile={profile}
                      value={feature.icon.value}
                      alt={feature.icon.alt}
                      className="w-6 h-6" 
                    />
                  </div>
                  <div><SafeHtml value={feature.name}/></div>
                </dt>
                <dd className="mt-1 text-base leading-7 text-gray-600"><SafeHtml value={feature.description} /></dd>
                {feature.link && <Link to={website.makeHref(feature.link.href)} ><dd className="mt-2 text-base leading-7 text-gray-600">{feature.link.label}</dd></Link>}
              </div>
            ))}
          </dl>
          {alignment == "right" && 
          <div className='flex flex-col'>
            {subheading && <h2 className="text-base font-semibold leading-7 text-indigo-600">
              <SafeHtml value={subheading} />
            </h2>}
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              <SafeHtml value={title} />
            </h2>
            {subtitle && <p className="mt-6 text-lg leading-8 text-gray-600">
              <SafeHtml value={subtitle} />
            </p>}
          </div>
          }
        </div>
      </div>
      {main.body?.links[0] && 
        <center>
          <Link to={website.makeHref(main.body.links[0].href)} >
            <button 
              className="px-6 py-3 mt-24 text-lg font-semibold text-center text-white transition-all duration-300 bg-indigo-800 border border-white rounded-full hover:shadow-2xl hover:bg-white hover:text-black hover:border-black">
                <SafeHtml value={main.body.links[0].label} />
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
    <div className="py-24 bg-white sm:py-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto lg:text-center">
          {subheading && <h2 className="text-base font-semibold leading-7 text-indigo-600">
            <SafeHtml value={subheading} />
          </h2>}
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            <SafeHtml value={title} />
          </h2>
          {subtitle && <p className="mt-6 text-lg leading-8 text-gray-600">
            <SafeHtml value={subtitle} />
          </p>}
        </div>
        <div className="max-w-2xl mx-auto mt-16 sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute top-0 left-0 flex items-center justify-center w-10 h-10 bg-indigo-600 rounded-lg">
                    <Image 
                      profile={profile}
                      value={feature.icon.value}
                      alt={feature.icon.alt}
                      className="w-6 h-6" 
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                {feature.link && <Link to={website.makeHref(feature.link.href)} ><dd className="mt-2 text-base leading-7 text-gray-600">{feature.link.label}</dd></Link>}
              </div>
            ))}
          </dl>
        </div>
      </div>
      {main.body?.links[0] && 
        <center>
          <Link to={website.makeHref(main.body.links[0].href)} >
            <button 
              className="px-6 py-3 mt-24 text-lg font-semibold text-center text-white transition-all duration-300 bg-indigo-800 border border-white rounded-full hover:shadow-2xl hover:bg-white hover:text-black hover:border-black">
                <SafeHtml value={main.body.links[0].label} />
              </button>
            </Link>
          </center>
        }
    </div>
 )
}