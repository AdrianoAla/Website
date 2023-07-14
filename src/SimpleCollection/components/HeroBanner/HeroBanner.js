import React from 'react';

import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import './HeroBanner.css'
import { GenericVideoFacade } from '../videoFacade/videoFacade'
import { Link, twMerge } from '@uniwebcms/module-sdk'

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Blog', href: '/blog' },
]

export default function HeroBanner({block, website, page}) {
    

    const { title = '', subheading = '', description = '' } = block.main.header;

    const videoLink = block.main.body.links[0].href
    const videoThumbnail = block.main.body.links[1].href
    const prompt = block.main.body.paragraphs[0]

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [email, setEmail] = useState('');

    const siteId = website.getSiteId();
    const activeRoute = page.activeRoute;

    const pages =  website.getPageHierarchy({
      nested: false,
      filterEmpty: true
    });

    console.log ("hierarchy", pages);


  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 lg:w-full lg:max-w-2xl">

          <div className="relative px-6 pt-6 lg:pl-8 lg:pr-0">
            <nav className="flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
              <a href="#" className="-m-1.5 p-1.5"> <img src='logo.svg' /> </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700 lg:hidden"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="w-6 h-6" aria-hidden="true" />
              </button>
              <div className="hidden lg:ml-12 lg:block lg:space-x-14">
              {pages.map((page, index) => {
                            if (page.child_items?.length) {
                                return <NavbarMenu key={index} {...page} />;
                            } else {
                                const { route, label } = page;
                                const active = route === activeRoute;

                                return (
                                    <Link
                                        key={index}
                                        to={route}
                                        className={twMerge(
                                            'text-base lg:text-lg font-semibold pr-0.5',
                                            active && '!text-[var(--link-active)]'
                                        )}>
                                        {label}
                                    </Link>
                                );
                            }
                        })}
              </div>
            </nav>
            
            <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
              <Dialog.Panel className="fixed inset-0 z-10 px-6 py-6 overflow-y-auto bg-white lg:hidden">
                <div className="flex flex-row-reverse items-center justify-between">
                  <button
                    type="button"
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                  </button>
                  <a href="#" className="-m-1.5 p-1.5">
                    <span className="sr-only">Your Company</span>
                    <img
                      className="h-8"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                      alt=""
                    />
                  </a>
                </div>
                <div className="mt-6 space-y-2">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-400/10"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </Dialog.Panel>
            </Dialog>
          </div>

          <div className="relative px-6 pt-16 pb-8 lg:py-40 lg:px-8 lg:pr-0">
            <div className="max-w-2xl mx-auto lg:mx-0 lg:max-w-xl">
              <div className="flexsm:mb-2">
                <div className="text-lg text-gray-500 " >
                  <p dangerouslySetInnerHTML={{__html: subheading}}></p>
                </div>
              </div>
              <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl" dangerouslySetInnerHTML={{__html: title}}>
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600" dangerouslySetInnerHTML={{__html: description}}></p>
              <div className="flex flex-col mt-10 align-middle">
                <p className='mb-2' dangerouslySetInnerHTML={{__html: prompt}}></p>
                <div className='flex '>
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:absolute sm:top-[16.66%] sm:right-0 sm:w-[30%] sm:h-2/3 bg-gray-100"></div>
      <div className="bg-transparent dotted sm:absolute sm:inset-y-0 sm:right-0 sm:w-1/4"></div>
      <div className='sm:flex sm:w-screen sm:flex-col sm:justify-center lg:block sm:items-center'>
        <div className='flex sm:block static z-50 flex-row justify-center h-[299px] sm:max-h-[29.9rem] sm:max-w-[44.8rem] sm:w-screen sm:h-screen lg:h-[299px] lg:w-[448px] lg:block lg:absolute lg:top-[30%] lg:right-[10%]'>
          {!mobileMenuOpen && 
            <GenericVideoFacade
              videoURL={videoLink}
              width={448}
              height={299}
              thumbnail={videoThumbnail}
              border={true}
              style={null}
            />
          }
        </div>
      </div>
    </div>
  )
}
