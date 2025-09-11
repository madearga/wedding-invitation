'use client';
import { ReactLenis } from 'lenis/react';
import React, { forwardRef } from 'react';
import Image from 'next/image';

const Component = forwardRef<HTMLElement>((props, ref) => {
  return (
    <ReactLenis root>
      <main className='bg-black' ref={ref}>
        <div className='wrapper'>
          <section className='text-white  h-screen  w-full bg-slate-950  grid place-content-center sticky top-0'>
            <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>

            <div className='text-center space-y-6'>
              <h1 className='2xl:text-7xl text-5xl px-8 font-semibold tracking-tight leading-[120%]'>
                Andrea & Arga
              </h1>
              <p className='text-xl text-gray-300 max-w-2xl mx-auto'>
                We are getting married and would love for you to join us in celebrating our special day
              </p>
              <div className='text-lg text-gray-400'>
                Saturday, December 14, 2024
              </div>
              <div className='animate-bounce mt-8'>
                <span className='text-2xl'>👇</span>
                <p className='text-sm text-gray-400 mt-2'>Scroll to learn more</p>
              </div>
            </div>
          </section>
        </div>

        <section className='text-white w-full bg-slate-950 py-20'>
          <div className='max-w-6xl mx-auto px-8'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
              {/* Ceremony Section */}
              <div className='text-center space-y-6'>
                <div className='w-16 h-16 bg-rose-500 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <span className='text-2xl'>💒</span>
                </div>
                <h3 className='text-2xl font-semibold'>Ceremony</h3>
                <div className='space-y-2 text-gray-300'>
                  <p className='text-lg'>Saturday, December 14, 2024</p>
                  <p>3:00 PM</p>
                  <p className='text-sm'>Sacred Heart Cathedral<br />Jakarta, Indonesia</p>
                </div>
              </div>

              {/* Reception Section */}
              <div className='text-center space-y-6'>
                <div className='w-16 h-16 bg-rose-500 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <span className='text-2xl'>🎉</span>
                </div>
                <h3 className='text-2xl font-semibold'>Reception</h3>
                <div className='space-y-2 text-gray-300'>
                  <p className='text-lg'>Saturday, December 14, 2024</p>
                  <p>6:00 PM</p>
                  <p className='text-sm'>Grand Ballroom<br />The Ritz-Carlton Jakarta</p>
                </div>
              </div>

              {/* RSVP Section */}
              <div className='text-center space-y-6'>
                <div className='w-16 h-16 bg-rose-500 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <span className='text-2xl'>💌</span>
                </div>
                <h3 className='text-2xl font-semibold'>RSVP</h3>
                <div className='space-y-2 text-gray-300'>
                  <p>Please RSVP by</p>
                  <p className='text-lg'>November 30, 2024</p>
                  <p className='text-sm'>Contact: +62 812-3456-7890<br />or reply to this invitation</p>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className='mt-20 text-center space-y-8'>
              <h2 className='text-3xl font-semibold'>Dress Code</h2>
              <p className='text-xl text-gray-300 max-w-2xl mx-auto'>
                Semi-formal attire requested. Colors: Navy, black, or any elegant attire.
                Please avoid white or ivory.
              </p>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-12'>
                <div className='space-y-4'>
                  <h3 className='text-xl font-semibold'>Parking</h3>
                  <p className='text-gray-300'>Valet parking available at both venues</p>
                </div>
                <div className='space-y-4'>
                  <h3 className='text-xl font-semibold'>Accommodations</h3>
                  <p className='text-gray-300'>Special rates available at The Ritz-Carlton Jakarta</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </ReactLenis>
  );
});

Component.displayName = 'Component';

export default Component;