import Image from "next/image";
import QuestionImage from '@/assets/images/questions.png';

export const Questions = () => {
    return (
        <section className="flex flex-col mt-32 justify-center items-center">
            <div className="flex flex-col justify-center items-center">
                <h1 className="uppercase tracking-[.25em] text-center text-purple-400">NewsLetter</h1>
                <p className="text-center text-5xl text-gray-900 mt-8 font-bold">Want to be informed about <br /> our promotions?</p>
            </div>
            <div className="flex mt-32  bg-[#D5D4FA] h-[450px] w-[1080px] rounded-[30px] ">

                <Image src={QuestionImage} alt="QuestionIcon" height={150} width={500} className="flex md:absolute -mt-28 ml-12" />
                <div className="flex container mt-24 justify-end ">
                    <div className="flex flex-col ">
                        <span className=" ">
                            <input type="text" name="your-name" className="p-2 rounded-full w-[370px]" aria-required="true" aria-invalid="false" placeholder="Your name"></input>
                        </span>
                        <span className="">
                            <input type="email" className="p-2 rounded-full w-[370px] mt-2 placeholder:text-[#9CA3AF]   " placeholder="Enter your Email here"></input>
                        </span>
                        <span className="mt-4">
                            <input type="checkbox" name="Acceptance" className="px-2 w-4" /> <span>Agree to <b className="text-blue-800">Terms and Conditions.</b></span>
                        </span>

                        <span className="">
                            <button className="bg-[#1127FF] rounded-full w-[370px] py-3 mt-10  text-[#B5E6FF]">Sign in now</button>
                        </span>
                    </div>
                </div>
                {/* 
                */}

            </div>




            {/* 
            <div>
               

            </div> */}
        </section>
    );
};