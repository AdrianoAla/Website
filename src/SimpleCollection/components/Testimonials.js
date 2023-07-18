import React from "react";
import {Image, SafeHtml} from "@uniwebcms/module-sdk"

export default function Testimonials({block, profile}) {

    const { items } = block;

    const testimonials = items.map((item) => {
        const { header, body } = item;
        const { description } = header;

        return {
            quote: description,
            name: (body.paragraphs[0] + "<br/>" + body.paragraphs[1]),
            company: item.banner || null,
            picture: body.imgs[0] || null,
        };
    });

    return (
      <section className="flex flex-col justify-between bg-indigo-800 md:flex-row">
        {testimonials.map((testimonial) => (
        <div className="w-screen px-8 py-4 border border-indigo-900 md:w-1/2 md:px-16">
          <div className="items-baseline px-6 py-12 md:flex md:flex-col md:py-16 md:pl-0 md:pr-10 lg:pr-16">
            <div className="md:flex-shrink-0">
              <Image 
                  profile={profile}
                  value={testimonial.company.value}
                  alt={testimonial.company.alt}
                  className={`max-h-12 object-contain float-left`}
                />
            </div>
            <blockquote className="mt-6 md:flex md:flex-grow md:flex-col">
              <div className="relative text-lg font-medium text-white md:flex-grow">
                <svg
                  className="absolute top-0 left-0 w-8 h-8 text-indigo-600 transform -translate-x-3 -translate-y-2"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="relative" >
                  <SafeHtml value={testimonial.quote}/>
                </p>
              </div>
              <footer className="mt-8">
                <div className="flex items-start">
                  <div className="inline-flex flex-shrink-0 border-2 border-white rounded-full">
                    <Image 
                      profile={profile}
                      value={testimonial.picture.value}
                      alt={testimonial.picture.alt}
                      className={`w-12 h-12 rounded-full`}
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-base font-medium text-white">
                      <SafeHtml value={testimonial.name}/>
                    </div>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
        ))}
      </section>
    )
  }
  

  // max-w-7xl md:grid md:grid-cols-2 md:px-6 lg:px-8