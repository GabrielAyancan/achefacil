import Image from "next/image";
import QuestionImage from '@/assets/images/questions.png';

export const Questions = () => {
    return (
        <section className="mt-32">
            <div>
                <Image src={QuestionImage} alt="QuestionIcon" height={150} width={500} className="flex  -right-[-900px] md:absolute mt-44" />
                <h1 className="uppercase tracking-[.25em] text-center text-purple-400">NewsLetter</h1>
                <p className="text-center text-5xl text-gray-900 mt-8 font-bold">Want to be informed about <br /> our promotions?</p>
                <div className="bg-[#D5D4FA] mt-32 p-[230px]">
                    <div className="container">
                        <span className="flex px-[650px] -mt-28">
                            <input type="text" name="your-name" className="p-2 rounded-full px-24" aria-required="true" aria-invalid="false" placeholder="Your name"></input>
                        </span>
                        <span className="flex px-[650px]">
                            <input type="email" className="p-2 rounded-full px-24 mt-2 placeholder:text-[#9CA3AF]   " placeholder="Enter your Email here"></input>
                        </span>
                        <div className="flex absolute -right-[-550px] mt-4">


                            <input type="checkbox" name="Acceptance" className="px-2 w-4 "></input>
                            
                            <h1 className="text-gray-900">Agree to Terms and Conditions.</h1>
                        </div>
                        <div className="px-[650px] mt-4">
                            <span className="">
                                <button className="bg-[#1127FF] rounded-full px-36 py-3 mt-10 absolute text-[#B5E6FF]">Sign in now</button>
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};