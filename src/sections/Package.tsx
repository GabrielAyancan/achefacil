import Image from "next/image";
import FaqImage from '@/assets/images/faq.png';
import NuvemIcon from '@/assets/icons/nuvem.png';
import VerificadoIcon from '@/assets/icons/verificado.png';
import TelephoneIcon from '@/assets/icons/telephone.png';
import DigitalIcon from '@/assets/icons/digital.png';

export const Package = () => {
    return (
        <section className="container">
            <div className="mt-44">
                <h1 className="text-4xl font-bold text-gray-900">Get Answer for questions about our offer</h1>
                <p className="text-gray-900 mt-12">Vivamus in diam turpis. In condimentum maximus tristique. Maecenas non laoreet odio. Fusce <br />lobortis porttitor purus, vel vestibulum libero pharetra vel. Pellentesque lorem augue, fermentum <br /> nec nibh et, fringilla sollicitudin orci.</p>
                <Image src={FaqImage} alt="Faq Image" height={500} width={505} className="-right-[-950px] md:absolute md:block mt-12" /> 
                <Image src={NuvemIcon} alt="Nuvem Icon" height={100} width={100} className="-right-[-700px] md:absolute md:block mt-28" />  
                <Image src={VerificadoIcon} alt="Verificado Icon" height={100} width={100} className="-right-[-450px] md:absolute md:block mt-28" /> 
                <Image src={TelephoneIcon} alt="Telephone Icon" height={100} width={100} className="-right-[-700px] md:absolute md:block mt-[300px]" />
                <Image src={DigitalIcon} alt="Digital Icon" height={100} width={100} className="-right-[-450px] md:absolute md:block mt-[300px]" />
            </div>
            <div className="-right-[-680px] md:absolute mt-56 ">
                <h1 className="text-gray-900 text-2xl font-semibold px-2">Consetetur</h1>
            </div>
            <div className="-right-[-420px] md:absolute mt-56 ">
                <h1 className="text-gray-900 text-2xl font-semibold px-2">Fusce ut velit</h1>
            </div>
            <div className="-right-[-660px] md:absolute mt-[410px] ">
                <h1 className="text-gray-900 text-2xl font-semibold ">Curabitur dolor</h1>
            </div>
            <div className="-right-[-420px] md:absolute mt-[410px] ">
                <h1 className="text-gray-900 text-2xl font-semibold ">Congue ligula</h1>
            </div>
        </section>
    )
}