import Logo from '@/assets/images/logo.png';
import Image from 'next/image';
import { Features } from './Features';
import React from 'react';
import { Link } from 'react-router-dom';


export const Header = () => {
  return (
    <header className="">
      <div className="container">
      <div className="flex items-center justify-between py-5">
      <Image src={Logo} alt="Logo" height={220} width={180} className="py-3"/>
        <nav className="hidden md:flex gap-6  text-black/100 items-center text-xl">
              <a href="/" className="">Start</a>
              <a href="/features">Features</a>
              <a href="#">Our offer</a>
              <a href="#">FAQ</a>
              <a href="#">Contact</a>
              <button className="text-blue-800 px-6 py-4 font-medium inline-flex align-items justify-center tracking-tight">Buy now</button>
            </nav>
            </div>
            </div>
    </header>
  );
};
