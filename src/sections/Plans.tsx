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
    },
];


export const Plans = () => {
    return (
        <div className="">
            <h1 className="uppercase text-center text-purple-800 mt-28 tracking-[.25em]">Our offer</h1>
            <p className="text-gray-900 text-4xl text-center font-bold p-8">Choose the best option</p>


            <div className="flex flex-col gap-16 items-center mt-10 lg:flex-row  lg:justify-center">
                {pricingTiers.map(({ title, mb, popular, inverse, features, teste,  monthlyPrice, buttonText }, key) => (
                    <div key={key} className={twMerge("card", 'bg-white text-gray-900')}>

                        {/* TITULO E MB */}
                        <div className="flex justify-between">
                            <h3 className="text-4xl font-bold text-black/50 text-blue-800">{title}</h3>
                            <div className="inline-flex text-sm py-1.5 ">
                            </div>
                        </div>
                        <span className="text-5xl font-bold tracking-wide leading-none -mt-16">{mb} Mb</span>
                        <div className="flex items-baseline mt-[240px]">
                        </div>


                        <ul className="flex flex-col p-2 -mt-52">
                            {features.map((feature, key) => (
                                <li key={key} className="text-sm flex items-center gap-6">
                                    <span>{feature}</span></li>
                            ))}
                        </ul>
                        
                        <span className="text-4xl font-bold tracking-tighter leading-none gap-8">${monthlyPrice}</span>
                        <span className="text-4xl tracking-tight font-bold text-gray-900">/month</span>
                        <button className="w-full mt-[30px] text-blue-900">{buttonText}</button>
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

        
            <div className=" text-center">
            <button className=" bg-blue-800 mt-60 px-12 py-3 rounded-full">
                <span className="text-[#B5E6FF]">Contact us</span>
            </button>
        </div>
        </div>


    );
};