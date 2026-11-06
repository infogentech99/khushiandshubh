"use client";
import { useState } from "react";
import ScratchText from "./ScratchText";
import MarriageCountdown from "../components/MarriageCountdown";


export default function Details() {
  const [revealed, setRevealed] = useState(false);

  return (
    <>
      <div className="mx-auto w-full text-center md:py-30 pt-15 md:pt-40 lg:pt-80 pb-20 bg-[url('/assets/hero_bg2.webp')] bg-no-repeat bg-cover">
        <h2 className="relative z-10 flex flex-col items-center text-[#C9850B] text-4xl md:text-4xl lg:text-[70px] mt-12">
          <span className="font-cormorant-upright font-bold">The Blessed Beginning</span>

          <p className="text-[#546F2F] tracking-wider text-[15px] md:text-[20px] font-cormorant-garamond font-semibold mt-5 px-4">
            Every passing moment brings us closer to a beautiful beginning
            filled with love, laughter, and forever.
          </p>
          <img
            src="/assets/underline.png"
            alt="Wedding Logo"
            className="w-36 md:py-13 py-8"
          />

          <p className="text-[#546F2F] tracking-wider text-[12px] md:text-[20px] font-cormorant-garamond  font-semibold uppercase">
            A Golden Secret Awaits Scratch to Reveal
          </p>
        </h2>
        <ScratchText onReveal={() => setRevealed(true)} />

        {revealed && (
          <div className="countdown-fade-in">
            <MarriageCountdown />
          </div>
        )}
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
    </>
  );
}
