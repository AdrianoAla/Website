import React, { useEffect } from 'react';

import { Profile, useLoadProfileBody, useGetProfile } from '@uniwebcms/module-sdk';
import { useState } from 'react';

export default function Blog({block}) {
    const [posts, setPosts] = useState([]);
    const { theme, properties, items } = block;

    console.log("params", block.params)
    const [list, setList] = useState([]);
    const {title = '', subtitle = ''} = block.main.header || {};

    const p = useGetProfile("list", 6);

    if (!p) return null;

    const articles = p.at("selected_items");

    console.log("profile", p);

    console.log("articles", articles)

    articles.forEach(article => {

      //let profile = useGetProfile(article.profile_type, article.profile_id)

      //console.log(`article ${article.profile_id}`, profile);

    })


    // const data = useLoadProfileBody(p);

    // console.log("data", data);
    
    // useEffect(() => {
    //   getListProfileItems(dataSource.id).then (data => {
          
    //       data.forEach(item => {
    //         // '{"date": "2020-02-13", "title": "Test", "caption": "whatever", "category": [1, "Institutional"], "visibility": [1, "Everyone"]}'

    //         const head = JSON.parse(item.head);
    //         const {contentId} = item;

    //         const post = {
    //           date: head.date,
    //           title: head.title,
    //           description: head.caption,
    //           category: head.category[1],
    //           visibility: head.visibility[1],
    //           contentId: contentId,
    //         }

    //         if (posts.length < 3) {
    //           setPosts(posts => [...posts, post]);
    //         }
            
    //       })
    //   })
    // }, []);

    return (
      <div className="relative px-6 pt-16 pb-20 bg-gray-50 lg:px-8 lg:pt-24 lg:pb-28">
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl" dangerouslySetInnerHTML={{__html: title}}></h2>
            <p className="max-w-2xl mx-auto mt-3 text-xl text-gray-500 sm:mt-4" dangerouslySetInnerHTML={{__html: subtitle}}></p>
          </div>
          <div className="grid max-w-lg gap-5 mx-auto mt-12 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <div key={post.title} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div className="flex-shrink-0">
                  <img className="object-cover w-full h-48" src={'https://www.travelandleisure.com/thmb/KTIha5CLifSoUD3gx0YP51xc3rY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/blue0517-4dfc85cb0200460ab717b101ac07888f.jpg'} alt="" />
                </div>
                <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">
                      <a href={post.contentId} className="hover:underline" dangerouslySetInnerHTML={{__html: post.category}}>
                      </a>
                    </p>
                    <a href={post.href} className="block mt-2">
                      <p className="text-xl font-semibold text-gray-900"dangerouslySetInnerHTML={{__html: post.title}}></p>
                      <p className="mt-3 text-base text-gray-500"dangerouslySetInnerHTML={{__html: post.description}}></p>
                    </a>
                  </div>
                  <div className="flex items-center mt-6">
                    <div className="flex-shrink-0">
                      {/* <a href={post.author.href}>
                        <span className="sr-only">{post.author.name}</span>
                      </a> */}
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        <a href={'WIP'} className="hover:underline">
                          WIP
                        </a>
                      </p>
                      <div className="flex space-x-1 text-sm text-gray-500">
                        <p dangerouslySetInnerHTML={{__html: post.date}}></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    )
  }