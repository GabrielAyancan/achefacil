'use client'
import Logo1 from '@/assets/images/logo1.jpeg';
import Image from 'next/image';
import { Features } from './Features';
import React from 'react';
import { Link } from 'react-router-dom';
import { usePathname } from 'next/navigation';


export const Header = () => {
  const pathname = usePathname();
  console.log(pathname)
  return (
    <header className="sticky backdrop-blur-sm top-0 z-40 bg-white">
      <div className="container ">
      <div className="flex items-center justify-between py-1 ">
       <Image src={Logo1} alt="Logo" height={220} width={180} className="mt-4 p-2 "/> 
        <nav className="hidden md:flex gap-6  text-black/100 items-center text-xl">
              <a href="/" className={` ${pathname === "/" ? "text-[#1127FF] border-b-blue-700 border-b-2" : "text-black"} hover:text-[#1127FF] hover:border-b-blue-700 hover:border-b-2 transition`}>Start</a>
              <a href="/features" className={` ${pathname === "/features" ? "text-[#1127FF] border-b-blue-700 border-b-2" : "text-black"} hover:text-[#1127FF] hover:border-b-blue-700 hover:border-b-2 transition`}>Features</a>
              <a href="/ouroffer" className={` ${pathname === "/ouroffer" ? "text-[#1127FF] border-b-blue-700 border-b-2" : "text-black"} hover:text-[#1127FF] hover:border-b-blue-700 hover:border-b-2 transition`}>Our offer</a>
              <a href="/" className="hover:text-[#1127FF] transition">FAQ</a>
              <a href="/contact" className="hover:text-[#1127FF] transition">Contact</a>
              <button className="text-blue-800 px-6 py-4 font-medium inline-flex align-items justify-center tracking-tight">Buy now</button>
            </nav>
            </div>
            </div>
    </header>
  );
};
