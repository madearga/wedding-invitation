"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { PlayCircle, PauseCircle, Music } from "lucide-react";
import { audioConfig } from "@/config/config";

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const wasPlayingRef = useRef(false);

  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio(audioConfig.src);
    audioRef.current.loop = audioConfig.loop;

    // Try to autoplay
    const attemptAutoplay = async () => {
      try {
        await audioRef.current!.play();
        setIsPlaying(true);
        wasPlayingRef.current = true;
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
      } catch (error) {
        console.log('Autoplay failed, user needs to interact with audio button');
        // Don't add global click listener - let user control audio via the button
      }
    };

    if (audioConfig.autoplay) {
      attemptAutoplay();
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
        wasPlayingRef.current = false;
      } else {
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