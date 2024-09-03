import { Header } from "@/sections/Header";
import TelephoneIcon from '@/assets/icons/phone3.png';
import Image from "next/image";
import { Testimonials } from "@/sections/Testimonials";
import { Footer } from "@/sections/Footer";
import { Contact } from "@/sections/Contact2";



const Contact2 = () => {
    return (
        <section>
            <Header />
            <div>
                <div className="container">
                    <h1 className="text-gray-900 text-5xl font-bold mt-40">Get in touch with us <br /> and upgrade your <br />net.</h1>
                </div>
                <Image src={TelephoneIcon} alt="PhoneIcon" height={100} width={210} className="flex flex-auto -right-[-530px] md:absolute mt-2" />
                <div className="mt-[300px]">
                    <h1 className="text-gray-900 text-center text-3xl font-bold">Before you start asking questions see our FAQ</h1>
                    <div className="px-[450px]">
                        <h2 className="text-gray-900 text-2xl font-bold mt-32">Opening hours</h2>
                        <p className="text-gray-500 text-xl mt-12">Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua. Ut <br /> enim ad minim veniam, quis nostrud exercitation <br /> ullamco laboris nisi ut aliquip ex ea commodo <br />consequat. Duis aute irure</p>
                        <div className="mt-12">
                            <h3 className="">Monday - Friday</h3>
                            <h1 className="text-[#1127FF]">__________________</h1>
                            <p className="mt-4 text-[#1127FF] text-3xl">08:00-20:00</p>
                        </div>
                        <div className="px-[280px] -mt-[100px]">
                            <h1 className="">Saturday</h1>
                            <h2 className="text-[#1127FF]">___________</h2>
                            <p className="mt-4 text-[#1127FF] text-3xl">10:00 - 16:00</p>
                            <div className="absolute container bg-[#D5D4FA] -mt-[400px] p-[300px] w-[100px] rounded-3xl -right-[-250px]">
                                <h1 className="absolute text-4xl text-gray-900 font-bold -mt-[250px] -right-[-50px] px-20">Lorem ipsum dolor sit consectetur adipisicing </h1>
                                <input type="email" className="p-2 rounded-full px-16 py-2 placeholder:text-[#9CA3AF]" placeholder="Enter your Email here"></input>
                                <input type="your-name" className="p-2 rounded-full px-1 py-2 placeholder:text-[#9CA3AF] mt-2" placeholder="Your name"></input>
                                <input type="phone" className="p-2 rounded-full px-12 py-2 placeholder:text-[#9CA3AF]" placeholder="Phone"></input>
                                <input type="subject" className="p-2 rounded-full px-12 py-2 placeholder:text-[#9CA3AF] mt-2" placeholder="Subject"></input>
                                <input type="message" className="p-2 rounded-full px-12 py-2 placeholder:text-[#9CA3AF] mt-2" placeholder="Message"></input>
                                <div className="mt-4">
                                    <input type="checkbox" name="Acceptance" className="px-2 w-4 "></input>
                                    <h1 className="text-gray-900">Agree to Terms and Conditions.</h1>
                                    <button className="bg-[#1127FF] text-[#B5E6FF]  rounded-full px-36">Send a message</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <Testimonials />
            <Contact />
            <Footer />

        </section>
    );
};

export default Contact2