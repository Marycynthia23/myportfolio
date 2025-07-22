import Link from 'next/link';
import Image from "next/image";
import logo from "/public/Bold-logo.png";

export default function Navbar() {
  return (
    <nav className="bg-[#181818] text-white flex items-center justify-between px-8 py-1 border-b border-[#222]">
        <Link href="/" className="text-3xl font-bold text-orange-400">
        <Image src={logo} alt="Nneoma's Portfolio" width={100} height={100} />
        </Link>
        <ul className="flex gap-8 text-sm">
            <li><Link href="/" className="hover:text-orange-400">Home</Link></li>
            <li><Link href="/work" className="hover:text-orange-400">Work</Link></li>
            <li><Link href="/about" className="hover:text-orange-400">About</Link></li>
            <li><Link href="/contact" className="hover:text-orange-400">Contact</Link></li>
        </ul>
        <a href="#" className="border border-orange-400 text-orange-400 px-4 py-1 rounded hover:bg-orange-400 hover:text-black transition">Resume</a>
    </nav>
  );
} 