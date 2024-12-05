'use client';

import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='w-full h-screen flex flex-col items-center'>

      <div className='w-10/12 h-full flex flex-col items-center justify-center text-2xl'>
        <h1 className='text-3xl mb-4'>404 - Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <Link href="/">
          <p>Go back to the <span className='font-semibold transition-all hover:underline'>homepage</span>.</p>
        </Link>
      </div>

    </div>
  );
}