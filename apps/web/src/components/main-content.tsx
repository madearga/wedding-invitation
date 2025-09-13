"use client";

import ScrollExpandMedia from '@/components/ui/scroll-expansion-hero';
import Location from '@/components/ui/location';
import AnimatedNumberCountdown from '@/components/ui/countdown-number';
import Wishes from '@/components/ui/wishes';
import Gifts from '@/components/ui/gifts';
import { Canvas } from '@react-three/fiber';
import { ShaderPlane } from '@/components/ui/background-paper-shaders';
import Link from 'next/link';
import Image from 'next/image';

export default function MainContent() {
  return (
    <div className="min-h-screen relative">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0 opacity-75 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 5] }} style={{ width: '100%', height: '100%' }}>
          <ShaderPlane 
            position={[0, 0, 0]} 
            color1="#452912" 
            color2="#fff7f1" 
          />
          <ShaderPlane 
            position={[-2, 1, -1]} 
            color1="#6b4423" 
            color2="#f5e6d3" 
          />
          <ShaderPlane 
            position={[2, -1, -1]} 
            color1="#3d1f0a" 
            color2="#ffffff" 
          />
          <ShaderPlane 
            position={[0, -2, -2]} 
            color1="#8b5a2b" 
            color2="#faf0e6" 
          />
          <ShaderPlane 
            position={[-3, 0, -2]} 
            color1="#2d1810" 
            color2="#f8f2e8" 
          />
          <ShaderPlane 
            position={[3, 2, -2]} 
            color1="#5c3a1e" 
            color2="#f2e6d9" 
          />
          <ShaderPlane 
            position={[1, -3, -3]} 
            color1="#704426" 
            color2="#f9f4ef" 
          />
        </Canvas>
      </div>
      
      {/* Home/Hero Section - Wedding Video */}
      <section id="home" className="relative z-10">
        <ScrollExpandMedia
        mediaType="video"
        mediaSrc="https://rvmyspork8.ufs.sh/f/2HgZCCFydUxwX9v6dVtysGOqcg2RdxTtQ4ue0vpUihWPEILN"
        posterSrc="https://images.pexels.com/photos/265748/pexels-photo-265748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        bgImageSrc="https://rvmyspork8.ufs.sh/f/2HgZCCFydUxwS35RaQ9KszXGCKoardWxuyJFchTp9RtekPAB"
        title="Our Wedding Day"
        date="Save The Date"
        scrollToExpand="Scroll to Expand"
        textBlend
      >
        <div className='max-w-4xl mx-auto text-center' style={{color: '#452912'}}>
          <p className='text-lg mb-6 leading-relaxed'>
            Setelah melalui perjalanan panjang untuk saling<br/>
            mengasihi satu dengan<br/>
            yang lain dan<br/>
            atas kehendakNya,<br/>
            kami yang berbahagia
          </p>
          
          <h2 className='text-3xl font-bold mb-2'>
            ANDREA MARIA AGNIWIJAYA
          </h2>
          <div className='mb-4'>
            <Image
              src='https://rvmyspork8.ufs.sh/f/2HgZCCFydUxw2VAaIdFydUxw8Gfas7jErZH9ePpQJkC30LvB'
              alt='Andrea Maria Agniwijaya'
              width={192}
              height={192}
              className='w-48 h-48 mx-auto rounded-full object-cover shadow-lg'
            />
          </div>
          
          <p className='text-lg mb-6'>
            Putri dari Bapak Andreas Anang Wijaya & Ibu Yovita Sandra Ekawati
          </p>
          
          <div className='text-6xl font-bold mb-6'>
            &
          </div>
          
          <h2 className='text-3xl font-bold mb-2'>
            I MADE ARGA SWARSA
          </h2>
          <div className='mb-4'>
            <Image
              src='https://rvmyspork8.ufs.sh/f/2HgZCCFydUxwQ5VFIHN1hPlkexZ9IT2J3Bnbmd0DRazWMsAK'
              alt='I Made Arga Swarsa'
              width={192}
              height={192}
              className='w-48 h-48 mx-auto rounded-full object-cover shadow-lg'
            />
          </div>
          <p className='text-lg mb-8'>
            Putra dari Bapak I Wayan Sarmadi & Ibu Indah Yana
          </p>
          
          <p className='text-lg mb-8'>
            mengundang Bapak/Ibu untuk menghadiri pernikahan kami, pada :
          </p>

          {/* Details Section */}
          <div id="details" className="scroll-mt-16"></div>

          <div className='bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8'>
            <div className='text-center mb-6'>
              <h1 className='text-6xl font-bold mb-2' style={{color: '#452912'}}>17</h1>
              <h2 className='text-2xl font-semibold mb-2' style={{color: '#452912'}}>JUMAT</h2>
              <h2 className='text-2xl font-semibold mb-2' style={{color: '#452912'}}>OKTOBER</h2>
              <h2 className='text-xl font-bold mb-2' style={{color: '#452912'}}>09.00 WIB</h2>
              <h2 className='text-2xl font-semibold' style={{color: '#452912'}}>2025</h2>
            </div>
            
            <div className='text-center'>
              <h3 className='text-xl font-semibold mb-4' style={{color: '#452912'}}>
                Gereja Hati Kudus Yesus Katedral Surabaya
              </h3>
              <p className='leading-relaxed' style={{color: '#452912'}}>
                Jl. Polisi Istimewa<br/>
                No.15, Keputran, Kec. Tegalsari, Surabaya,<br/>
                Jawa Timur 60265
              </p>
            </div>
          </div>

          <div className='bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8'>
            <p className='text-lg italic text-center leading-relaxed' style={{color: '#452912'}}>
              "Jadi mereka bukan lagi dua orang, tetapi satu. Itu sebabnya apa yang sudah disatukan oleh Allah tidak boleh diceraikan oleh manusia."
            </p>
            <p className='text-center font-semibold mt-4' style={{color: '#452912'}}>
              Matius 19:6
            </p>
          </div>

          <div className='text-center'>
            <h3 className='text-xl font-semibold mb-4' style={{color: '#452912'}}>
              Keluarga yang berbahagia:
            </h3>
            <div className='grid md:grid-cols-2 gap-0.5'>
              <div className='p-4 bg-white/10 backdrop-blur-sm rounded-lg'>
                <p className='font-semibold' style={{color: '#452912'}}>
                  Kel. Andreas Anang Wijaya
                </p>
              </div>
              <div className='p-4 bg-white/10 backdrop-blur-sm rounded-lg'>
                <p className='font-semibold' style={{color: '#452912'}}>
                  Kel. I Wayan Sarmadi
                </p>
              </div>
            </div>
          </div>
        </div>
        </ScrollExpandMedia>
      </section>

      {/* Couple Section */}
      <section id="couple" className="min-h-screen relative z-10 py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4" style={{ color: '#452912' }}>
              The Couple
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
              Arga & Agni
            </p>
          </div>

          {/* Photo Gallery Layout */}
          <div className="max-w-7xl mx-auto">
            
            {/* Mobile Layout - Magazine style, less overwhelming */}
            <div className="block lg:hidden space-y-8 px-2">
              {/* Row 1: Medium portrait left, small square top right */}
              <div className="flex items-start gap-4">
                <div className="w-3/5 max-w-48">
                  <div className="aspect-[3/4] overflow-hidden rounded-xl shadow-md relative">
                    <Image 
                      src="/010.jpg" 
                      alt="Bride and groom sharing intimate moment" 
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1 max-w-32">
                  <div className="aspect-square overflow-hidden rounded-lg shadow-md relative">
                    <Image 
                      src="/025.jpg" 
                      alt="Couple's romantic engagement portrait" 
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              
              {/* Row 2: Small square bottom right */}
              <div className="flex justify-end">
                <div className="w-2/5 max-w-32">
                  <div className="aspect-square overflow-hidden rounded-lg shadow-md relative">
                    <Image 
                      src="/040.jpg" 
                      alt="Wedding ceremony exchange of vows" 
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              
              {/* Row 3: Medium landscape center */}
              <div className="flex justify-center">
                <div className="w-4/5 max-w-72">
                  <div className="aspect-[4/3] overflow-hidden rounded-xl shadow-md relative">
                    <Image 
                      src="/055.jpg" 
                      alt="Couple's first dance celebration" 
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              
              {/* Row 4: Two small squares left and center */}
              <div className="flex gap-6 justify-start">
                <div className="w-1/4 max-w-24">
                  <div className="aspect-square overflow-hidden rounded-lg shadow-md relative">
                    <Image 
                      src="/070.jpg" 
                      alt="Wedding reception family gathering" 
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="w-1/4 max-w-24">
                  <div className="aspect-square overflow-hidden rounded-lg shadow-md relative">
                    <Image 
                      src="/075.jpg" 
                      alt="Bride's elegant wedding dress detail" 
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:block">
              <div className="grid grid-cols-3 gap-8">
                
                {/* Left Column - Large Photo */}
                <div className="col-span-1">
                  <div className="aspect-[3/4] overflow-hidden rounded-2xl shadow-xl relative">
                    <Image 
                      src="/010.jpg" 
                      alt="Bride and groom sharing intimate moment" 
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>

                {/* Middle Column - Two Medium Photos */}
                <div className="col-span-1 space-y-8">
                  <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-xl relative">
                    <Image 
                      src="/025.jpg" 
                      alt="Couple's romantic engagement portrait" 
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-xl relative">
                    <Image 
                      src="/040.jpg" 
                      alt="Wedding ceremony exchange of vows" 
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>

                {/* Right Column - Large Photo */}
                <div className="col-span-1">
                  <div className="aspect-[3/4] overflow-hidden rounded-2xl shadow-xl relative">
                    <Image 
                      src="/055.jpg" 
                      alt="Couple's first dance celebration" 
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>

              {/* Bottom Row - Three Small Photos */}
              <div className="grid grid-cols-3 gap-8 mt-8">
                <div className="aspect-square overflow-hidden rounded-2xl shadow-xl relative">
                  <Image 
                    src="/070.jpg" 
                    alt="Wedding reception family gathering" 
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-2xl shadow-xl relative">
                  <Image 
                    src="/075.jpg" 
                    alt="Bride's elegant wedding dress detail" 
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-2xl shadow-xl relative">
                  <Image 
                    src="/080.jpg" 
                    alt="Wedding cake cutting ceremony" 
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Gallery Button */}
          <div className="text-center mt-12">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
              style={{ backgroundColor: '#452912' }}
            >
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              Lihat Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <div className="flex items-center justify-center relative py-16">
        <div className="text-center p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto w-full">
          <div className="mb-6 sm:mb-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4" style={{ color: '#452912' }}>
              Menghitung Hari
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 px-2">
              Waktu yang tersisa hingga hari bahagia kami
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg">
            <AnimatedNumberCountdown
              endDate={new Date("2025-10-17T09:00:00")}
              className="text-center"
            />
          </div>
        </div>
      </div>

      {/* Photo Story Section */}
      <section className="relative py-16 sm:py-20 z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            
            {/* Mobile Layout - Refined and less overwhelming */}
            <div className="block lg:hidden space-y-6 px-4">
              {/* Mobile: Photo 1 - Medium portrait, left aligned */}
              <div className="w-3/5 max-w-xs">
                <div className="aspect-[3/4] overflow-hidden rounded-xl shadow-md relative">
                  <Image 
                    src="/015.jpg" 
                    alt="Bride's beautiful wedding bouquet" 
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Mobile: Photo 2 - Smaller landscape, center aligned */}
              <div className="flex justify-center">
                <div className="w-4/5 max-w-sm">
                  <div className="aspect-[4/3] overflow-hidden rounded-xl shadow-md relative">
                    <Image 
                      src="/030.jpg" 
                      alt="Wedding ceremony at cathedral altar" 
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Mobile: Photo 3 - Small portrait, right aligned */}
              <div className="flex justify-end">
                <div className="w-1/2 max-w-40">
                  <div className="aspect-[3/4] overflow-hidden rounded-lg shadow-md relative">
                    <Image 
                      src="/045.jpg" 
                      alt="Groom's emotional wedding speech" 
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Layout - Same as mobile but larger */}
            <div className="hidden lg:block space-y-8">
              {/* Desktop: Photo 1 - Large top left */}
              <div className="w-3/5 aspect-[3/4] overflow-hidden rounded-xl shadow-lg relative">
                <Image 
                  src="/015.jpg" 
                  alt="Bride's beautiful wedding bouquet" 
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Desktop: Photo 2 - Medium center-right */}
              <div className="flex justify-center">
                <div className="w-4/5 aspect-[16/9] overflow-hidden rounded-xl shadow-lg relative">
                  <Image 
                    src="/030.jpg" 
                    alt="Wedding ceremony at cathedral altar" 
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Desktop: Photo 3 - Portrait bottom right */}
              <div className="flex justify-end">
                <div className="w-2/5 aspect-[3/4] overflow-hidden rounded-xl shadow-lg relative">
                  <Image 
                    src="/045.jpg" 
                    alt="Groom's emotional wedding speech" 
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <Location />

      {/* Gifts Section */}
      <Gifts />

      {/* Wishes Section */}
      <Wishes />
    </div>
  );
}