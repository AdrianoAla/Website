import { useState } from "react"
import React from "react";
import { Image, SafeHtml, twMerge } from "@uniwebcms/module-sdk";

const bgHeight = 45;
const islandHeight = 33;


export default function TestimonialCarousel({block, profile, testimonials}) {

    const [current, setCurrent] = useState(0);

    return (
        <div className={`${block.theme}`}>
            <div className={`relative hidden lg:block min-h-[${bgHeight}rem]`}>
                
                {block.main.banner && <div className="absolute inset-0">
                    <Image
                        profile={profile}
                        value={block.main.banner.value}
                        alt={block.main.banner.alt}
                        className="object-cover w-full h-full text-primary-0 saturate-[70%]"
                    />
                </div>}
                <div className="flex flex-row justify-center align-centre min-h-[45rem] items-center">
                    
                    <div className="relative z-40 items-center justify-center p-8 mx-24 max-w-1/2 frosty rounded-xl">
                        <h1 className="px-4 text-4xl font-bold"><SafeHtml value={block.main?.header?.title}/></h1>
                        <h2 className="px-4 text-2xl"><SafeHtml value={block.main?.header?.subtitle}/></h2>
                    </div>

                    <div className={twMerge(`z-40 flex mr-24 h-[${islandHeight}rem] min-h-[${islandHeight}rem] max-w-1/2`)} style={{height: `${islandHeight}rem`}}>
                        

                        <button 
                            className={`h-[${islandHeight}rem] w-[4rem] rounded-l-[4rem] bg-primary-100 transition-all hover:scale-105`}
                            onClick={() => setCurrent(current === 0 ? testimonials.length - 1 : current - 1)}
                        >
                            &larr;
                        </button>

                        <div className={`w-[40rem] min-h-[${islandHeight}rem] bg-primary-100 flex flex-row`}>
                            

                            <div className="flex flex-col justify-between px-8 pt-16 pb-6 mx-4">
                                
                                <div className="flex flex-col justify-between h-[87%]">
                                    
                                    <div>
                                        <div>
                                          <Image 
                                            profile={profile}
                                            value={testimonials[current].company.value}
                                            alt={testimonials[current].company.alt}
                                            className="object-contain h-16"
                                          />
                                        </div>

                                        <div className="mb-8">
                                            <svg width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg" className=" translate-x-[-2rem] translate-y-6 opacity-70 text-secondary-80">
                                                <path d="M8.352 0C3.456 3.456 0 9.12 0 15.36C0 20.448 3.072 23.424 6.624 23.424C9.984 23.424 12.48 20.736 12.48 17.568C12.48 14.4 10.272 12.096 7.392 12.096C6.816 12.096 6.048 12.192 5.856 12.288C6.336 9.024 9.408 5.184 12.48 3.264L8.352 0ZM24.864 0C20.064 3.456 16.608 9.12 16.608 15.36C16.608 20.448 19.68 23.424 23.232 23.424C26.496 23.424 29.088 20.736 29.088 17.568C29.088 14.4 26.784 12.096 23.904 12.096C23.328 12.096 22.656 12.192 22.464 12.288C22.944 9.024 25.92 5.184 28.992 3.264L24.864 0Z" fill="#4F46E5"/>
                                            </svg>

                                            <h1 className="z-10 text-xl leading-10 font-inter"><SafeHtml value={testimonials[current].quote}/></h1>
                                        </div>
                                    </div>
                                    
                                    <div className='flex flex-row items-center'>
                                        <Image
                                            profile={profile}
                                            value={testimonials[current].picture.value}
                                            alt={testimonials[current].picture.alt}
                                            className="w-16 h-16 rounded-full"
                                        />
                                        <div className="mx-4">
                                            <h2 className="text-xl font-bold font-inter"><SafeHtml value={testimonials[current].name} as="h2" /></h2>
                                        </div>
                                    </div>
                                </div>

                                <div id='dots' className="flex flex-row justify-center mt-8">
                                    {testimonials.map((testimonial, index) => {
                                        if (index === current) {
                                            return (
                                                <div key={index} className="w-3 h-3 mx-2 transition-all bg-gray-700 rounded-full"></div>
                                            )
                                        }
                                        return (
                                                <div key={index} className="w-3 h-3 mx-2 transition-all bg-gray-400 rounded-full hover:bg-gray-700 hover:cursor-pointer" onClick={()=>{setCurrent(index)}}></div>
                                        )
                                    })
                                    }
                                </div>
                                    
                            </div>

                        </div>
                        
                        <button 
                            className={`h-[${islandHeight}rem] w-[4rem] rounded-r-[4rem] bg-primary-100 transition-all hover:scale-105`}
                            onClick={() => setCurrent(current === testimonials.length - 1 ? 0 : current + 1)}
                        >
                            &rarr;
                        </button>
                        
                    </div>

                    
                </div>
            </div>

            {/* Mobile UI */}

            <div className='block lg:hidden h-fit'>
                {/* Title and subtitle */}
                <div className="flex flex-col items-center justify-center my-4">
                    <h1 className="px-4 text-3xl font-bold"><SafeHtml value={block.main?.header?.title}/></h1>
                    <h2 className="px-4 text-xl"><SafeHtml value={block.main?.header?.subtitle}/></h2>
                </div>
                <div id="scrollable" className="grid grid-flow-col overflow-y-auto overscroll-x-contain snap-mandatory snap-always snap-x">
                    {testimonials.map((testimonial, index) => (
                        <>
                            <div className={`w-[90vw] h-[23rem] snap-center p-8 mx-2 bg-primary-100 rounded-3xl shadow-2xl border flex snap-always flex-col justify-between`}>
                                <div>
                                    <Image 
                                      profile={profile}
                                      value={testimonial.company.value}
                                      alt={testimonial.company.alt}
                                      className="object-contain h-12 text-primary-0"
                                    />
                                </div>
                                <div>
                                    <h1 className="text-gray-800 text-md line-clamp-3"><SafeHtml value={testimonial.quote}/></h1>
                                </div>
                                <div className="flex flex-row items-center">
                                    <Image
                                        profile={profile}
                                        value={testimonial.picture.value}
                                        alt={testimonial.picture.alt}
                                        className="w-12 h-12 rounded-full"
                                    />
                                    <div className="px-2">
                                        <h2 className="text-sm">
                                            <SafeHtml value={testimonial.name}/>
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

