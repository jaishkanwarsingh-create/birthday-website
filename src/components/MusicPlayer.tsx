import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Music4, Star } from 'lucide-react';
import { mediaConfig } from '../data/birthdayConfig';

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [audioReady, setAudioReady] = useState(false);

  useEffect(() => {
    const savedMute = localStorage.getItem('birthday-music-muted');
    if (savedMute !== null) {
      setIsMuted(savedMute === 'true');
    }

    const audio = new Audio(mediaConfig.musicPath);
    audio.loop = true;
    audio.volume = mediaConfig.defaultVolume;
    audio.preload = 'auto';

    const onCanPlay = () => setAudioReady(true);
    const onError = () => setAudioReady(false);

    audio.addEventListener('canplaythrough', onCanPlay);
    audio.addEventListener('error', onError);
    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.removeEventListener('canplaythrough', onCanPlay);
      audio.removeEventListener('error', onError);
    };
  }, []);

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.muted = isMuted;
    localStorage.setItem('birthday-music-muted', String(isMuted));
  }, [isMuted]);

  const toggleMusic = async () => {
    if (!audioRef.current || !audioReady) return;
    if (audioRef.current.paused) {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  if (!audioReady) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-40 flex items-center gap-2 rounded-full border border-white/40 bg-white/60 p-2 shadow-[0_20px_40px_rgba(73,39,48,0.18)] backdrop-blur-sm">
      <button type="button" onClick={toggleMusic} className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f5d9d5] text-[#4d2f34]" aria-label={isPlaying ? 'Pause music' : 'Play music'}>
        {isPlaying ? <Star size={18} /> : <Music4 size={18} />}
      </button>
      <button type="button" onClick={() => setIsMuted((prev) => !prev)} className="text-xs font-medium text-[#4d2f34]" aria-label="Toggle mute">
        {isMuted ? 'Muted' : 'Sound on'}
      </button>
    </div>
  );
}

export function ProgressBar({ routes }: { routes: { path: string; label: string }[] }) {
  const currentPath = window.location.pathname;
  const currentIndex = routes.findIndex((route) => route.path === currentPath);
  const progress = currentIndex >= 0 ? ((currentIndex + 1) / routes.length) * 100 : 0;

  return (
    <div className="sticky top-0 z-30 border-b border-white/20 bg-[#fffaf5]/80 backdrop-blur-md">
      <div className="mx-auto max-w-5xl px-4 py-3 sm:px-6">
        <div className="mb-2 flex items-center justify-between text-[10px] uppercase tracking-[0.26em] text-[#765a62]">
          <span>Birthday journey</span>
          <span>{currentIndex >= 0 ? `${currentIndex + 1}/${routes.length}` : '0/7'}</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-[#f4e3df]">
          <motion.div className="h-full rounded-full bg-gradient-to-r from-[#ff9db3] via-[#f3cfb1] to-[#e8dff9]" animate={{ width: `${progress}%` }} />
        </div>
      </div>
    </div>
  );
}
