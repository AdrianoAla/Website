import React from 'react';

import { useState } from 'react'

import './HeroBanner.css'
import { GenericVideoFacade } from '../videoFacade/videoFacade'
import { SafeHtml, twMerge } from '@uniwebcms/module-sdk'



export default function HeroBanner({block, website, page}) {
    

    const { title = '', subheading = '', description = '' } = block.main.header;

    
    
    const videoLink = block.main.body?.links[0]?.href
    const videoThumbnail = block.main.body?.links[1]?.href
    const prompt = block.main.body?.paragraphs[0];

    const [email, setEmail] = useState('');

    const videoFacade = videoLink && videoThumbnail;

    const siteId = website.getSiteId();

  return (
    <div className="relative bg-white">
      <div className={twMerge("mx-auto max-w-7xl", !videoFacade && "flex justify-center text-center")}>
        <div className="relative z-10 lg:w-full lg:max-w-2xl">
          <div className="relative px-6 pt-16 pb-8 lg:py-40 lg:px-8 lg:pr-0">
            <div className="max-w-2xl mx-auto lg:mx-0 lg:max-w-xl">
              <div className="flexsm:mb-2">
                <div className="text-lg text-gray-500 " >
                  <p><SafeHtml value={subheading}/></p>
                </div>
              </div>
              <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                <SafeHtml value={title}/>
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600"><SafeHtml value={description}/></p>
              {prompt && <div className="flex flex-col mt-10 align-middle">
                <p className='mb-2'><SafeHtml value={prompt}/></p>
                <div className={twMerge('flex', !videoFacade && 'justify-center')}>
                  <input
                    type="text" 
                    name='email' 
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value || '');
                    }}
                    placeholder='Enter your email' 
                    className='p-3 text-base font-thin text-gray-500 border border-gray-300 rounded-md shadow-sm w-[70%] sm:w-96'
                  />

                  <input
                    type='button' 
                    value='Notify Me' 
                    className='p-3 px-6 ml-3 text-white transition-all bg-gray-800 border border-gray-800 rounded-md shadow-sm hover:bg-white hover:text-gray-800 hover:cursor-pointer' 
                    onClick={() => 
                      website.submitWebsiteForm(siteId, 'newsletter', {email}).then((res) => {
                        console.log(res)
                        alert("Thank you for your interest.")
                      })
                    }
                  />
                </div>
              </div>}
            </div> 
          </div>
        </div>
      </div>
      <div className="sm:absolute sm:top-[16.66%] sm:right-0 sm:w-[30%] sm:h-2/3 bg-gray-100"></div>
      <div className="bg-transparent dotted sm:absolute sm:inset-y-0 sm:right-0 sm:w-1/4"></div>
      {videoFacade && <div className='sm:flex sm:w-screen sm:flex-col sm:justify-center lg:block sm:items-center'>
        <div className='flex sm:block static z-40 flex-row justify-center h-[299px] sm:max-h-[29.9rem] sm:max-w-[44.8rem] sm:w-screen sm:h-screen lg:h-[299px] lg:w-[448px] lg:block lg:absolute lg:top-[30%] lg:right-[10%]'>
            <GenericVideoFacade
              videoURL={videoLink}
              width={448}
              height={299}
              thumbnail={videoThumbnail}
              border={true}
              style={null}
            />
        </div>
      </div>}
    </div>
  )
}
