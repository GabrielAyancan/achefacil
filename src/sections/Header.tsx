import Logo1 from '@/assets/images/logo1.jpeg';
import Image from 'next/image';
import { Features } from './Features';
import React from 'react';
import { Link } from 'react-router-dom';


export const Header = () => {
  return (
    <header className="">
      <div className="container">
      <div className="flex items-center justify-between py-5">
       <Image src={Logo1} alt="Logo" height={220} width={180} className="mt-4"/> 
        <nav className="hidden md:flex gap-6  text-black/100 items-center text-xl">
              <a href="/" className="">Start</a>
              <a href="/features">Features</a>
              <a href="/ouroffer">Our offer</a>
              <a href="/">FAQ</a>
              <a href="/contact">Contact</a>
              <button className="text-blue-800 px-6 py-4 font-medium inline-flex align-items justify-center tracking-tight">Buy now</button>
            </nav>
            </div>
            </div>
    </header>
  );
};
