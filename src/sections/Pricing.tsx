'use client'
import BackgroundImage from '@/assets/images/bg-2.png';
import Image from 'next/image';
import { Component, useEffect, useState } from 'react';

 
   

export const Pricing = () => {


    return (
        <div className="mt-64 bg-[#5349D8] py-[530px]" >
            <div className="container">
                <Image src={BackgroundImage} alt="Background Image" height={550} width={800} className="flex flex-auto -right-[-1000px]  md:absolute top-[1080px]" />
                <button className="relative uppercase text-white font-semibold rounded-full bg-white/20 py-2 px-16 -right-[670px] top-[-300px] tracking-[.25em]">
                    <span>key features</span>
                </button>
            </div>
            <div className="-left-[-1100px] md:absolute -mt-64">
                <h1 className="text-white text-4xl font-bold">With our packets u get <br /> connected to all media.</h1>
                <p className="text-white mt-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do <br />eiusmod tempor incididunt ut labore et dolore magna aliqua. <br /> Ut enim ad minim veniam, quis nostrud exercitation ullamco <br /> laboris nisi ut aliquip ex ea commodo.</p>
                <h1 className="text-white/30 text-3xl py-6">___________________________________</h1>
                <h2 className="text-[#B5E6FF] p-10 text-5xl font-bold px-2">250 Mb</h2>
                
                <p className="text-white -mt-4 text-xl">Nulla mauris dolor, gravida <br />a varius blandit.</p>
                <div className="-left-[-270px] md:absolute -mt-[170px]">
                    <h3 className=" text-[#B5E6FF] py-11 text-5xl font-bold">500 Mb</h3>
                    <p className="text-white -mt-6 text-xl">Phasellus scele risque sapien amet.</p>
                </div>
            </div>
        </div>
    );
}; 