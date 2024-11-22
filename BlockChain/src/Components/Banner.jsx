import React,{useEffect} from "react";
import img1 from "../Assets/img1.jpg";
import arrow from "../Assets/arrow.png";
import aos from "aos"
import "aos/dist/aos.css"
const Banner = () => {
    useEffect(() => {
        aos.init({
            once: "true",
        })
    }, [])
    return (
        <>
            <div className="flex flex-col pt-1 px-2 xl:gap-10 xl:pt-10 2xl:gap-8 items-center">
                <h1 className="font-['Bowlby_One'] text-[#212121] text-center lg:text-base xl:text-[20px]">BARRACKPORE RASTRAGURU SURENDRANATH COLLEGE</h1>
                <div className="flex flex-col items-center xl:flex-row-reverse xl:px-10 mx-auto max-w-[1646px]" data-aos="fade-down" data-aos-anchor-placement="top-center" data-aos-easing="ease-in-sine" data-aos-duration="600">
                    <img src={img1} alt="" className="w-[370px] md:w-[500px] lg:w-[550px] xl:w-[625px] 2xl:w-[750px]" />
                    <div className="flex flex-col items-center px-2 gap-5 xl:items-start xl:pl-10 2xl:gap-8">
                        <p className="font-['Montserrat'] text-[15px] text-center lg:text-[20px] xl:text-start 2xl:text-[24px]">Computer Science Department Presents (5th Sem)</p>
                        <p className="text-[#121212] font-['Dela_Gothic_One'] text-[36px] text-center lg:text-[44px] xl:text-start xl:text-[56px] 2xl:text-[64px]"> BLOCKCHAIN TECHNOLOGY</p>
                        <p className="font-['Montserrat'] text-[15px] text-center max-w-[540px] lg:text-base lg:max-w-[700px] xl:text-start 2xl:text-[18px]  xl:leading-7">At its core, blockchain is a digital ledger or database that is decentralized, transparent, and secure. It allows information (or transactions) to be stored across a network of computers in a way that makes it difficult to alter, hack, or cheat the system.</p>
                        <button onClick={() => {
                            document.getElementById("howWorks").scrollIntoView({ behavior: "smooth", block: "start" })
                        }} className="bg-[#E26629] text-white font-['Dela_Gothic_One'] text-[15px] flex gap-2 px-6 py-3 items-center rounded-xl 2xl:px-10 2xl:py-4 group hover:rotate-0 hover:bg-[#121212] duration-300">KNOW MORE<span><img src={arrow} alt="" className="h-[45px] w-[45px] -rotate-[130deg] transition-transform duration-300 group-hover:rotate-0" /></span>
                        </button>

                    </div>
                </div>
                <div className="z-30 fixed bottom-0 md:bottom-2 w-full bg-transparent backdrop-blur-lg px-2 py-3 text-center max-w-[550px] mx-auto rounded-3xl">
                    <p className="font-['Montserrat'] text-xs sm:text-sm font-bold xl:text-[18px] mx-auto text-center">Designed and Developed by : AYAN | SHIVANSHU</p>
                </div>
            </div>
        </>
    );
};

export default Banner;
