"use client"
import Link from 'next/link';
import Image from "next/image";
import wave from "../app/images/wave.svg"

export default function Footer() {
  return (
    <footer className="relative bg-orange-400 text-black pt-0 pb-6 px-4 flex flex-col md:flex-row justify-between items-center mt-auto overflow-hidden">
      {/* Wave SVG at the top */}
      <div className="absolute top-0 left-0 w-full -translate-y-full pointer-events-none">
        {/* <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[60px]"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z"
            fill="#fb923c" // Tailwind's orange-400
          />
        </svg> */}
        {/* <Image src={wave} alt="wave" /> */}
      </div>
      <div className="flex gap-6 mb-2 px-12 py-6 md:mb-0 z-10">
        <a href="#" className="hover:underline">Github</a>
        <a href="#" className="hover:underline">Linkedin</a>
        {/* <a href="#" className="hover:underline">Instagram</a>
        <a href="#" className="hover:underline">Medium</a> */}
      </div>
      <div className="text-xs z-10">
        Designed and coded © 2022 - Nneoma Onuoha
      </div>
    </footer>
  );
} 