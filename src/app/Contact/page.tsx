import { Header } from "@/sections/Header";
import TelephoneIcon from '@/assets/icons/phone3.png';
import Image from "next/image";

 const Contact = () => {
    return (
        <section>
            <Header />
            <div>
                <div className="container">
                <h1 className="text-gray-900 text-4xl font-bold mt-40">Get in touch with us <br /> and upgrade your <br />net.</h1>
                </div>
                <Image src={TelephoneIcon} alt="PhoneIcon" height={100} width={210} className="flex flex-auto -right-[-530px] md:absolute mt-2" />
            </div>
        </section>
    );
};

export default Contact