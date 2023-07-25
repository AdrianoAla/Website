import React from 'react';
import {SafeHtml, Image, twMerge} from '@uniwebcms/module-sdk'


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
    <div className={twMerge(`relative flex flex-col items-center justify-center w-full ${block.theme}`, !main.banner && "bg-primary-100")}>
        {/* background image */}
        {main.banner && <div className="absolute inset-0 w-full h-full -z-10">
            <Image
                profile={profile}
                value={main.banner.value}
                alt={main.banner.alt}
                className="object-cover w-full h-full"
            />
        </div>}
        <h2 className='mx-2 mt-16 mb-2 text-lg text-center text-gray-500' ><SafeHtml value={subheading}/></h2>
        <h1 className='mx-2 mb-4 text-4xl font-bold text-center sm:text-left'><SafeHtml value={title}/></h1>
        <h2 className='mx-2 mb-8 text-lg text-center text-gray-500' ><SafeHtml value={subtitle}/></h2>
        <div className=" lg:border-text-primary-25 mb-[-3rem] w-[100%] z-10 max-w-7xl">
            <nav aria-label="Progress">
                <ol
                role="list"
                className="overflow-hidden rounded-sm lg:flex lg:rounded-none lg:border-l lg:border-r lg:border-primary-5"
                >
                {steps.map((step, stepIdx) => (
                    <li key={step.id} className="relative overflow-hidden border-t border-b border-primary-5 bg-primary-100 lg:flex-1">
                    <div
                        className={classNames(
                        stepIdx === 0 ? 'border-b-0 rounded-t-md' : '',
                        stepIdx === steps.length - 1 ? 'border-t-0 rounded-b-md' : '',
                        'border border-gray-200 overflow-hidden lg:border-0'
                        )}
                    >
                        
                        <a className="group">
                        <span
                            className={classNames(
                            stepIdx !== 0 ? 'lg:pl-9' : '',
                            'px-6 py-5 flex items-start text-sm font-medium'
                            )}
                        >
                            <span className="flex-shrink-0">
                            <div className="flex items-center justify-center w-10 h-10 border-2 rounded-full border-secondary-75">
                                <div><SafeHtml className="!text-secondary-75" value={step.id+1}/></div>
                            </div>
                            </span>
                            <span className="mt-0.5 ml-4 flex min-w-0 flex-col">
                                <h3 className="text-xs font-medium text-indigo-600"><SafeHtml value={step.name}/></h3>
                                <p className="text-sm font-medium text-gray-500"><SafeHtml value={step.description}/></p>
                            </span>
                        </span>
                        </a>

                        {stepIdx !== 0 ? (
                        <>
                            {/* Separator */}
                            <div className="absolute inset-0 top-0 left-0 hidden w-3 lg:block" aria-hidden="true">
                            <svg
                                className="w-full h-full text-primary-5"
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
