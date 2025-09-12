"use client";

import ScrollExpandMedia from '@/components/ui/scroll-expansion-hero';
import StickyScrollGallery from '@/components/ui/sticky-scroll';
import Location from '@/components/ui/location';
import AnimatedNumberCountdown from '@/components/ui/countdown-number';
import Wishes from '@/components/ui/wishes';
import Gifts from '@/components/ui/gifts';
import { Canvas } from '@react-three/fiber';
import { ShaderPlane } from '@/components/ui/background-paper-shaders';

export default function MainContent() {
  return (
    <div className="min-h-screen relative">
      {/* Home Section */}
      <div id="home"></div>

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
      
      {/* Couple Section */}
      <div id="couple"></div>

      <ScrollExpandMedia
        mediaType="video"
        mediaSrc="https://rvmyspork8.ufs.sh/f/2HgZCCFydUxwjrOczM5uO6qjlMnepHs2rXoJPgubf9tCyZSh"
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
            <img
              src='https://rvmyspork8.ufs.sh/f/2HgZCCFydUxw2VAaIdFydUxw8Gfas7jErZH9ePpQJkC30LvB'
              alt='Andrea Maria Agniwijaya'
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
            <img
              src='https://rvmyspork8.ufs.sh/f/2HgZCCFydUxwQ5VFIHN1hPlkexZ9IT2J3Bnbmd0DRazWMsAK'
              alt='I Made Arga Swarsa'
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
          <div id="details"></div>

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

      {/* Countdown Section */}
      <div className="min-h-screen flex items-center justify-center relative">
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

      {/* Gallery Section */}
      <div id="gallery"></div>

      <StickyScrollGallery />

      {/* Location Section */}
      <Location />

      {/* Gifts Section */}
      <Gifts />

      {/* Wishes Section */}
      <Wishes />
    </div>
  );
}