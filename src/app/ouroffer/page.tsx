import { Header } from "@/sections/Header";
import Background from '@/assets/images/bg-3.png';
import Image from "next/image";

 const Ouroffer = () => {
    return (
        <section>
            <Header />
            <div className="-mt-4 bg-[#5349D8] py-[435px]">
                </div>
            <div>
            <Image src={Background} alt="Background" height={100} width={635} className="md:absolute md:block mt-[-400px] right-[300px]" />
            </div>
            
            
        </section>
    );
};

export default Ouroffer