import React, {useState} from 'react'
import { Link, Image, SafeHtml } from "@uniwebcms/module-sdk"

export default function CTA({block, profile, website}) {

  const { main } = block;

  const {header, banner, body} = main;

  const [width, setWidth] = useState(window.innerWidth);

  window.onresize = () => { setWidth(window.innerWidth); };

  const {subheading = "", title = "", subtitle = ""} = header;

  const image = banner || body?.imgs[0];

  const link = body?.links[0];

  return (
    <div className={`${block.theme} relative flex flex-col !bg-primary-100 lg:flex-row`}>
      {image && ((banner && window.innerWidth >= 1024) || (window.innerWidth < 1024)) &&
        <div className="relative w-full overflow-hidden bg-indigo-600 lg:w-1/2">
          <Image
            profile={profile}
            value={image.value}
            alt={image.alt}
            className="object-cover w-full h-full"
          />
        </div>
      }
      <div className="flex flex-col justify-center w-full px-24 py-24 lg:w-1/2">
        <div className="2xl:px-24">
          <h2 className="text-base font-semibold leading-7 text-indigo-400"><SafeHtml value={subheading} /></h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl"><SafeHtml value={title} /></p>
          <p className="mt-6 text-base leading-7 text-gray-300">
            <SafeHtml value={subtitle} />
          </p>
          
          <div className="mt-8">
            {link &&
              <Link
                to={website.makeHref(link.href)}
              >
                <span className="inline-flex rounded-md !bg-secondary-100 px-3.5 py-2.5 text-sm font-semibold !text-secondary-0 shadow-sm hover:scale-105 transition-all duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                  <SafeHtml value={link.label} />
                </span>
              </Link>
            }
          </div>

        </div>
      </div>
      
      {image && !banner && window.innerWidth >= 1024 && 
        <div className="relative w-full overflow-hidden bg-indigo-600 lg:w-1/2">
          <Image
            profile={profile}
            value={image.value}
            alt={image.alt}
            className="object-cover w-full h-full"
          />
        </div>
      }
    </div>
  )
}
