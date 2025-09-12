import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { VolumeX, Volume2, Calendar, MapPin } from 'lucide-react';
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
  const [isMuted, setIsMuted] = useState(false);
  const [isAudioMuted, setIsAudioMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Create and setup audio with better configuration
    const setupAudio = () => {
      if (audioRef.current) return;
      
      audioRef.current = new Audio('/audio/QUOTE.mp3');
      audioRef.current.loop = true;
      audioRef.current.volume = 0.7;
      audioRef.current.preload = 'auto';
      
      // Add event listeners for debugging
      audioRef.current.addEventListener('loadstart', () => console.log('Audio loading started'));
      audioRef.current.addEventListener('canplay', () => console.log('Audio ready to play'));
      audioRef.current.addEventListener('error', (e) => console.error('Audio error:', e));
    };
    
    setupAudio();
    
    // Auto play video and audio when component mounts
    const playMedia = async () => {
      try {
        // Try to play video first
        if (videoRef.current) {
          await videoRef.current.play();
          console.log('Video autoplay successful');
        }
        
        // Try to play audio quote
        if (audioRef.current && !isAudioMuted) {
          await audioRef.current.play();
          console.log('Audio autoplay successful');
        }
      } catch (error) {
        console.log('Autoplay failed, waiting for user interaction:', error);
        
        // Add multiple event listeners for better user interaction detection
        const handleFirstInteraction = async () => {
          try {
            if (videoRef.current && videoRef.current.paused) {
              await videoRef.current.play();
            }
            if (audioRef.current && audioRef.current.paused && !isAudioMuted) {
              await audioRef.current.play();
              console.log('Audio started after user interaction');
            }
            // Remove all interaction listeners
            document.removeEventListener('click', handleFirstInteraction);
            document.removeEventListener('touchstart', handleFirstInteraction);
            document.removeEventListener('keydown', handleFirstInteraction);
          } catch (err) {
            console.error('Playback failed after interaction:', err);
          }
        };
        
        document.addEventListener('click', handleFirstInteraction, { once: true });
        document.addEventListener('touchstart', handleFirstInteraction, { once: true });
        document.addEventListener('keydown', handleFirstInteraction, { once: true });
      }
    };
    
    // Add small delay to ensure audio is properly loaded
    const timeoutId = setTimeout(playMedia, 200);
    
    return () => {
      clearTimeout(timeoutId);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [isAudioMuted]);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleAudioMute = () => {
    if (audioRef.current) {
      if (isAudioMuted) {
        audioRef.current.play().catch(console.error);
      } else {
        audioRef.current.pause();
      }
      setIsAudioMuted(!isAudioMuted);
    }
  };

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen w-full relative overflow-hidden"
    >
      {/* Fullscreen Background Video */}
      <div className="absolute inset-0 z-0">
        <img 
          src={backgroundImage} 
          alt="Wedding background" 
          className="w-full h-full object-cover"
        />
        <video 
          ref={videoRef} 
          src={videoUrl} 
          className="w-full h-full object-cover absolute inset-0"
          autoPlay
          loop
          muted={isMuted}
          playsInline
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Audio Controls */}
      <div className="absolute top-6 right-6 z-30 flex flex-col gap-3">
        {/* Video Mute/Unmute Control */}
        <button
          onClick={toggleMute}
          className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center hover:bg-white/30 transition-all duration-200 shadow-lg"
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? (
            <VolumeX className="h-5 w-5 text-white" />
          ) : (
            <Volume2 className="h-5 w-5 text-white" />
          )}
        </button>
        
        {/* Audio Quote Mute/Unmute Control */}
        <button
          onClick={toggleAudioMute}
          className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center hover:bg-white/30 transition-all duration-200 shadow-lg"
          aria-label={isAudioMuted ? "Play quote audio" : "Stop quote audio"}
        >
          {isAudioMuted ? (
            <VolumeX className="h-5 w-5 text-rose-300" />
          ) : (
            <Volume2 className="h-5 w-5 text-rose-300" />
          )}
        </button>
      </div>

      {/* Centered Content Overlay */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="text-center px-6 max-w-2xl mx-auto">
          {/* Header with hearts */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="mb-8"
          >
            <div className="flex items-center justify-center mb-4">
              <span className="text-white text-sm font-medium tracking-wider font-playfair-display">WEDDING INVITATION</span>
            </div>
          </motion.div>

          {/* Couple names */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-8"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold tracking-tight font-great-vibes mb-4 drop-shadow-2xl">
              {heroTitle}
            </h1>
            <div className="w-24 h-0.5 bg-rose-300 mx-auto mb-4"></div>
            <p className="text-white/90 text-xl italic drop-shadow-lg font-dancing-script font-medium">
              {heroSubtitle}
            </p>
          </motion.div>

          {/* Wedding details */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mb-10 space-y-4"
          >
            <div className="flex items-center justify-center text-white/90">
              <Calendar className="w-5 h-5 mr-3" />
              <span className="text-lg font-medium font-playfair-display">{weddingDate}</span>
            </div>
            <div className="flex items-center justify-center text-white/90">
              <MapPin className="w-5 h-5 mr-3" />
              <span className="text-lg font-medium font-playfair-display">{weddingVenue}</span>
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
              width="280px"
              height="60px"
              className="font-semibold text-xl shadow-2xl font-playfair-display"
            >
              Buka Undangan
            </GradientButton>
          </motion.div>

          {/* Footer message */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-white/80 text-lg mt-8 leading-relaxed drop-shadow-lg font-playfair-display italic"
          >
            {heroDescription}
          </motion.p>
        </div>
      </div>
    </motion.main>
  );
};

export { WeddingHero };