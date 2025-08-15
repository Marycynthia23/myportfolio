"use client"
import Link from 'next/link';
import Image from "next/image";
import wave from "../app/images/wave.svg"

export default function Footer() {
  return (
    <footer className="relative bg-orange-400 text-black pt-0 pb-6 px-4 flex flex-col md:flex-row justify-between items-center mt-auto overflow-hidden">
      {/* Wave SVG at the top */}
      <div className="absolute top-0 left-0 w-full -translate-y-full pointer-events-none">
        <Image src={wave} alt="wave" />
      </div>
      <div className="flex gap-6 mb-2 px-12 py-6 md:mb-0 z-10">
        <Link href="https://github.com/Marycynthia23" className="hover:underline">Github</Link>
        <Link href="https://www.linkedin.com/in/nneoma-onuoha-14b064197/" className="hover:underline">Linkedin</Link>
       
      </div>
      <div className="text-xs z-10">
        Designed and coded © 2025 - Nneoma Onuoha
      </div>
    </footer>
  );
} 