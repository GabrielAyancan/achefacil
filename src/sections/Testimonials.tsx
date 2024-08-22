import Image from "next/image";
import AliciaImage from '@/assets/images/alicia.png';

export const Testimonials = () => {
    return (
        <section className="container">
        <div className="mt-80 py-52">
            <h1 className="uppercase text-purple-700 tracking-[.25em] mt-24 px-20">Testimonials</h1>
            <p className="text-3xl text-gray-900 font-bold mt-24">Fusce ut velit laoreet, tempus arcu <br />eu, molestie tortor. Nam vel justo <br /> cursus, faucibus lorem eget, <br /> egestas eros. At vero eos et <br /> accusam et justo duo dolores et ea <br /> rebum. Stet clita kasd gubergren, <br /> no sea takimata sanctus est Lorem <br /> ipsum dolor sit amet.</p>
            <h2 className="text-purple-700 mt-10">- Alicia McKanzey</h2>
            <Image src={AliciaImage} alt="Alicia Image" height={100} width={500} className="flex flex-auto -right-[-400px] md:absolute -mt-[450px]" />
        </div>
        </section>
    );
};