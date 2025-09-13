"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { PlayCircle, PauseCircle, Music } from "lucide-react";
import { audioConfig } from "@/config/config";

// Global flag to ensure only one audio instance
let globalAudioInstance: HTMLAudioElement | null = null;
let globalAudioInitialized = false;

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [autoplayAttempted, setAutoplayAttempted] = useState(false);
  const wasPlayingRef = useRef(false);

  useEffect(() => {
    // Prevent multiple audio instances globally
    if (globalAudioInitialized && globalAudioInstance) {
      audioRef.current = globalAudioInstance;
      setIsPlaying(!globalAudioInstance.paused);
      return;
    }

    // Ensure no other audio instances are running
    const existingAudio = document.querySelectorAll('audio');
    existingAudio.forEach(audio => {
      const audioElement = audio as HTMLAudioElement;
      audioElement.pause();
      audioElement.currentTime = 0;
    });

    // Create single global audio element
    if (!globalAudioInstance) {
      globalAudioInstance = new Audio(audioConfig.src);
      globalAudioInstance.loop = audioConfig.loop;
      globalAudioInstance.volume = 0.7; // Set volume to 70%
      globalAudioInstance.preload = "auto";
      globalAudioInstance.id = "wedding-main-audio";
      globalAudioInitialized = true;
    }

    audioRef.current = globalAudioInstance;

    // Try to autoplay
    const attemptAutoplay = async () => {
      if (autoplayAttempted) return;
      setAutoplayAttempted(true);

      try {
        // Add a small delay to ensure the audio is loaded
        await new Promise(resolve => setTimeout(resolve, 1000));
        await audioRef.current!.play();
        setIsPlaying(true);
        wasPlayingRef.current = true;
        setShowToast(true);
        setTimeout(() => setShowToast(false), 4000);
      } catch (error) {
        console.log('Autoplay blocked by browser, will try on first user interaction');
        
        // Fallback: try to play on first user interaction
        const playOnFirstInteraction = async () => {
          try {
            if (!wasPlayingRef.current && audioRef.current) {
              await audioRef.current.play();
              setIsPlaying(true);
              wasPlayingRef.current = true;
              setShowToast(true);
              setTimeout(() => setShowToast(false), 4000);
              
              // Remove event listeners after successful play
              document.removeEventListener('click', playOnFirstInteraction, { capture: true });
              document.removeEventListener('touchstart', playOnFirstInteraction, { capture: true });
              document.removeEventListener('keydown', playOnFirstInteraction, { capture: true });
            }
          } catch (fallbackError) {
            console.log('Could not start music automatically');
          }
        };

        // Listen for any user interaction
        document.addEventListener('click', playOnFirstInteraction, { capture: true, once: true });
        document.addEventListener('touchstart', playOnFirstInteraction, { capture: true, once: true });
        document.addEventListener('keydown', playOnFirstInteraction, { capture: true, once: true });
      }
    };

    if (audioConfig.autoplay) {
      attemptAutoplay();
    }

    return () => {
      // Cleanup: stop all audio instances
      const allAudio = document.querySelectorAll('audio');
      allAudio.forEach(audio => {
        const audioElement = audio as HTMLAudioElement;
        audioElement.pause();
        audioElement.currentTime = 0;
      });
      
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        audioRef.current = null;
      }
    };
  }, [autoplayAttempted]);

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    try {
      // Ensure no other audio is playing before toggling
      const otherAudio = document.querySelectorAll('audio:not(#wedding-main-audio)');
      otherAudio.forEach(audio => {
        const audioElement = audio as HTMLAudioElement;
        audioElement.pause();
        audioElement.currentTime = 0;
      });

      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
        wasPlayingRef.current = false;
      } else {
        // Reset audio position if needed
        if (audioRef.current.ended) {
          audioRef.current.currentTime = 0;
        }
        await audioRef.current.play();
        setIsPlaying(true);
        wasPlayingRef.current = true;
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
      }
    } catch (error) {
      console.error('Toggle music failed:', error);
    }
  };

  return (
    <>
      {/* Music Control Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleMusic}
        className="fixed top-4 right-4 z-50 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg border border-rose-100/50"
      >
        {isPlaying ? (
          <div className="relative">
            <PauseCircle className="w-6 h-6 text-rose-500" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          </div>
        ) : (
          <PlayCircle className="w-6 h-6 text-rose-500" />
        )}
      </motion.button>

      {/* Toast Notification */}
      {showToast && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50"
        >
          <div className="bg-black/80 text-white px-4 py-2 rounded-full backdrop-blur-sm flex items-center space-x-2">
            <Music className="w-4 h-4 animate-pulse" />
            <span className="text-sm whitespace-nowrap">
              {audioConfig.title}
            </span>
          </div>
        </motion.div>
      )}
    </>
  );
}