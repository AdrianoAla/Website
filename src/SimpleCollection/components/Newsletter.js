import React, { useEffect } from 'react';

export default function Newsletter({block}) {

  const {title, subtitle, description} = block.main.header;

    return (
      <div className="bg-white">
        <div className="px-6 py-24 mx-auto max-w-7xl lg:flex lg:items-center lg:py-32 lg:px-8">
          <div className="lg:w-0 lg:flex-1">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl" dangerouslySetInnerHTML={{__html: title}}></h2>
            <p className="max-w-3xl mt-3 text-lg text-gray-500" dangerouslySetInnerHTML={{__html: subtitle}}>
            </p>
          </div>
          <div className="mt-8 lg:mt-0 lg:ml-8">
            <form className="sm:flex">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email-address"
                type="email"
                autoComplete="email"
                required
                className="w-full px-5 py-3 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 sm:max-w-xs"
                placeholder="Enter your email"
              />
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Notify me
                </button>
              </div>
            </form>
            <p className="mt-3 text-sm text-gray-500" dangerouslySetInnerHTML={{__html: description}}></p>
          </div>
        </div>
      </div>
    )
  }

  
  