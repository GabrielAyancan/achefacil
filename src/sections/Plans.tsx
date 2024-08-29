import Image from "next/image";
import { twMerge } from "tailwind-merge";
import Phone2Icon from '@/assets/icons/phone2.png';
import TvIcon from '@/assets/icons/tv.png';
import InternetIcon from '@/assets/icons/internet.png';

const pricingTiers = [
    {
        title: "Fiber Start",
        mb: 100,
        monthlyPrice: 10,
        buttonText: "Read more",
        popular: false,
        inverse: false,
        features: [
            "Ut ultricies imperdiet sodales.",
            "Aliquam fringilla aliquam ex transcend.",
            
        ],
        teste: [
            "Quantum diolor pertor"
        ]
    },
    {
        title: "Fiber Pro",
        mb: 250,
        monthlyPrice: 18,
        buttonText: "Read more",
        popular: false,
        inverse: false,
        features: [
            "Vivamus in diam turpis. In condimentum maximus porttitor purus, tristique.",
            "Fusce lobortis porttitor",
        ],
        teste: [
            "Fusce lobortis porttitor"
        ],
    },
    {
        title: "Fiber Max",
        mb: 250,
        monthlyPrice: 25,
        buttonText: "Read more",
        popular: false,
        inverse: false,
        features: [
            "Nunc id tellus finibus, eleifend mi vel, maximus tortor, pellentesque justo.",
            "Fusce lobortis porttitor",
        ],
        teste: [
            "Fusce lobortis porttitor"
        ],
    },
];


export const Plans = () => {
    return (
        <div className="">
            <h1 className="uppercase text-center text-purple-800 mt-28 tracking-[.25em]">Our offer</h1>
            <p className="text-gray-900 text-4xl text-center font-bold p-8">Choose the best option</p>


            <div className="flex flex-col gap-16 items-center mt-10 lg:flex-row  lg:justify-center">
                {pricingTiers.map(({ title, mb, popular, inverse, features, teste,  monthlyPrice, buttonText }, key) => (
                    <div key={key} className={twMerge("card card1", 'bg-white text-gray-900')}>


                        {/* TITULO E MB */}
                        <div className="flex justify-between">
                            <h3 className="text-4xl font-bold text-black/50 text-blue-800">{title}</h3>
                            <div className="inline-flex text-sm py-1.5 ">
                            </div>
                        </div>
                        <div className="mt-6">
                        <span className="text-5xl font-bold tracking-wide mt-12 py-9">{mb} Mb</span>
                        <div className="flex items-baseline mt-[240px]">
                            </div>
                        </div>


                        <ul className="flex flex-col p-2 -mt-52">
                            {features.map((feature, key) => (
                                <li key={key} className="text-base flex items-center gap-6 text-blue-700">
                                    <span>{feature}</span></li>
                            ))}
                        </ul>

                        <ul className="">
                            {teste.map((teste, key) => (
                                <li key={key} className="text-base flex items-center mt-2 p-2">
                                    <span>{teste}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-8">
                        <span className="text-4xl font-bold tracking-tighter py-2">${monthlyPrice}</span>
                        <span className="text-4xl tracking-tight font-bold text-gray-900">/month</span>
                        </div>
                        <button className="w-full mt-[50px] text-[#1127FF]">{buttonText}</button>
                    </div>
                ))}
            </div>

            
            <div className="mt-28">
                <h1 className="text-4xl font-bold text-center">For every bundle u can choose</h1>
                    <span>
                        <Image src={InternetIcon} alt="InternetIcon" height={100} width={100} className="flex flex-auto -left-[-550px] md:absolute mt-[70px]" />
                    </span>
                    <span>
                        <Image src={TvIcon} alt="TvIcon" height={100} width={100} className="flex flex-auto -left-[-900px] md:absolute mt-16" />
                    </span>                
                    <span >
                        
                        <Image src={Phone2Icon} alt="PhoneIcon" height={100} width={100} className="flex flex-auto -right-[-550px] md:absolute mt-16" />
                    </span>
            </div>  
                <div>
                        <div className="container">
                        <h1 className="text-gray-900 text-2xl px-[130px] mt-36">Internet</h1>
                        </div>
                        
                        <h2 className="text-gray-900 text-2xl -mt-8 px-[930px]">TV</h2>

                        <h3 className="text-gray-900 text-2xl -mt-8 px-[1280px]">Phone</h3>
                </div>
        
            <div className="text-center">
            <button className=" bg-blue-800 mt-20 px-12 py-3 rounded-full">
                <span className="text-[#B5E6FF]">Contact us</span>
            </button>
        </div>
        </div>


    );
};