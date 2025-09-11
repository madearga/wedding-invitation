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

            <h1 className='2xl:text-7xl text-5xl px-8 font-semibold text-center tracking-tight leading-[120%]'>
            "Demikianlah mereka bukan lagi dua, melainkan satu. Karena itu, apa yang telah dipersatukan Allah, tidak boleh diceraikan manusia.”<br />
            <br />
            </h1>
          </section>
        </div>

        <section className='text-white   w-full bg-slate-950  '>
          <div className='grid grid-cols-12 gap-2'>
            <div className='grid gap-2 col-span-4'>
              <figure className=' w-full'>
                <img
                  src='https://rvmyspork8.ufs.sh/f/2HgZCCFydUxwQrhhdeHN1hPlkexZ9IT2J3Bnbmd0DRazWMsA'
                  alt='Wedding photo'
                  className='transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md '
                />
              </figure>
              <figure className=' w-full'>
                <img
                  src='https://rvmyspork8.ufs.sh/f/2HgZCCFydUxwQrhhdeHN1hPlkexZ9IT2J3Bnbmd0DRazWMsA'
                  alt='Wedding photo'
                  className='transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md '
                />
              </figure>
              <figure className=' w-full'>
                <img
                  src='https://rvmyspork8.ufs.sh/f/2HgZCCFydUxwABGuk6zKE5DybIgcHa076Fj3XAQx8hYLqC4l'
                  alt='Wedding photo'
                  className='transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md '
                />
              </figure>
              <figure className='w-full'>
                <img
                  src='https://rvmyspork8.ufs.sh/f/2HgZCCFydUxwIOH3iNW43dDvfARbaxCXp5klysPJYgO8crGS'
                  alt='Wedding photo'
                  className='transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md '
                />
              </figure>
              <figure className='w-full'>
                <img
                  src='https://rvmyspork8.ufs.sh/f/2HgZCCFydUxwo25LdaUCytP1FRGdSmeTnQlHMzqvhAiKagfL'
                  alt='Wedding photo'
                  className='transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md '
                />
              </figure>
            </div>
            <div className='sticky top-0 h-screen w-full col-span-4 gap-2  grid grid-rows-3'>
              <figure className='w-full h-full '>
                <img
                  src='https://rvmyspork8.ufs.sh/f/2HgZCCFydUxwQrhhdeHN1hPlkexZ9IT2J3Bnbmd0DRazWMsA'
                  alt='Wedding photo'
                  className='transition-all duration-300 h-full w-full  align-bottom object-cover rounded-md '
                />
              </figure>
              <figure className='w-full h-full '>
                <img
                  src='https://rvmyspork8.ufs.sh/f/2HgZCCFydUxwABGuk6zKE5DybIgcHa076Fj3XAQx8hYLqC4l'
                  alt='Wedding photo'
                  className='transition-all duration-300 h-full w-full align-bottom object-cover rounded-md '
                />
              </figure>
              <figure className='w-full h-full '>
                <img
                  src='https://rvmyspork8.ufs.sh/f/2HgZCCFydUxwIOH3iNW43dDvfARbaxCXp5klysPJYgO8crGS'
                  alt='Wedding photo'
                  className='transition-all duration-300 h-full w-full  align-bottom object-cover rounded-md '
                />
              </figure>
            </div>
            <div className='grid gap-2 col-span-4'>
              <figure className='w-full'>
                <img
                  src='https://rvmyspork8.ufs.sh/f/2HgZCCFydUxwo25LdaUCytP1FRGdSmeTnQlHMzqvhAiKagfL'
                  alt='Wedding photo'
                  className='transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md '
                />
              </figure>
              <figure className='w-full'>
                <img
                  src='https://rvmyspork8.ufs.sh/f/2HgZCCFydUxwQrhhdeHN1hPlkexZ9IT2J3Bnbmd0DRazWMsA'
                  alt='Wedding photo'
                  className='transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md '
                />
              </figure>
              <figure className='w-full'>
                <img
                  src='https://rvmyspork8.ufs.sh/f/2HgZCCFydUxwABGuk6zKE5DybIgcHa076Fj3XAQx8hYLqC4l'
                  alt='Wedding photo'
                  className='transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md '
                />
              </figure>
              <figure className='w-full'>
                <img
                  src='https://rvmyspork8.ufs.sh/f/2HgZCCFydUxwIOH3iNW43dDvfARbaxCXp5klysPJYgO8crGS'
                  alt='Wedding photo'
                  className='transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md '
                />
              </figure>
              <figure className='w-full'>
                <img
                  src='https://rvmyspork8.ufs.sh/f/2HgZCCFydUxwo25LdaUCytP1FRGdSmeTnQlHMzqvhAiKagfL'
                  alt='Wedding photo'
                  className='transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md '
                />
              </figure>
            </div>
          </div>
        </section>
      </main>
    </ReactLenis>
  );
});

Component.displayName = 'Component';

export default Component;