"use client"
import Link from 'next/link';
import Image from "next/image";
import wave from "../app/images/wave.svg"

export default function Footer() {
  return (
    // <footer className="relative bg-[#FF6B35] text-black pt-0 pb-6 px-4 flex flex-col md:flex-row justify-between items-center mt-auto overflow-hidden">
     
    //   {/* Wave SVG at the top */}
    //   <div className="absolute top-0 left-0 w-full -translate-y-full pointer-events-none">
    //     <Image src={wave} alt="wave" />
    //   </div>
    //   <div className="flex gap-6 mb-2 px-12 py-6 md:mb-0 z-10">
    //     <Link href="https://github.com/Marycynthia23" className="hover:underline">Github</Link>
    //     <Link href="https://www.linkedin.com/in/nneoma-onuoha-14b064197/" className="hover:underline">Linkedin</Link>
       
    //   </div>
    //   <div className="text-xs z-10">
    //     Designed and coded © 2025 - Nneoma Onuoha
    //   </div>
    // </footer>
    <footer className="relative bg-[#FF6B35] py-12 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-[#FF6B35]">
        <svg className="w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
                fill="currentColor" 
                className="text-[#181818]" 
                opacity="1"/>
        </svg>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-white blur-3xl"></div>
      </div>

      <div className="relative z-10 pt-10 px-4 sm:px-6 md:px-10 lg:px-12 mx-auto">
        {/* Main Content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          {/* Brand/Logo Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Nneoma Onuoha</h3>
            <p className="text-white/90 text-sm">Frontend Developer & UI/UX Designer</p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <Link 
              href="https://github.com/Marycynthia23" 
              className="group w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-5 h-5 text-white group-hover:text-[#FF6B35] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </Link>
            
            <Link 
              href="https://www.linkedin.com/in/nneoma-onuoha-14b064197/" 
              className="group w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-5 h-5 text-white group-hover:text-[#FF6B35] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </Link>

            <Link 
              href="mailto:onuohanneoma7@gmail.com" 
              className="group w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300"
            >
              <svg className="w-5 h-5 text-white group-hover:text-[#FF6B35] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 my-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <div className="text-white/90 sm:text-center lg:text-left">
            Designed and coded with Next.js and Tailwind CSS © 2025 byNneoma Onuoha
      </div>
          
          <div className="flex gap-6 text-white/80">
            <Link href="/work" className="hover:text-white transition-colors">Work</Link>
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            {/* <Link href="/contact" className="hover:text-white transition-colors">Contact</Link> */}
      </div>
    </div>
  </div>
    </footer>
  );
} 