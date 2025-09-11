'use client';
import { ReactLenis } from 'lenis/react';
import React, { forwardRef } from 'react';

const Component = forwardRef<HTMLElement>((props, ref) => {
  return (
    <ReactLenis root>
      <main className='bg-black' ref={ref}>
        <section className='text-white w-full bg-slate-950'>
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