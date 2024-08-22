import Image from "next/image";
import Background from '@/assets/images/bg-1.png';
import PhoneIcon from '@/assets/icons/phone.png';
import YoutubeIcon from '@/assets/icons/youtube.png';
import TempoIcon from '@/assets/icons/tempo.png';
import DigitalIcon from '@/assets/icons/digital.png';
import SlideIcon from '@/assets/icons/slide.png';

export const Hero = () => {
  return (
    <section>
      <div className="container">
        <div className="h-full overflow-x-clip">
        <Image src={Background} alt="Background" height={1000} width={985} className="-right-[-130px] md:absolute md:block" />
        <Image src={PhoneIcon} alt="PhoneIcon" height={100} width={130} className="flex flex-auto -right-[-830px] md:absolute mt-40" />
        <Image src={YoutubeIcon} alt="YoutubeIcon" height={100} width={100} className="flex flex-auto -right-[-350px] md:absolute mt-64" />
        <Image src={TempoIcon} alt="TempoIcon" height={100} width={100} className="flex flex-auto -right-[-150px] md:absolute mt-14" />
        <Image src={DigitalIcon} alt="DigitalIcon" height={100} width={100} className="flex flex-auto -right-[-100px] md:absolute mt-[430px]" /> 
        <Image src={SlideIcon} alt="SlideIcon" height={15} width={10} className="flex flex-auto -right-[-950px]  md:absolute mt-[550px]" /> 
        <Image src={SlideIcon} alt="SlideIcon2" height={15} width={10} className="flex flex-auto -right-[-150px] rotate-[90deg] md:absolute mt-52" />
        <h1 className="py-40 text-6xl font-bold mt-6 text-gray-900">Blazing fast &<br />safe connection</h1>
        <p className="mt-[-90px]">At vero eos accusam et justo duo dolores et ea rebum. Stet<br />clita kasd gurbergren, no sea takimata</p>
        <button className="py-6 text-[#1127FF] mt-20 px-14 bg-gray-200 text-xl rounded-full">Read more</button>
        <button className="mt-8 py-5 bg-blue-700 font-bold text-[#B5E6FF] rounded-full px-14"><span>Check our offer</span>
        </button>
      </div>
      </div>
    </section>
  );
};
