"use client"
import Link from 'next/link';
import Image from "next/image";
import logo from "/public/Bold-logo.png";
import { useState } from 'react';
import AvailabilityBadge from './AvailabilityBadge';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSummoning, setIsSummoning] = useState(false);
  return (
    <nav className="sticky top-0 z-30 flex items-center justify-between border-b border-[#222] bg-[#181818] px-4 text-white sm:px-6 lg:px-8">
      <Link href="/" aria-label="Nneoma's Portfolio home" className="flex h-14 items-center sm:h-16">
        <Image
          src={logo}
          alt="Nneoma's Portfolio"
          priority
          sizes="(max-width: 767px) 160px, 200px"
          className="h-auto w-[160px] sm:w-[200px]"
        />
      </Link>
      {/* Desktop Menu */}
      <div className="hidden items-center gap-4 md:flex">
        <ul className="flex gap-6 text-sm">
          {/*<li><Link href="/" className="hover:text-[#FF6B35]">Home</Link></li>*/}
          <li><Link href="/work" className="hover:text-[#FF6B35]">Work</Link></li>
          <li><Link href="/about" className="hover:text-[#FF6B35]">About</Link></li>
          {/* <li><Link href="/contact" className="hover:text-[#FF6B35]">Contact</Link></li> */}
        </ul>
        <AvailabilityBadge
          isSummoning={isSummoning}
          onToggle={() => setIsSummoning((current) => !current)}
        />
      </div>
      {/* Hamburger Icon */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none z-20"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`block w-8 h-1 rounded-full bg-[#FF6B35] mb-1 transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`block w-8 h-1 rounded-full bg-[#FF6B35] mb-1 transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-8 h-1 rounded-full bg-[#FF6B35] transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#181818] flex flex-col items-center gap-6 py-6 md:hidden shadow-lg z-10 animate-fade-in">
          {/*<Link href="/" className="hover:text-[#FF6B35] text-lg" onClick={() => setMenuOpen(false)}>Home</Link>*/}
          <Link href="/work" className="hover:text-[#FF6B35] text-lg" onClick={() => setMenuOpen(false)}>Work</Link>
          <Link href="/about" className="hover:text-[#FF6B35] text-lg" onClick={() => setMenuOpen(false)}>About</Link>
          {/* <Link href="/contact" className="hover:text-[#FF6B35] text-lg" onClick={() => setMenuOpen(false)}>Contact</Link> */}
          <AvailabilityBadge
            isSummoning={isSummoning}
            onToggle={() => setIsSummoning((current) => !current)}
          />
        </div>
      )}
    </nav>
  );
} 