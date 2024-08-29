import { Header } from "@/sections/Header";
import TelephoneIcon from '@/assets/icons/phone3.png';
import Image from "next/image";
import { Testimonials } from "@/sections/Testimonials";
import { Footer } from "@/sections/Footer";


const Contact = () => {
    return (
        <section>
            <Header />
            <div>
                <div className="container">
                    <h1 className="text-gray-900 text-4xl font-bold mt-40">Get in touch with us <br /> and upgrade your <br />net.</h1>
                </div>
                <Image src={TelephoneIcon} alt="PhoneIcon" height={100} width={210} className="flex flex-auto -right-[-530px] md:absolute mt-2" />
                <div className="mt-[300px]">
                    <h1 className="text-gray-900 text-center text-3xl font-bold">Before you start asking questions see our FAQ</h1>
                    <div className="px-[550px]">
                        <h2 className="text-gray-900 text-2xl font-bold mt-32">Opening hours</h2>
                        <p className="text-gray-500 text-xl mt-12">Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua. Ut <br /> enim ad minim veniam, quis nostrud exercitation <br /> ullamco laboris nisi ut aliquip ex ea commodo <br />consequat. Duis aute irure</p>
                        <div className="mt-12">
                            <h3 className="">Monday - Friday</h3>
                            <p className="mt-4 text-[#1127FF] text-3xl">08:00-20:00</p>
                        </div>
                        <div className="px-[280px] -mt-[75px]">
                            <h1 className="">Saturday</h1>
                            <p className="mt-4 text-[#1127FF] text-3xl">10:00 - 16:00</p>
                        </div>
                    </div>
                </div>
                
            </div>
            <Testimonials />

            <Footer />

        </section>
    );
};

export default Contact