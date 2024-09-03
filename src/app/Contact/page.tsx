import { Header } from "@/sections/Header";
import TelephoneIcon from '@/assets/icons/phone3.png';
import Image from "next/image";
import { Testimonials } from "@/sections/Testimonials";
import { Footer } from "@/sections/Footer";


export default function Contact() {
    //const Contact = () => {
    return (
        <section>
            <Header />
            <div className="flex flex-col items-center justify-center ">
                <div>
                    <h1 className="text-gray-900 text-5xl font-bold mt-40">Get in touch with us <br /> and upgrade your <br />net.</h1>
                    <Image src={TelephoneIcon} alt="PhoneIcon" height={100} width={210} className="flex flex-auto  mt-2" />
                </div>

                <div className="flex">
                    <h1 className="text-gray-900 text-center text-3xl font-bold">Before you start asking questions see our FAQ</h1>
                </div>
                <div className="flex flex-row items-center justify-center">
                    <div className="">
                        <h2 className="text-gray-900 text-2xl font-bold mt-32">Opening hours</h2>
                        <p className="text-gray-500 text-xl mt-12">Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua. Ut <br /> enim ad minim veniam, quis nostrud exercitation <br /> ullamco laboris nisi ut aliquip ex ea commodo <br />consequat. Duis aute irure</p>
                        <div className="mt-12">
                            <h3 className="">Monday - Friday</h3>
                            <span className="text-[#1127FF]">__________________</span>
                            <p className="mt-4 text-[#1127FF] text-3xl">08:00-20:00</p>
                        </div>
                        <div className="px-[280px] -mt-[100px]">
                            <h1 className="">Saturday</h1>
                            <span className="text-[#1127FF]">___________</span>
                            <p className="mt-4 text-[#1127FF] text-3xl">10:00 - 16:00</p>
                        </div>
                    </div>
                    <div className="flex flex-col  bg-[#D5D4FA] w-[540px] mt-32 rounded-3xl  items-center justify-center">
                        <h1 className="text-4xl text-gray-900 font-bold p-10 pl-14 justify-center items-center">Lorem ipsum dolor sit consectetur adipisicing</h1>
                        <input type="email" className="p-2 rounded-full w-[370px] placeholder:text-[#9CA3AF]" placeholder="Enter your Email here"></input>
                        <div>
                            <input type="your-name" className="p-2 rounded-full w-[185px]  placeholder:text-[#9CA3AF] mt-2" placeholder="Your name"></input>
                            <input type="phone" className="p-2 rounded-full w-[185px]  placeholder:text-[#9CA3AF] mt-2 ml-2" placeholder="Phone"></input>
                        </div>
                        <input type="subject" className="p-2 rounded-full w-[370px]  placeholder:text-[#9CA3AF] mt-2" placeholder="Subject"></input>
                        <textarea rows={5} className="p-2 rounded-lg w-[370px]  placeholder:text-[#9CA3AF] mt-2" placeholder="Message"></textarea>
                        <span className="mt-2"><input type="checkbox" name="Acceptance" className="px-2 w-4 "></input>Agree to Terms and Conditions.</span>
                        <button className="bg-[#1127FF] text-[#B5E6FF]  rounded-full px-36 mb-10 h-10 mt-2">Send a message</button>
                        
                    </div>
                </div>

            </div>
            <Testimonials />
            <Footer />

        </section>
    );
};

//export default Contact2