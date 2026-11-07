"use client";

import { useEffect, useState, useRef } from "react";

import Details from "./components/Details";
import Forever from "./components/Forever";
import Events from "./components/Events";
import Families from "./components/Families";
import RoseHeroTemp from "./components/RoseHeroTemp";
import IntroVideo from "./components/IntroVideo";
export default function Home() {
  const audioRef = useRef(null);
  const [started, setStarted] = useState(false);
  const [playing, setPlaying] = useState(false);

  const startMusic = async () => {
    const audio = audioRef.current;
    if (!audio || started) return;

    try {
      audio.volume = 0.3;
      await audio.play();
      setStarted(true);
      setPlaying(true);
    } catch {}
  };

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      try {
        await audio.play();
        setPlaying(true);
      } catch {}
    }
  };

  // First user interaction (mobile + desktop)
  useEffect(() => {
    const handler = () => startMusic();

    window.addEventListener("click", handler);
    window.addEventListener("touchstart", handler);

    return () => {
      window.removeEventListener("click", handler);
      window.removeEventListener("touchstart", handler);
    };
  }, [started]);

  return (
    <>
      <button
        onClick={() => {
          started ? toggleMusic() : startMusic();
        }}
        className="fixed bottom-4 right-4 z-50 bg-[#C9850B] text-white px-3 py-2 rounded-xl text-xl"
      >
        {playing ? "⏸" : "▶"}
      </button>

      <audio
        ref={audioRef}
        src="/assets/khushi.mp3"
        loop
        preload="auto"
        playsInline
      />
      <IntroVideo />
      <div className="relative w-full overflow-hidden">
        <div className="pointer-events-none fixed inset-0 z-20 h-screen w-screen">
          <RoseHeroTemp />
        </div>

        <video
          src="/assets/hero2_video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="block w-full h-[650px] md:h-auto lg:h-auto object-cover"
        />

        <div className="absolute inset-x-0 top-10 md:top-20 lg:top-80 flex flex-col items-center text-center px-2">
          <h2 className="relative z-10 flex flex-col items-center text-[#C9850B] text-[44px] md:text-6xl lg:text-[90px] font-bold">
            <span className="font-great-vibes">Khushi</span>

            <span className="font-great-vibes text-2xl md:text-2xl lg:text-[48px] text-[#C9850B] md:py-8">
              &
            </span>

            <span className="font-great-vibes">Shubh</span>
          </h2>
        </div>

        

        <Details />
        <Forever />
        <Events />
        <Families />
      </div>
    </>
  );
}
