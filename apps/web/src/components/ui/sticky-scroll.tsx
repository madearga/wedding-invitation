'use client';
import React from 'react';

const StickyScroll = () => {
  return (
    <div>
        <div className='wrapper'>
          <section className='text-white  h-screen  w-full bg-slate-950  grid place-content-center sticky top-0'>
            <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>

            <div className='text-center space-y-6'>
              <h1 className='2xl:text-7xl text-5xl px-8 font-semibold tracking-tight leading-[120%] bg-gradient-to-r from-white via-rose-100 to-pink-100 bg-clip-text text-transparent'>
                Andrea & Arga
              </h1>
              <p className='text-xl md:text-2xl text-rose-100 font-light tracking-wide'>
                We are getting married
              </p>
              <div className='text-lg text-white/80 font-medium'>
                Saturday, December 14, 2024
              </div>
              <div className='mt-8'>
                <div className='inline-block px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20'>
                  <span className='text-white/90 text-sm font-medium'>Scroll to discover our story</span>
                  <span className='ml-2 text-white/60'>↓</span>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Wedding Details Section */}
        <section className='text-white w-full bg-gradient-to-b from-slate-900 to-slate-950 py-20'>
          <div className='max-w-6xl mx-auto px-8'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent'>
                Wedding Details
              </h2>
              <p className='text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed'>
                We can't wait to celebrate this special day with you. Here's everything you need to know.
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
              {/* Ceremony Section */}
              <div className='text-center space-y-6'>
                <div className='w-16 h-16 bg-rose-500 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <span className='text-2xl'>💒</span>
                </div>
                <h3 className='text-2xl font-semibold text-rose-300'>Ceremony</h3>
                <div className='space-y-2 text-gray-300'>
                  <p className='text-lg font-medium'>Saturday, December 14, 2024</p>
                  <p className='text-rose-200'>3:00 PM</p>
                  <p className='text-sm'>Sacred Heart Cathedral<br />Jakarta, Indonesia</p>
                </div>
              </div>

              {/* Reception Section */}
              <div className='text-center space-y-6'>
                <div className='w-16 h-16 bg-rose-500 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <span className='text-2xl'>🎉</span>
                </div>
                <h3 className='text-2xl font-semibold text-pink-300'>Reception</h3>
                <div className='space-y-2 text-gray-300'>
                  <p className='text-lg font-medium'>Saturday, December 14, 2024</p>
                  <p className='text-pink-200'>6:00 PM</p>
                  <p className='text-sm'>Grand Ballroom<br />The Ritz-Carlton Jakarta</p>
                </div>
              </div>

              {/* RSVP Section */}
              <div className='text-center space-y-6'>
                <div className='w-16 h-16 bg-rose-500 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <span className='text-2xl'>💌</span>
                </div>
                <h3 className='text-2xl font-semibold text-purple-300'>RSVP</h3>
                <div className='space-y-2 text-gray-300'>
                  <p>Please RSVP by</p>
                  <p className='text-lg font-medium text-purple-200'>November 30, 2024</p>
                  <p className='text-sm'>Contact: +62 812-3456-7890<br />or reply to this invitation</p>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className='mt-20 text-center space-y-8'>
              <h2 className='text-3xl font-semibold text-rose-300'>Dress Code & Information</h2>
              <p className='text-xl text-gray-300 max-w-2xl mx-auto'>
                Semi-formal attire requested. Colors: Navy, black, or any elegant attire.
                Please avoid white or ivory.
              </p>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-12'>
                <div className='bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10'>
                  <h3 className='text-xl font-semibold text-rose-300 mb-3'>Parking</h3>
                  <p className='text-gray-300'>Valet parking available at both venues</p>
                </div>
                <div className='bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10'>
                  <h3 className='text-xl font-semibold text-pink-300 mb-3'>Accommodations</h3>
                  <p className='text-gray-300'>Special rates available at The Ritz-Carlton Jakarta</p>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  );
};

export default StickyScroll;