import React from "react";
import {SafeHtml, Image, Link} from '@uniwebcms/module-sdk';


// const posts = [
//   {
//     title: 'Boost your conversion rate',
//     href: '#',
//     description:
//       'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.',
//     imageUrl:
//       'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
//   },
// ]

export default function List({block, profile, website}) {

  const {main, items} = block;
  console.log("main", main);
  const {title, subtitle} = main?.header;

  const posts = items.map((item) => {
    return {
      subtitle: item?.header?.subtitle || "",
      description: item?.header?.description || "",
      link: item?.body?.links[0] || null,
      image: item?.banner || null,
    }
  })
  
  return (
    <div className="py-24 bg-white sm:py-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto lg:max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"><SafeHtml value={title}/></h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            <SafeHtml value={subtitle}/>
          </p>
          <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
            {posts.map((post) => (
              <article key={post.subtitle} className="relative flex flex-col gap-8 isolate lg:flex-row">
                <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                  <Image
                    profile={profile}
                    value={post.image.value}
                    alt={post.image.alt}
                    className="absolute inset-0 object-cover w-full h-full rounded-2xl bg-gray-50"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div>
                  <div className="relative max-w-xl group">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <Link to={website.makeHref(post.link?.href) || ""}>
                        <span className="absolute inset-0" />
                        {post.subtitle}
                      </Link>
                    </h3>
                    <p className="mt-5 text-sm leading-6 text-gray-600">{post.description}</p>
                  </div>
                  {/* <div className="flex pt-6 mt-6 border-t border-gray-900/5">
                    <div className="relative flex items-center gap-x-4">
                      <img src={post.author.imageUrl} alt="" className="w-10 h-10 rounded-full bg-gray-50" />
                      <div className="text-sm leading-6">
                        <p className="font-semibold text-gray-900">
                          <a href={post.author.href}>
                            <span className="absolute inset-0" />
                            {post.author.name}
                          </a>
                        </p>
                        <p className="text-gray-600">{post.author.role}</p>
                      </div>
                    </div>
                  </div> */}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
