import React from 'react';

import { useState } from 'react'

import './HeroBanner.css'
import { VideoFacade } from '../videoFacade/videoFacade'
import { SafeHtml, twMerge, Image } from '@uniwebcms/module-sdk'



export default function Hero({block, website, profile}) {
    

    const { title = '', subheading = '', description = '' } = block.main.header;

    
    
    const videoLink = block.main.body?.videos[0]?.src;
    const videoThumbnail = block.main.body?.imgs[0];
    const prompt = block.main.body?.paragraphs[0];

    console.log(block.main.body);

    const [email, setEmail] = useState('');

    const videoFacade = videoLink && videoThumbnail;


  return (
    <div className={`relative min-h-screen bg-[var(--primary)] ${block.theme}`}>
      {/* Background image */}
      {block.main?.banner && <div className="absolute inset-0">
        <Image
          profile={profile}
          value={block.main.banner.value}
          alt={block.main.banner.alt}
          className="object-cover w-full h-full"
        />
      </div>}
      <div className="flex flex-col justify-between mt-12 xl:mt-0 sm:h-full sm:min-h-screen xl:flex-row lg:items-center xl:px-12 2xl:px-32">
        <div className={twMerge("max-w-7xl", !videoFacade && "flex justify-center text-center")}>
          <div className="relative z-10 lg:w-full lg:max-w-2xl">
            <div className="relative px-6 pt-16 pb-8 lg:px-8 lg:pr-0">
              <div className="max-w-2xl mx-auto lg:mx-0 lg:max-w-xl">
                <div className="flexsm:mb-2">
                  <div className="text-lg text-gray-500 " >
                    <p><SafeHtml value={subheading} as="h2"/></p>
                  </div>
                </div>
                <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  <SafeHtml value={title}/>
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600"><SafeHtml value={description} as="h2"/></p>
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
                      className='p-3 px-6 ml-3 text-[var(--on\_secondary)] transition-all bg-[var(--secondary)] border border-[var(--secondary)] rounded-md shadow-sm hover:bg-[var(--on\_secondary)] hover:text-[var(--secondary)] hover:border-[var(--secondary)] hover:cursor-pointer' 
                      onClick={() => 
                        website.submitWebsiteForm('newsletter', {email}).then((res) => {
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
        {/* <div className="sm:absolute sm:top-[16.66%] sm:right-0 sm:w-[30%] sm:h-2/3 bg-gray-100"></div>
        <div className="bg-transparent dotted sm:absolute sm:inset-y-0 sm:right-0 sm:w-1/4"></div> */}
        {videoFacade && <div className='mb-2 sm:flex 2xl:mb-0 sm:flex-col sm:justify-center lg:block sm:items-center'>
          <div className='flex relative z-40 flex-row justify-center h-[299px] sm:max-h-[29.9rem] sm:max-w-[44.8rem] sm:w-screen sm:h-screen'>
              <VideoFacade
                profile={profile}
                videoURL={videoLink}
                thumbnail={videoThumbnail}
                border={true}
                style={null}
              />
          </div>
        </div>}
      </div>
    </div>
  )
}
