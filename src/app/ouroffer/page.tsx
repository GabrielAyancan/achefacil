import { Header } from "@/sections/Header";
import Background from '@/assets/images/bg-3.png';
import Image from "next/image";
import { Pricing } from "@/sections/Pricing";
import JobImage from '@/assets/images/aaaa-1.jpg';
import { Questions } from "@/sections/Questions";
import { Footer } from "@/sections/Footer";

const Ouroffer = () => {
    return (
        <section>
            <Header />
            <div className="-mt-4 bg-[#5349D8] py-[435px]">
            </div>
            <div>
                <Image src={Background} alt="Background" height={100} width={635} className="md:absolute md:block mt-[-830px] right-[300px]" />
            </div>
            <div className="-mt-[650px] px-40">
                <h1 className="text-4xl text-white font-bold">Lorem ipsum dolor sit amet, <br /> consectetur adipisicing elit, sed do <br />eiusmod tempor incididunt ut labore <br /> et dolore magna aliqua. Ut enim ad <br />minim veniam, quis nostrud <br /> exercitation ullamco laboris nisi ut <br />aliquip.</h1>
                <p className="text-white mt-12">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud <br />exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
            </div>
            <div className="-mt-2">
                <Pricing />
            </div>

            <div className="">
                <h1 className="text-gray-900 text-3xl font-semibold px-[400px] mt-16">Mauris rhoncus orci in imperdiet <br /> placerat. Vestibulum euismod nisl <br /> suscipit ligula volutpat.</h1>
                <p className="mt-16 px-[400px] text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut <br />enim ad minim veniam, quis nostrud exercitation ullamco <br />laboris nisi ut aliquip ex ea commodo</p>
                <p className="mt-4 px-[400px] text-xl">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut <br />odit aut fugit, sed quia consequuntur magni dolores eos qui <br /> ratione voluptatem sequi nesciunt. Neque porro quisquam est, <br /> qui dolorem ipsum quia dolor sit amet, consectetur, adipisci <br />velit, sed quia non numquam eius modi tempora incidunt ut <br /> labore et dolore magnam aliquam quaerat voluptatem.</p>
                {/* <p className="px-[1000px] -mt-[295px] text-xl">Ut enim ad minim veniam, quis nostrud exercitation ullamco <br /> laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure <br /> dolor in reprehenderit in voluptate velit esse cillum dolore eu <br />fugiat nulla pariatur. Excepteur sint occaecat cupidatat non <br /> proident, sunt in culpa qui officia deserunt mollit anim id est <br /> laborum. Sed ut perspiciatis unde omnis iste natus error sit <br /> voluptatem accusantium doloremque laudantium, totam rem <br />aperiam, eaque ipsa quae ab illo inventore veritatis et quasi <br />architecto beatae vitae dicta sunt explicabo.</p> */}
            </div>
            <div className="mt-40">
                <h1 className="text-gray-900 text-5xl font-bold text-center">Downloads with 500Mb/s</h1>
                <p className="text-gray-900 mt-12 text-4xl font-bold px-[500px]">Video 4K</p>
                <h1 className="text-[#5D53E6] px-[850px] text-xl -mt-10">Allend Proud (2,5GB)</h1>
                {/* <div className="bg-blue-900 px-12" style={{height: 20}}>
                    <span className="progress" ></span>
                </div> */}
                <p className="text-gray-400 text-xs px-[1400px]">90%</p>
                <p className="text-gray-900 mt-32 text-4xl font-bold px-[500px]">16 bit FLAC</p>
                <h1 className="text-[#5D53E6] px-[850px] text-xl -mt-10">Landero Mie - Allen (10,5MB)</h1>
                <p className="text-gray-400 text-xs px-[1400px]">60%</p>
            </div>

            <div>
                <Image src={JobImage} alt="Job" width={2000} className="" />
            </div>

            <Questions />
            <Footer />

        </section>
    );
};

export default Ouroffer