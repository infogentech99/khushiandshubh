"use client";
import { useState } from "react";
import { useRef, useEffect } from "react";
import ScratchText from "./ScratchText";
import MarriageCountdown from "../components/MarriageCountdown";

function Reveal({ from = "bottom", className = "", children }) {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const hidden = from === "top" ? "-translate-y-full" : "translate-y-full";

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <div
        className={`transition-all duration-1000 ease-out motion-reduce:transition-none ${
          show ? "translate-y-0 opacity-100" : `${hidden} opacity-0`
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export default function Details({ from = "bottom", className = "", children }) {
  const [revealed, setRevealed] = useState(false);

  return (
    <>
      <div className="mx-auto w-full text-center bg-[url('/assets/detail_bg.webp')] bg-no-repeat bg-cover flex flex-col justify-center items-center">
        <Reveal from="top" className="w-full">
          <img
            src="/assets/hero_top.webp"
            alt="Wedding Logo"
            className="w-full"
          />
        </Reveal>

        <img
          src="/assets/ganesha.png"
          alt="Wedding Logo"
          className="md:w-22 w-18 z-10 -mt-30"
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
            (S/o Mrs. Anuradha Verma & Mr. Praveen Verma)
          </p>
        </h2>

        <h2 className="relative z-10 flex flex-col items-center text-[#C9850B] text-4xl md:text-4xl lg:text-[70px] mt-12">
          <span className="font-cormorant-upright font-bold">
            The Blessed Beginning
          </span>

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
<Reveal from="bottom"><img
          src="/assets/hero_bottom.webp"
          alt="Wedding Logo"
          className="w-full"
        /></Reveal>
        
      </div>
    </>
  );
}
