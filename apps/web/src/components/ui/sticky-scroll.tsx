'use client';
import { ReactLenis } from 'lenis/react';
import React, { forwardRef } from 'react';

const Component = forwardRef<HTMLElement>((_, ref) => {
  return (
    <ReactLenis root>
      <main className='bg-black' ref={ref}>
        <div className='wrapper'>
          <section className='text-white  h-screen  w-full bg-slate-950  grid place-content-center sticky top-0'>
            <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>

            <div className='text-center space-y-6'>
              <h1 className='2xl:text-7xl text-5xl px-8 font-semibold tracking-tight leading-[120%] text-rose-100'>
                Andrea & Arga
              </h1>
              <p className='text-xl text-rose-200 font-light tracking-wide'>
                We are getting married
              </p>
              <div className='text-lg text-rose-300 font-medium'>
                <p>Saturday, December 14, 2024</p>
                <p>4:00 PM - 10:00 PM</p>
              </div>
              <div className='mt-8'>
                <p className='text-rose-400 text-sm tracking-widest uppercase'>
                  Scroll down to explore our story
                </p>
                <div className='mt-4 animate-bounce'>
                  <svg className='w-6 h-6 mx-auto text-rose-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 14l-7 7m0 0l-7-7m7 7V3' />
                  </svg>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Our Story Section */}
        <section className='text-white w-full bg-gradient-to-b from-slate-950 to-slate-900 py-20'>
          <div className='max-w-4xl mx-auto px-8'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl font-semibold text-rose-100 mb-6'>Our Love Story</h2>
              <div className='w-24 h-1 bg-rose-500 mx-auto rounded-full'></div>
            </div>

            <div className='grid md:grid-cols-2 gap-12 items-center'>
              <div className='space-y-6'>
                <div className='bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-rose-500/20'>
                  <h3 className='text-2xl font-semibold text-rose-200 mb-3'>How We Met</h3>
                  <p className='text-gray-300 leading-relaxed'>
                    Our story began in the most unexpected way. What started as a simple conversation
                    turned into something beautiful and meaningful. Every moment we spend together
                    reminds us how lucky we are to have found each other.
                  </p>
                </div>

                <div className='bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-rose-500/20'>
                  <h3 className='text-2xl font-semibold text-rose-200 mb-3'>The Proposal</h3>
                  <p className='text-gray-300 leading-relaxed'>
                    Under the stars, surrounded by the people we love most, Arga asked Andrea
                    to spend the rest of their life together. It was a moment filled with joy,
                    laughter, and the promise of forever.
                  </p>
                </div>
              </div>

              <div className='space-y-6'>
                <div className='bg-gradient-to-br from-rose-500/20 to-pink-500/20 rounded-lg p-8 text-center border border-rose-500/30'>
                  <div className='text-6xl mb-4'>💍</div>
                  <h3 className='text-2xl font-semibold text-rose-100 mb-2'>We're Getting Married!</h3>
                  <p className='text-rose-200'>Join us as we celebrate our love</p>
                </div>

                <div className='bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-rose-500/20'>
                  <h3 className='text-2xl font-semibold text-rose-200 mb-3'>Why We're Perfect Together</h3>
                  <ul className='text-gray-300 space-y-2'>
                    <li>• We share the same dreams and values</li>
                    <li>• We make each other laugh every day</li>
                    <li>• We support each other's growth</li>
                    <li>• We create beautiful memories together</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Wedding Details Section */}
        <section className='text-white w-full bg-slate-900 py-20'>
          <div className='max-w-6xl mx-auto px-8'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl font-semibold text-rose-100 mb-6'>Wedding Details</h2>
              <div className='w-24 h-1 bg-rose-500 mx-auto rounded-full'></div>
            </div>

            <div className='grid md:grid-cols-3 gap-8'>
              <div className='text-center'>
                <div className='w-16 h-16 bg-rose-500 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <svg className='w-8 h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' />
                  </svg>
                </div>
                <h3 className='text-xl font-semibold text-rose-200 mb-2'>When</h3>
                <p className='text-gray-300'>Saturday, December 14, 2024</p>
                <p className='text-gray-300'>4:00 PM - 10:00 PM</p>
              </div>

              <div className='text-center'>
                <div className='w-16 h-16 bg-rose-500 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <svg className='w-8 h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' />
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 11a3 3 0 11-6 0 3 3 0 016 0z' />
                  </svg>
                </div>
                <h3 className='text-xl font-semibold text-rose-200 mb-2'>Where</h3>
                <p className='text-gray-300'>Grand Ballroom</p>
                <p className='text-gray-300'>Jakarta Convention Center</p>
                <p className='text-gray-300'>Jakarta, Indonesia</p>
              </div>

              <div className='text-center'>
                <div className='w-16 h-16 bg-rose-500 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <svg className='w-8 h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' />
                  </svg>
                </div>
                <h3 className='text-xl font-semibold text-rose-200 mb-2'>Dress Code</h3>
                <p className='text-gray-300'>Semi-Formal</p>
                <p className='text-gray-300'>Colors: Pastel & White</p>
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