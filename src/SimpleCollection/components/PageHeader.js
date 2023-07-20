import React, { useEffect } from 'react';
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link, twMerge, Image, SafeHtml } from '@uniwebcms/module-sdk'
import { useState } from 'react'

export default function PageHeader({block, website, page, profile}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const pages =  website.getPageHierarchy({
    nested: false,
    filterEmpty: true
  });

  const [initialPosition, setIntialPosition] = useState(true);
  const [context, setContext] = useState("");
  const { sticky, alignment } = block.params;
  const left_aligned = alignment == "left";

  useEffect(() => {
    const context = page.childBlocks?.[1]?.theme;
    setContext(context);
  }, [page.childBlocks?.[1]?.theme]);


  const banner = block.main.banner;

  const activeRoute = page.activeRoute;


  window.onscroll = function () {
    if (window.scrollY > 0) {
      setIntialPosition(false);
    } else {
      setIntialPosition(true);
    }
  };


  return (
    <div className={twMerge("absolute top-0 left-0 z-50 flex w-full", !initialPosition && sticky && "fixed", !left_aligned && "justify-center", context)}>
      <div className={twMerge("transition-all duration-300 flex w-fit p-2", 
                              !initialPosition && sticky && "shadow-2xl bg-[var(--primary)]",
                              !initialPosition && sticky && !left_aligned && "rounded-xl",
                              left_aligned && "w-full"
      )} id="navbar">
        <nav className="flex items-center justify-between w-full p-8 sm:h-10 lg:justify-start" aria-label="Global">
          <Image 
            profile={profile}
            value={banner.value}
            alt={banner.alt}
            className={"-m-1.5 p-1.5 object-contain w-[50px] h-[50px] pngborder"}
          />
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-[var(--on\_primary)] lg:hidden"
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
                        >
                          <p className={'!text-[var(--on\\_primary)] inline-block text-base lg:text-lg font-semibold pr-0.5 hover:scale-125 transition-all duration-300' }>{label}</p>
                      </Link>
                  );
                }
            })}
          </div>
        </nav>
        
        <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <Dialog.Panel className="fixed inset-0 z-50 px-6 py-6 overflow-y-auto bg-white lg:hidden">
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
                <Image
                  profile={profile}
                  value={banner.value}
                  alt={banner.alt}
                  className={`h-8`}
                />
              </a>
            </div>
            <div className="mt-6 space-y-2">
              {/* {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className=""
                >
                  {item.name}
                </a>
              ))} */}

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
                                'block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-400/10',
                                active && '!text-[var(--link-active)]'
                            )}>
                            {label}
                        </Link>
                    );
                  }
              })}
            </div>
          </Dialog.Panel>
        </Dialog>
      </div>
    </div>
  )

}

// active && '!text-[var(--link-active)]'