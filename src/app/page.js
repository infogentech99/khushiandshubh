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

        <div className="relative w-full h-[850px] md:h-[950px] lg:h-[1200px] bg-[url('/assets/hero_bg.webp')] bg-no-repeat bg-center bg-cover flex flex-col justify-start text-center items-center pt-20 md:pt-24 overflow-hidden">
          <img
            src="/assets/sun.png"
            alt=""
            className="absolute top-0 left-0 w-24 md:w-36 object-contain z-10"
          />

          <img
            src="/assets/flower_hero2.png"
            alt=""
            className="absolute md:top-30 top-22 left-0 w-24 md:w-36 object-contain z-10"
          />

          <img
            src="/assets/hero_top_flower.png"
            alt=""
            className="absolute top-0 right-0 w-24 md:w-36 object-contain z-10"
          />

          <img
            src="/assets/ganesha.png"
            alt="Wedding Logo"
            className="md:w-22 w-18 relative z-10 mt-14"
          />

          <p className="relative z-10 text-[#C99333] font-semibold tracking-widest text-[12px] md:text-[14px] mt-5 px-2">
            ||॥ श्री गणेशाय नमः ॥||
            <br />
            मंगलम् भगवान् विष्णु मंगलम् गरुणध्वजः मंगलम् पुण्डरीकाक्षः मंगलाय
            तनोहरि
          </p>
          <img
            src="/assets/underline.png"
            alt="Wedding Logo"
            className="w-36 py-3"
          />

          <p className="relative z-10 text-[#546F2F] tracking-wider text-[14px] md:text-[20px] mt-4 font-cormorant-garamond  font-semibold">
            With the heavenly blessings of
            <br />
            Late Sh. Ashok Kumar Verma & Late Smt. Rani Devi Verma
          </p>

          <h2 className="relative z-10 flex flex-col items-center text-[#C14405] text-5xl md:text-4xl lg:text-[90px] mt-12 font-semibold">
            <span className="font-great-vibes">Khushi</span>

            <p className="text-[#546F2F] tracking-wider text-[15px] md:text-[20px] font-cormorant-garamond  font-semibold mt-2">
              (D/o Mrs. Manju verma & Mr. Pankaj verma)
            </p>

            <span className="font-great-vibes text-3xl md:text-2xl lg:text-[48px] text-[#C14405] md:py-10 py-6">
              With
            </span>

            <span className="font-great-vibes">Shubh</span>

            <p className="text-[#546F2F] tracking-wider text-[15px] md:text-[20px] font-cormorant-garamond  font-semibold mt-2">
              (S/o Mrs. Anuradha Verma & Praveen Verma)
            </p>
          </h2>

          <img
            src="/assets/temple.webp"
            alt=""
            className="absolute bottom-0 left-0 w-[48%] md:w-[40%] object-bottom z-10"
          />

          <img
            src="/assets/hero_flower.png"
            alt=""
            className="absolute bottom-0 right-0 w-[25%] md:w-[15%]  object-bottom z-10 "
          />
        </div>

        <Details />
        <Forever />
        <Events />
        <Families />
      </div>
    </>
  );
}
