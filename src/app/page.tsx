import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { Pricing } from "@/sections/Pricing";
import { Plans } from "@/sections/Plans";
import { Package } from "@/sections/Package";
import { Testimonials } from '@/sections/Testimonials';
import { Questions } from "@/sections/Questions";

import { Footer } from "@/sections/Footer";
import { useRouter } from 'next/router';




export default function Home() {
  return (
    <div >
      <Header />
      <Hero />
      <Pricing />
      <Plans />
      <Package />
      <Testimonials />
      <Questions />
      <Footer />
    </div>
  );
}

