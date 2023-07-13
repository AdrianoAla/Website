import React, { useEffect, useState } from 'react';
import {DocumentImage} from '@uniwebcms/module-sdk';

export default function Clients(props) {
    const { documentId, activeLang, theme, properties, main, items } = props;
    
    const [clients, setClients] = useState([]);
    const {title} = main?.header || {};

    useEffect(() => {
    const c = items.forEach((item) => {
        const { header, body } = item;
    
        const { subtitle } = header;
  

        setClients(clients => [...clients,{
            name: subtitle,
            image: body?.imgs?.[0] || {},
        }]);
    });
  }, []);

    return (
      <div className="bg-white">
        <div className="px-6 py-12 mx-auto max-w-7xl lg:py-16 lg:px-8">
          <p className="text-lg font-semibold text-center text-gray-600" dangerouslySetInnerHTML={{__html: title}}></p>
          <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
            {clients.map((client) => (
              <div className="flex justify-center col-span-1 px-8 py-8 transition-all ease-in-out bg-gray-50 hover:bg-gray-700 hover:cursor-pointer">
                <DocumentImage
                  contentId={documentId}
                  value={client.image.value}
                  alt={client.name}
                  activeLang={activeLang}
                  className={"max-h-12"}
              ></DocumentImage>
                
                {/* <img
                  className="max-h-12"
                  src={client.image}
                  alt={client.name}
                /> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }