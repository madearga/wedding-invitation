import React from 'react';
import { motion } from 'framer-motion';
import GradientButton from './button-1';

interface WeddingHeroProps {
  onOpenInvitation: () => void;
  brandName?: string;
  heroTitle?: string;
  heroSubtitle?: string;
  heroDescription?: string;
  backgroundImage?: string;
  videoUrl?: string;
  weddingDate?: string;
  weddingVenue?: string;
  coupleNames?: string;
}

const WeddingHero: React.FC<WeddingHeroProps> = ({
  onOpenInvitation,
  brandName = "Wedding",
  heroTitle = "Arga & Agni",
  heroSubtitle = "We're getting married!",
  heroDescription = "Kehadiran Anda adalah kebahagiaan terbesar bagi kami",
  backgroundImage = "https://rvmyspork8.ufs.sh/f/2HgZCCFydUxwS35RaQ9KszXGCKoardWxuyJFchTp9RtekPAB",
  videoUrl = "https://rvmyspork8.ufs.sh/f/2HgZCCFydUxwjrOczM5uO6qjlMnepHs2rXoJPgubf9tCyZSh",
  weddingDate = "17 Oktober 2025",
  weddingVenue = "Katedral Surabaya",
  coupleNames = "Arga & Agni"
}) => {


  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen w-full relative overflow-hidden"
    >
      {/* Fullscreen Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://rvmyspork8.ufs.sh/f/2HgZCCFydUxwauRtHgqSdPBO1EfKCT6VmWQzwUZkHnx3gsM9" 
          alt="Wedding background" 
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>


      {/* Centered Content Overlay */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="text-center px-6 max-w-2xl mx-auto">

          {/* Couple names */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-8"
          >
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold tracking-tight font-crimson-pro mb-4 drop-shadow-2xl text-center leading-tight">
              <div>Arga</div>
              <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl my-2">&</div>
              <div>Agni</div>
            </div>
          </motion.div>


          {/* Open invitation button */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.98 }}
          >
            <GradientButton
              onClick={onOpenInvitation}
              width="150px"
              height="35px"
              className="font-semibold text-sm shadow-2xl font-playfair-display"
            >
              Buka Undangan
            </GradientButton>
          </motion.div>

        </div>
      </div>
    </motion.main>
  );
};

export { WeddingHero };