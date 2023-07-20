import React from 'react';
import {SafeHtml, Image} from '@uniwebcms/module-sdk'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function StepsTimeline({block, profile}) {

    const {main, items} = block;

    const { subheading, title, subtitle } = main.header;


    const steps = items.map((item, id) => {
        const { header } = item;
        const { subtitle, description } = header;
        return {
            id: id,
            name: subtitle,
            description: description,
            href: "#",
        }
    })

  return (
    <div className="relative flex flex-col items-center justify-center w-full">
        {/* background image */}
        {main.banner && <div className="absolute inset-0 w-full h-full -z-10">
            <Image
                profile={profile}
                value={main.banner.value}
                alt={main.banner.alt}
                className="object-cover w-full h-full"
            />
        </div>}
        <p className='mx-2 mt-16 mb-2 text-lg text-center text-gray-500' ><SafeHtml value={subheading}/></p>
        <h1 className='mx-2 mb-4 text-4xl font-bold text-center sm:text-left'><SafeHtml value={title}/></h1>
        <p className='mx-2 mb-8 text-lg text-center text-gray-500' ><SafeHtml value={subtitle}/></p>
        <div className=" lg:border-gray-200 mb-[-3rem] w-[100%] z-10 max-w-7xl">
            <nav aria-label="Progress">
                <ol
                role="list"
                className="overflow-hidden rounded-sm lg:flex lg:rounded-none lg:border-l lg:border-r lg:border-gray-200"
                >
                {steps.map((step, stepIdx) => (
                    <li key={step.id} className="relative overflow-hidden bg-white border-t border-b lg:flex-1">
                    <div
                        className={classNames(
                        stepIdx === 0 ? 'border-b-0 rounded-t-md' : '',
                        stepIdx === steps.length - 1 ? 'border-t-0 rounded-b-md' : '',
                        'border border-gray-200 overflow-hidden lg:border-0'
                        )}
                    >
                        
                        <a className="group">
                        <span
                            className="absolute top-0 left-0 w-1 h-full bg-transparent group-hover:bg-gray-200 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full"
                            aria-hidden="true"
                        />
                        <span
                            className={classNames(
                            stepIdx !== 0 ? 'lg:pl-9' : '',
                            'px-6 py-5 flex items-start text-sm font-medium'
                            )}
                        >
                            <span className="flex-shrink-0">
                            <span className="flex items-center justify-center w-10 h-10 border-2 border-indigo-600 rounded-full">
                                <span className="text-indigo-600"><SafeHtml value={step.id+1}/></span>
                            </span>
                            </span>
                            <span className="mt-0.5 ml-4 flex min-w-0 flex-col">
                            <span className="text-xs font-medium text-indigo-600"><SafeHtml value={step.name}/></span>
                            <span className="text-sm font-medium text-gray-500"><SafeHtml value={step.description}/></span>
                            </span>
                        </span>
                        </a>

                        {stepIdx !== 0 ? (
                        <>
                            {/* Separator */}
                            <div className="absolute inset-0 top-0 left-0 hidden w-3 lg:block" aria-hidden="true">
                            <svg
                                className="w-full h-full text-gray-300"
                                viewBox="0 0 12 82"
                                fill="none"
                                preserveAspectRatio="none"
                            >
                                <path d="M0.5 0V31L10.5 41L0.5 51V82" stroke="currentcolor" vectorEffect="non-scaling-stroke" />
                            </svg>
                            </div>
                        </>
                        ) : null}
                    </div>
                    </li>
                ))}
                </ol>
            </nav>
        </div>
    </div>
  )
}
