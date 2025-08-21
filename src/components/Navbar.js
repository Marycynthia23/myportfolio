"use client"
import Link from 'next/link';
import Image from "next/image";
import logo from "/public/Bold-logo.png";
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-30 bg-[#181818] text-white flex items-center justify-between px-8 py-1 border-b border-[#222]">
      <Link href="/" className="text-3xl font-bold text-[#FD853A]">
        <Image src={logo} alt="Nneoma's Portfolio" width={100} height={100} />
      </Link>
      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 text-sm">
        <li><Link href="/" className="hover:text-[#FD853A]">Home</Link></li>
        <li><Link href="/work" className="hover:text-[#FD853A]">Work</Link></li>
        <li><Link href="/about" className="hover:text-[#FD853A]">About</Link></li>
        <li><Link href="/contact" className="hover:text-[#FD853A]">Contact</Link></li>
      </ul>
      <Link href="/resume" className="hidden md:inline border border-[#FD853A] text-[#FD853A] px-4 py-1 rounded hover:bg-[#FD853A] hover:text-black transition">Resume</Link>
      {/* Hamburger Icon */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none z-20"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-0.5 bg-[#FD853A] mb-1 transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-[#FD853A] mb-1 transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-[#FD853A] transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#181818] flex flex-col items-center gap-6 py-6 md:hidden shadow-lg z-10 animate-fade-in">
          <Link href="/" className="hover:text-[#FD853A] text-lg" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/work" className="hover:text-[#FD853A] text-lg" onClick={() => setMenuOpen(false)}>Work</Link>
          <Link href="/about" className="hover:text-[#FD853A] text-lg" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/contact" className="hover:text-[#FD853A] text-lg" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link href="/resume" className="border border-[#FD853A] text-[#FD853A] px-4 py-1 rounded hover:bg-[#FD853A] hover:text-black transition text-lg" onClick={() => setMenuOpen(false)}>Resume</Link>
        </div>
      )}
    </nav>
  );
} 