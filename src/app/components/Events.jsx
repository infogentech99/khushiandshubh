"use client";

import { useEffect, useRef, useState } from "react";

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

export default function Events() {
  return (
    <>
      {/* Sagan event */}
      <div className="flex scroll-mt-6 flex-col justify-center items-center bg-[url('/assets/ring_bg.webp')] bg-cover bg-no-repeat">
        <Reveal from="top" className="w-full">
          <img
            src="/assets/ring_top.webp"
            alt="Wedding Logo"
            className="w-full"
          />
        </Reveal>

        <div className="flex flex-col items-center rounded-2xl lg:py-12 lg:px-20 px-6 md:mt-0 md:my-6 mb-6">
          
          <h2 className="text-[#8c1034] font-cormorant-upright font-semibold text-[34px] md:text-5xl lg:text-[70px]">
           Engagement
          </h2>
          <p className="text-[#5e3d22] font-cormorant-garamond text-[15px] md:text-base lg:text-[25px]">
            1 December 2026 · Tuesday
          </p>
          <p className="text-[#5e3d22] font-cormorant-garamond text-[15px] md:text-base lg:text-[25px]">
           7:00 PM
          </p>
          <p className="text-[#5e3d22] font-cormorant-garamond text-[14px] md:text-base lg:text-[25px] text-center">
            Club RedX by Kawatra’s <br />
            
            opp. SDM OFFICE, Shivaji Place, Vishal Enclave,<br/> Rajouri Garden, New Delhi, Delhi, 110027
          </p>

          <div className="flex flex-col items-center justify-center">
            <a
              href="https://maps.app.goo.gl/VC2PCMy7vEr6f19q6"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 w-36 rounded-full border border-[#8c1034] bg-[#e8e9eb] px-2 py-1.5 lg:px-16 lg:py-2.5 md:px-16 md:py-2.5 text-[12px] md:text-[17px] text-center font-cormorant-garamond  tracking-widest text-[#8c1034] transition-all duration-300 hover:bg-[#8c1034] hover:text-white md:w-auto md:text-4xl lg:text-[20px]"
            >
              Get Direction
            </a>
          </div>
        </div>

        <Reveal from="bottom">
          <img
            src="/assets/ring_bottom.webp"
            alt="Wedding Logo"
            className="w-full"
          />
        </Reveal>
      </div>


{/* haldi event */}
      <div className="flex scroll-mt-6 flex-col justify-center items-center bg-[url('/assets/haldi_bg.webp')] bg-cover bg-no-repeat">
        <Reveal from="top" className="w-full">
          <img
            src="/assets/haldi_top-v1.webp"
            alt="Wedding Logo"
            className="w-full"
          />
        </Reveal>

        <div className="flex flex-col items-center rounded-2xl lg:py-12 lg:px-20 px-6 py-6 md:mt-20 my-16">
         
          <h2 className="text-[#8c1034] font-cormorant-upright font-semibold  text-[44px] md:text-5xl lg:text-[70px]">
            Haldi
          </h2>
          <p className="text-[#5e3d22] font-cormorant-garamond text-[15px] md:text-base lg:text-[25px]">
            2 December 2026 · Wednesday
          </p>
          <p className="text-[#5e3d22] font-cormorant-garamond text-[15px] md:text-base text-center lg:text-[25px]">
            11:00 AM 
          </p>
          <p className="text-[#5e3d22] font-cormorant-garamond text-[14px] md:text-base text-center lg:text-[25px]">
           Victoria Grand Banquet Hall <br />
            Block A, MBR Enclave, Dwarka
          </p>

          <div className="flex flex-col items-center justify-center">
            <a
              href="https://maps.app.goo.gl/b8aAibBMmkEL5yfN7"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 w-36 rounded-full border border-[#8c1034] bg-[#f0f0f0] px-2 py-1.5 lg:px-16 lg:py-2.5 md:px-16 md:py-2.5 text-[12px] md:text-[17px] text-center font-cormorant-garamond  tracking-widest text-[#8c1034] transition-all duration-300 hover:bg-[#8c1034] hover:text-white md:w-auto md:text-4xl lg:text-[20px]"
            >
              Get Direction
            </a>
          </div>
        </div>

        <Reveal from="bottom" className="w-3/6">
          <img
            src="/assets/haldi_centre-a1.webp"
            alt="Wedding Logo"
            className="w-full"
          />
        </Reveal>

        <Reveal from="bottom" className="w-full -mt-30 md:-mt-65 lg:-mt-125 3xl:-mt-150">
          <img
            src="/assets/haldi_bottom-v1.webp"
            alt="Wedding Logo"
            className="w-full"
          />
        </Reveal>
      </div>


      {/* Cocktail event */}
      <div className="flex scroll-mt-6 flex-col justify-center items-center bg-[url('/assets/cocktail_bg.webp')] bg-cover bg-no-repeat">
        <div className="flex flex-col items-center rounded-2xl lg:py-12 lg:px-20 px-6 md:mt-20 mt-16">
        
          <h2 className="text-[#8c1034] font-cormorant-upright font-semibold  text-[40px] md:text-5xl lg:text-[70px]">
            Mehndi & cocktail
          </h2>
          <p className="text-[#5e3d22] font-cormorant-garamond text-[15px] md:text-base lg:text-[25px]">
            3 December 2026 · Thursday
          </p>
          <p className="text-[#5e3d22] font-cormorant-garamond text-[15px] md:text-base lg:text-[25px]">
            7:00 PM
          </p>
          <p className="text-[#5e3d22] font-cormorant-garamond text-[14px] md:text-base text-center lg:text-[25px]">
            Veda Farms and Banquets <br />
            54, Main Rd, Kapas Hera Extension, <br/> Kapas Hera, New Delhi, Delhi, 110061
          </p>

          <div className="flex flex-col items-center justify-center">
            <a
              href="https://maps.app.goo.gl/X5PA9ojK2g9pRNMU7"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 w-36 rounded-full border border-[#8c1034] bg-[#f0f0f0] px-2 py-1.5 lg:px-16 lg:py-2.5 md:px-16 md:py-2.5 text-[12px] md:text-[17px] text-center font-cormorant-garamond  tracking-widest text-[#8c1034] transition-all duration-300 hover:bg-[#8c1034] hover:text-white md:w-auto md:text-4xl lg:text-[20px]"
            >
              Get Direction
            </a>
          </div>
        </div>

      <Reveal from="bottom" className="w-full md:relative md:left-1/2 md:-translate-x-1/2 md:w-screen">
  <img
    src="/assets/cocktail_bottom.webp"
    alt="Wedding Logo"
    className="block w-full h-auto"
  />
</Reveal>
      </div>

      



 {/* Baarat event */}
      <div className="flex scroll-mt-6 flex-col justify-center items-center bg-[url('/assets/baarat.webp')] bg-cover bg-no-repeat">
        

        <div className="flex flex-col items-center rounded-2xl lg:py-12 lg:px-20 px-6 md:mt-20 mb-10 mt-16">
          
          <h2 className="text-white font-cormorant-upright font-semibold  text-[40px] md:text-5xl lg:text-[70px] text-center">
            Wedding
          </h2>
          <p className="text-[#fff] font-cormorant-garamond text-[15px] md:text-base lg:text-[25px]">
            5 December 2026 · Saturday
          </p>
          <p className="text-[#fff] font-cormorant-garamond text-[15px] md:text-base lg:text-[25px] text-center">
           Reception of baraat - 8pm <br/>
           Dinner - 9pm  <br/>
Doli - Taaro ki Chaaon mein
          </p>
          <p className="text-[#fff] font-cormorant-garamond text-[14px] md:text-base text-center lg:text-[25px]">
            The Medallion by Kawatra’s<br />
            Golden Paris Kawatra Tent, Shivaji Enclave, <br/> Raja Garden, Delhi, 110027
          </p>

          <div className="flex flex-col items-center justify-center">
            <a
              href="https://maps.app.goo.gl/F4SAdgH65tPGREAKA"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 w-36 rounded-full border border-[#8c1034] bg-[#f0f0f0] px-2 py-1.5 lg:px-16 lg:py-2.5 md:px-16 md:py-2.5 text-[12px] md:text-[17px] text-center font-cormorant-garamond  tracking-widest text-[#8c1034] transition-all duration-300 hover:bg-[#8c1034] hover:text-white md:w-auto md:text-4xl lg:text-[20px]"
            >
              Get Direction
            </a>
          </div>
        </div>

        <Reveal from="bottom" className="w-full md:relative md:left-1/2 md:-translate-x-1/2 md:w-screen">
          <img
            src="/assets/baarat_bottom.webp"
            alt="Wedding Logo"
            className="block w-full h-auto"
          />
        </Reveal>
      </div>



      
    </>
  );
}
