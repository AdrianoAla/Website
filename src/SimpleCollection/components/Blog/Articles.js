import React, { useEffect } from 'react';

import { Profile, Link, SafeHtml, Image, useGetProfile } from '@uniwebcms/module-sdk';
import { useState } from 'react';

export default function Articles({block}) {

    const [posts, setPosts] = useState([]);
    const { theme, properties, items } = block;

    const {blog_page} = block.params

    const prefix = blog_page ? '' : "Blog/"

    const {title = '', subtitle = ''} = block.main.header || {};

    if (block.dataSource?.contentType != "list") return null;

    useEffect(() => {
      Profile.getProfilesInList(block.dataSource.contentId).then(data => {
        if (!blog_page) data = data.slice(0, 3)
        setPosts(data);
      })
    }
    , []);

    return (
      <div className={`relative px-6 pt-16 pb-20 bg-ßgray-50 lg:px-8 lg:pt-24 lg:pb-28 ${block.theme} bg-primary-100`}>
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"><SafeHtml value={title}/></h2>
            <p className="max-w-2xl mx-auto mt-3 text-xl text-gray-500 sm:mt-4"><SafeHtml value={subtitle}/></p>
          </div>
          <div className="grid max-w-lg gap-5 mx-auto mt-12 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => {
              return (
                <Card post={post} prefix={prefix}/>
              )
            
            })}

          </div>
        </div>
      </div>
    )
  }



const Card = ({post, prefix}) => {
  const basicInfo = post.getBasicInfo();
  
  const owner = useGetProfile('members', basicInfo.head.owner)

  if (!owner) return null;
  
  const ownerInfo = owner.getBasicInfo();

  return (
    <Link to={`${prefix}${post.contentId}`}>
      <div key={basicInfo.title} className="flex flex-col overflow-hidden transition-all duration-150 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl hover:border-primary-0 max-h-[400px] h-full">
        <div className="flex-shrink-0">
          {basicInfo.banner && <Image
            profile={post}
            type={'banner'}
            className="object-cover w-full h-48"
          />}
        </div>
        <div className="flex flex-col justify-between flex-1 p-6 bg-primary-95">
          <div className="flex-1">
            <p className="text-sm font-medium text-indigo-600">
              <a className="hover:underline">
                <SafeHtml value={basicInfo.head.category[1]}/>
              </a>
            </p>
            <a className="block mt-2">
              <p className="text-xl font-semibold text-gray-900"><SafeHtml value={basicInfo.title}/></p>
              <p className="mt-3 text-base text-gray-500"><SafeHtml value={basicInfo.subtitle}/></p>
            </a>
          </div>
          <div className="flex items-center mt-6">
            <Image 
              profile={owner}
              type={'avatar'}
              className="object-cover w-10 h-10 rounded-full"
            />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">
                <Link profile={owner} className="hover:underline">
                  {ownerInfo.title}
                </Link>
              </p>
              <div className="flex space-x-1 text-sm text-gray-500">
                <p><SafeHtml value={basicInfo.lastEditTime}/></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </Link>
  )
}