import Image from "next/image";
import FacebookIcon from '@/assets/icons/facebook.png';
import TwitterIcon from '@/assets/icons/twitter.png';
import LinkedinIcon from '@/assets/icons/linkedin.png';


export const Contact = () => {
    return (
        <section className="container -mt-[-200px]">
            <div className="absolute mt-12">
                <h1>Gabriel</h1>
                <h2>Level 999</h2>
                <h3>Rua Remo Tagliassachi</h3>
                <h4>Jardim das Flores</h4>
            </div>
        <div className="">
            <h1 className="text-gray-900 text-center text-2xl font-bold">Contact with us</h1>
            <p className="text-center text-blue-600 text-3xl font-bold mt-6">+55 11 97287-6871</p>
            <p className="text-center text-blue-600 text-3xl font-bold mt-6">gf130109@gmail.com</p>
            <Image src={FacebookIcon} alt="FacebookIcon" height={100} width={60} className="flex flex-auto -right-[-600px] md:absolute -mt-24" />
            <Image src={TwitterIcon} alt="TwitterIcon" height={100} width={60} className="flex flex-auto -right-[-530px] md:absolute -mt-24" />
            <Image src={LinkedinIcon} alt="LinkedinIcon" height={100} width={60} className="flex flex-auto -right-[-460px] md:absolute -mt-24" />
        </div>
        </section>
    );
};