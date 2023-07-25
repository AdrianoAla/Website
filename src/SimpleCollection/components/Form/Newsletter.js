import React, {useState} from 'react';
import {SafeHtml, Image} from '@uniwebcms/module-sdk'

export default function Form({block, profile, website}) {

    const {title, subtitle, description} = block.main.header;
    const [width, setWidth] = useState(window.innerWidth);

    const image = block.main?.banner || block.main.body?.imgs[0];
    const left_align = block.main?.banner ? true : false;

    window.onresize = () => { setWidth(window.innerWidth); };

    return (
      <div className={`${block.theme} bg-primary-100`}>
        <div className="flex flex-col px-6 py-24 mx-auto max-w-7xl sm:items-center lg:flex-row lg:py-32 lg:px-8">
          
          {(image && left_align || (image && window.innerWidth < 1024)) &&
            <Image 
              profile={profile}
              value={image.value}
              alt={image.alt}
              className="max-w-[400px]"
            />
          }

          <div className=" flex-1 lg:max-w-[60%]">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl" ><SafeHtml value={title}/></h2>
            <p className="max-w-3xl mt-3 text-lg text-gray-500" >
              <SafeHtml value={subtitle}/>
            </p>
          </div>
          <div className="mt-8 lg:mt-0 lg:ml-8 lg:max-w-[40%] w-full flex flex-col sm:items-center">
            <form className="sm:flex">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email-address"
                type="email"
                autoComplete="email"
                required
                className="w-full px-5 py-3 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm sm:max-w-xs"
                placeholder="Enter your email"
              />
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="flex items-center justify-center w-full px-5 py-3 text-base font-medium transition-all border border-transparent rounded-md text-secondary-0 bg-secondary-100 hover:bg-secondary-0 hover:text-secondary-100"
                  onClick={(e) => {
                    e.preventDefault();
                    website.submitWebsiteForm('newsletter', {email}).then((res) => {
                      alert("Thank you for your interest.")
                    });
                  }}
                >
                  Notify me
                </button>
              </div>
            </form>
            <p className="mt-3 text-sm text-gray-500" ><SafeHtml value={description}/></p>
          </div>

          {image && !left_align && window.innerWidth >= 1024 && 
            <Image 
              profile={profile}
              value={image.value}
              alt={image.alt}
              className="max-w-[400px]"
            />
          }
        </div>
      </div>
    )
  }

  
  