import React, { useEffect, useState } from 'react';
import {Image, SafeHtml} from '@uniwebcms/module-sdk';

export default function LogoCloud({block, profile}) {
    const { main, items } = block;
    
    const [clients, setClients] = useState([]);
    const {title} = main?.header || {};

    useEffect(() => {
    const c = main.body.imgs.forEach((_, index) => {
  

        setClients(clients => [...clients,{
            image: main.body.imgs[index],
        }]);
    });
  }, []);

    return (
      <div className={`bg-[var(--primary)] ${block.theme}`}>
        <div className="px-6 py-12 mx-auto max-w-7xl lg:py-16 lg:px-8">
          <p className="text-lg font-semibold text-center text-gray-600" ><SafeHtml value={title} as="h1"/></p>
          <div className="mt-6 grid grid-cols-1 gap-0.5 md:grid-cols-3 lg:mt-8">
            {clients.map((client) => (
              <div className="flex justify-center col-span-1 px-8 py-8 transition-all ease-in-out logoCloudImage hover:cursor-pointer">
                <Image
                  profile={profile}
                  value={client.image.value}
                  alt={client.image.alt}
                  className={`object-contain max-h-12 w-full`}
              ></Image>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }