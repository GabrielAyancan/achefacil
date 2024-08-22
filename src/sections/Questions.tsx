import Image from "next/image";
import QuestionImage from '@/assets/images/questions.png';

export const Questions = () => {
    return (
        <section className="mt-32">
        <div>
             <Image src={QuestionImage} alt="QuestionIcon" height={150} width={500} className="flex  -right-[-900px] md:absolute mt-44" />  
            <h1 className="uppercase tracking-[.25em] text-center text-purple-400">NewsLetter</h1>
            <p className="text-center text-5xl text-gray-900 mt-8 font-bold">Want to be informed about <br /> our promotions?</p>
        </div>
        </section>
    );
};