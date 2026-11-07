"use client";
import Link from "next/link";
import { SquarePen } from "lucide-react";
export default function Families() {
  return (
    <>
      <section className="w-full overflow-x-clip bg-[url('/assets/hero_bg.webp')] bg-cover bg-no-repeat py-20 pt-10 md:pt-60 lg:pt-120 px-12 lg:h-350">
        <h2 className="mt-4 text-center text-[40px] leading-tight text-[#8c1034] font-cormorant-upright font-semibold  md:text-4xl lg:text-[60px]">
          RSVP
        </h2>
        <p className="text-center text-[16px] tracking-widest text-[#C99333] font-cormorant-garamond md:text-2xl">
          Verma Family and A special tail Wagging From Chaw Chaw
        </p>
        <div className="flex flex-col justify-center items-center mt-8">
          <a
            href="https://www.instagram.com/theinvitearc/"
            target="_blank"
            rel="noopener noreferrer"
            className=" flex items-center gap-3 font-serif text-[16px] text-[#546F2F]"
          >
            <img
              src="/assets/instagram.png"
              alt="Instagram"
              className="object-contain h-4 w-5"
            />

            <span>Follow us on Instagram</span>
          </a>
        </div>
      </section>
    </>
  );
}
