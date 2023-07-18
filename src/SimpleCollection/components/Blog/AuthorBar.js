import React, { useState, useEffect } from 'react';
import { useGetProfile, Image } from '@uniwebcms/module-sdk';

export default function AuthorBar({ profile, Link }) {
    const metadata = profile.getBasicInfo();

    const { owner, date } = metadata;

    const ownerId = owner?.[0];
    
    const memberProfile = (useGetProfile('members', ownerId));
    
    if (!memberProfile) return null;

    const { title } = memberProfile.getBasicInfo();

    const ProfileMarkup = (
        <>
            <h1>Testing please work T_T</h1>
            <Link profile={{ contentType: 'members', contentId: ownerId }}>
                <div className='w-10 h-10 mr-4 rounded-full md:w-12 md:h-12'>
                    <Image profile={memberProfile} type={'avatar'} rounded></Image>
                </div>
            </Link>
            <div className='flex flex-col'>
                <h2 className='flex items-center self-stretch text-base text-gray-800'>{title}</h2>
                <p className='text-sm text-gray-400'>{date}</p>
            </div>
        </>
    );

    return (
        <div
            className='`w-full flex items-center mx-auto mt-12 px-4 md:px-0'
            style={{ maxWidth: '740px' }}>
            {ProfileMarkup}
        </div>
    );
}