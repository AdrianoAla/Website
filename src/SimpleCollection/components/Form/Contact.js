import React, {useEffect, useState} from 'react'
import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { SafeHtml, Link } from "@uniwebcms/module-sdk"

export default function Contact({block, website}) {

  const {main} = block;

  const { header, body } = main

  const { title = "", subtitle = "", alignment = "" } = header;

  const right_align = alignment === "right";

  const phoneNumberRegex = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/g;
  const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g;

  const phoneNumbers = body.paragraphs?.filter(element => element.match(phoneNumberRegex)) || [];
  const emails = body.links?.filter(element => element.label.match(emailRegex)) || [];
  const address = body.paragraphs?.filter(element => !element.match(phoneNumberRegex))?.[0] || [];
  console.log(main);


  return (
    <div className={` ${block.theme} relative bg-[var(--primary)] isolate`}>
      <div className="grid grid-cols-1 mx-auto max-w-7xl lg:grid-cols-2">
        {right_align && <Form website={website}/>}
        <div className="relative px-6 pt-24 pb-20 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="max-w-xl mx-auto lg:mx-0 lg:max-w-lg">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              <SafeHtml value={title} />
            </h1>
            <h2 className="mt-6 text-lg leading-8 text-gray-600">
              <SafeHtml value={subtitle} />
            </h2>
            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
              {address && <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <BuildingOffice2Icon className="w-6 text-[var(--on\_primary)] h-7" aria-hidden="true" />
                </dt>
                <dd>
                  <SafeHtml value={address} />
                </dd>
              </div>}
              {phoneNumbers.length > 0 && <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <PhoneIcon className="w-6 text-[var(--on\_primary)] h-7" aria-hidden="true" />
                </dt>
                <div className='flex flex-col'>
                  {phoneNumbers.map((phoneNumber, index) => {
                    return (
                    <dd className='block'>
                      <Link to={`tel:${phoneNumber}`} key={index}>
                        <SafeHtml value={phoneNumber}/>
                      </Link>
                    </dd>
                    );
                  })}
                </div>
              </div>}
              {emails.length > 0 && <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon className="w-6 text-[var(--on\_primary)] h-7" aria-hidden="true" />
                </dt>
                <div className='flex flex-col'>
                  {emails.map(email => 
                    <dd>
                      <Link to={`mailto:${email.href}`}>
                        <SafeHtml value={email.label}/>
                      </Link>
                    </dd>
                  )}
                </div>
              </div>}
            </dl>
          </div>
        </div>
        {!right_align && <Form website={website}/>}
      </div>
    </div>
  )
}

const Form = (props) => {
  const {website} = props;
  return (
    <form action="#" method="POST" className="px-6 pt-20 pb-24 sm:pb-32 lg:px-8 lg:py-48" onSubmit={(event)=> {
      event.preventDefault();

      // get email
      const email = event.target.email.value;
      // get first name
      const firstName = event.target['first-name'].value;
      // get last name
      const lastName = event.target['last-name'].value;
      // get phone number
      const phoneNumber = event.target['phone-number'].value;
      // get message
      const message = event.target.message.value;

      website.submitWebsiteForm('contact', {email, firstName, lastName, phoneNumber, message}).then((res) => {
        console.log(res)
        alert("Thank you for contacting us.")
      });
    }}>
      <div className="max-w-xl mx-auto lg:mr-0 lg:max-w-lg">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-[var(--on\_primary)]">
              First name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-[var(--on\_primary)]">
              Last name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-[var(--on\_primary)]">
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-[var(--on\_primary)]">
              Phone number
            </label>
            <div className="mt-2.5">
              <input
                type="tel"
                name="phone-number"
                id="phone-number"
                autoComplete="tel"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-[var(--on\_primary)]">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-8">
          <button
            type="submit"
            className="rounded-md bg-[var(--secondary)] px-3.5 py-2.5 text-center text-sm font-semibold text-[var(--on\_secondary)] shadow-sm hover:bg-[var(--on\_secondary)] hover:text-[var(--secondary)] hover:border-[var(--secondary)] transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Send message
          </button>
        </div>
      </div>
    </form>
  )
}