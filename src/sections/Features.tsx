import { Header } from "@/sections/Header";
import { Plans } from "./Plans";
import BgImage from '@/assets/images/bg-3.jpg';
import Image from "next/image";
import FaqImage from '@/assets/images/faq.png';
import ClickImage from '@/assets/images/click.png';
import WorldImage from '@/assets/images/world.png';
import AutenticacaoIcon from '@/assets/icons/autenticacao.png';
import NuvemIcon from '@/assets/icons/nuvem.png';
import PhoneIcon from '@/assets/icons/telephone.png';
import DigitalIcon from '@/assets/icons/digital.png';
import { Contact } from "./Contact2";
import { Footer } from "./Footer";


export const Features = () => {
    return (
            <div>
            <div className="container p-2 items-center">
                <Image src={BgImage} alt="Background" height={1000} width={1000} className="md:absolute md:block " />
            </div>
            <div className="flex-auto p-[400px]">
            <Plans />
            </div>
            <div className="-mt-[550px]">
            <Image src={FaqImage} alt="Faq Image" height={500} width={505} className="-right-[-950px] md:absolute md:block mt-64" />
            <div className="md:absolute -right-[-450px] mt-[330px]">
                <h1 className="text-gray-900 font-bold text-4xl">Mauris rhoncus orci in <br />imperdiet placerat</h1>
                <p className="text-gray-900 mt-6">Sed ultrices nisl velit, eu ornare est ullamcorper a. Nunc quis nibh <br /> magna. Proin risus erat, fringilla vel purus sit amet, mattis porta <br /> enim. Duis fermentum faucibus est, sed vehicula velit sodales <br />vitae. Mauris mollis lobortis turpis, eget accumsan ante aliquam <br /> quis. Nam ullamcorper rhoncus sem vitae tempus. Curabitur ut <br />tortor a orci fermentum ultricies. Mauris maximus velit commodo, <br /> varius ligula vel, consequat est.</p>
            </div>
            </div>
            <div className="container mt-[1000px]">
            <Image src={ClickImage} alt="Click Image" height={500} width={505} className="-right-[-400px] md:absolute md:block mt-[-150px]" />
            <h1 className="text-gray-900 text-4xl font-bold">At vero eos et <br /> accusam et justo duo dolores</h1>
            <p className="text-gray-900">Stet clita kasd gubergren, no sea takimata sanctus est Lorem <br /> ipsum dolor sit amet. Duis autem vel eum iriure dolor in hendrerit <br /> in vulputate velit esse molestie consequat, vel illum dolore eu <br />feugiat nulla facilisis at vero eros et accumsan et iusto odio <br /> dignissim qui blandit praesent luptatum zzril delenit augue duis <br />dolore te feugait nulla facilisi.</p>
            </div>

            <div className="md:absolute -right-[-10px] ">
            <Image src={WorldImage} alt="World Image" height={500} width={505} className="-right-[-960px] md:absolute md:block mt-64" />
            <h1 className="text-gray-900 font-bold text-4xl mt-[370px] px-[340px]">Eostrud exerci tation ullamcorper</h1>
            <p className="text-gray-900 p-6 px-[345px]">Nam liber tempor cum soluta nobis eleifend option congue nihil <br /> imperdiet doming id quod mazim placerat facer possim assum. <br /> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam <br /> nonumy eirmod tempor invidunt ut labore et dolore magna <br /> aliquyam erat, sed diam voluptua. Stet clita kasd gubergren.</p>
            </div>

            <div className="-mt-[-900px]">
                <h1 className="text-center text-gray-900 font-bold text-3xl">Explore our services</h1>
                <p className="text-center text-gray-900 mt-8">Vivamus in diam turpis. In condimentum maximus tristique. Maecenas non laoreet odio. Fusce lobortis porttitor purus, vel vestibulum <br />libero pharetra vel. Pellentesque lorem augue, fermentum nec nibh et, fringilla sollicitudin orci.</p>
            </div>
            <Image src={AutenticacaoIcon} alt="Autenticacao Icon" height={100} width={120} className="-right-[-1330px] md:absolute md:block mt-28" />
            <Image src={NuvemIcon} alt="Nuvem Icon" height={100} width={120} className="-right-[-1050px] md:absolute md:block mt-28" />
            <Image src={PhoneIcon} alt="Phone Icon" height={100} width={120} className="-right-[-770px] md:absolute md:block mt-28" />
            <Image src={DigitalIcon} alt="Digital Icon" height={100} width={120} className="-right-[-490px] md:absolute md:block mt-28" />
            

            <div className="-right-[-1290px] md:absolute mt-60 ">
                <h1 className="text-gray-900 text-2xl px-2">Duis autem iriure</h1>
            </div>
            <div className="-right-[-990px] md:absolute mt-60 ">
                <h1 className="text-gray-900 text-2xl  px-2">Ullamcorper suscipit</h1>
            </div>
            <div className="-right-[-710px] md:absolute mt-60 ">
                <h1 className="text-gray-900 text-2xl ">Nonummy euismod</h1>
            </div>
            <div className="-right-[-450px] md:absolute mt-60">
                <h1 className="text-gray-900 text-2xl ">Aaliquam volutpat</h1>
            </div>
            <div className="-mt-20">
            <Contact/>
            </div>
            <Footer />
            </div>
            
        
    );
};