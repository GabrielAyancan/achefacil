import { Header } from "@/sections/Header";
import { Plans } from "./Plans";
import BgImage from '@/assets/images/bg-4.jpg';
import Image from "next/image";

export const Features = () => {
    return (
        <section>
            <div className="container">
            <Image src={BgImage} alt="Background" height={1000} width={1000} className="md:absolute md:block" />
            </div>
            <Plans />
        </section>
  );
};