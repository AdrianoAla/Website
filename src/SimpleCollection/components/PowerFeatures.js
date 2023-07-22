import React from 'react'
import {SafeHtml, Image, Link} from '@uniwebcms/module-sdk'


export default function PowerFeatures({block, profile}) {

    const {title = "", subtitle = ""} = block.main.header;

    const {items} = block

    const powerFours = items.map((item) => {
        const {subtitle = "", description = ""} = item.header;
        const link = item.body?.links?.[0] || null;
        return {
            title: subtitle,
            desc: description,
            image: item?.banner,
            link
        }   
    })

    return (
        <div className={`bg-[var(--primary)] ${block.theme}`}>
            <div className={` py-16 text-center leading-[2.3rem]`}>
                <h1 className="my-4 text-4xl font-bold sm:text-5xl sm:font-normal">
                    <SafeHtml value={title} />
                </h1>
                <h2>
                    <SafeHtml value={subtitle} />
                </h2>
            </div>
            <div className={`flex flex-col items-center mx-24 mb-24 sm:items-start sm:flex-row sm:justify-center`}>
                {
                    powerFours.map((power, index) => (
                        <div key={index} className="w-[150%] py-12 sm:py-16 md:w-1/5 sm:mx-8">
                            <Image
                                value={power.image.value}
                                alt={power.image.alt}
                                profile={profile}
                                className="w-24 h-24 p-2 border-4 border-[var(--secondary)] rounded-3xl shadow-md bg-[var(--secondary)] object-contain"
                            />
                            
                            <h3 className="my-4 text-2xl font-bold">
                                {power.title}
                            </h3>
                            <p>
                                {power.desc}
                            </p>
                            {power.link && <Link to={power.link.href} className="my-2">
                                <SafeHtml value={power.link.label} className="font-bold"/>
                            </Link>}
                        </div>
                    ))
                }
            </div>
        </div>
    )

}