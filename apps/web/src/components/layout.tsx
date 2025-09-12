"use client";

import { useEffect, useRef, useState } from "react";
import { audioConfig } from "@/config/config";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const quoteAudioRef = useRef<HTMLAudioElement | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const wasPlayingRef = useRef(false);

  // First useEffect to handle initial setup and auto-play attempt
  useEffect(() => {
    // Create background music element
    audioRef.current = new Audio(audioConfig.src);
    audioRef.current.loop = audioConfig.loop;

    // Create quote audio element
    quoteAudioRef.current = new Audio('/audio/QUOTE.mp3');
    quoteAudioRef.current.volume = 0.7;

    // Try to autoplay background music
    const attemptAutoplay = async () => {
      try {
        await audioRef.current!.play();
        setIsPlaying(true);
        wasPlayingRef.current = true;
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
      } catch (error) {
        console.log('Autoplay failed, waiting for user interaction');
        // Add click event listener for first interaction
        const handleFirstInteraction = async () => {
          try {
            await audioRef.current!.play();
            setIsPlaying(true);
            wasPlayingRef.current = true;
            setShowToast(true);
            setTimeout(() => setShowToast(false), 3000);
            document.removeEventListener('click', handleFirstInteraction);
          } catch (err) {
            console.error('Playback failed after interaction:', err);
          }
        };
        document.addEventListener('click', handleFirstInteraction);
      }
    };

    // Setup quote audio interval (play every 8 seconds)
    const playQuoteAudio = () => {
      if (quoteAudioRef.current) {
        quoteAudioRef.current.currentTime = 0; // Reset to start
        quoteAudioRef.current.play().catch(console.error);
      }
    };

    // Start quote audio immediately and then every 8 seconds
    playQuoteAudio();
    intervalRef.current = setInterval(playQuoteAudio, 8000);

    if (audioConfig.autoplay) {
      attemptAutoplay();
    }

    return () => {
      // Cleanup audio
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      
      // Cleanup quote audio
      if (quoteAudioRef.current) {
        quoteAudioRef.current.pause();
        quoteAudioRef.current = null;
      }
      
      // Cleanup interval
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, []);

  // Second useEffect to handle visibility and focus changes
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        wasPlayingRef.current = isPlaying;
        if (audioRef.current && isPlaying) {
          audioRef.current.pause();
          setIsPlaying(false);
        }
      } else {
        if (audioRef.current && wasPlayingRef.current) {
          audioRef.current.play().catch(console.error);
          setIsPlaying(true);
        }
      }
    };

    const handleWindowBlur = () => {
      wasPlayingRef.current = isPlaying;
      if (audioRef.current && isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    };

    const handleWindowFocus = () => {
      if (audioRef.current && wasPlayingRef.current) {
        audioRef.current.play().catch(console.error);
        setIsPlaying(true);
      }
    };

    // Audio event listeners
    const handlePlay = () => {
      setIsPlaying(true);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    };

    const handlePause = () => {
      setIsPlaying(false);
      setShowToast(false);
    };

    if (audioRef.current) {
      audioRef.current.addEventListener('play', handlePlay);
      audioRef.current.addEventListener('pause', handlePause);
    }

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('blur', handleWindowBlur);
    window.addEventListener('focus', handleWindowFocus);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('blur', handleWindowBlur);
      window.removeEventListener('focus', handleWindowFocus);

      if (audioRef.current) {
        audioRef.current.removeEventListener('play', handlePlay);
        audioRef.current.removeEventListener('pause', handlePause);
      }
    };
  }, [isPlaying]);

  return (
    <>
      {children}
    </>
  );
}