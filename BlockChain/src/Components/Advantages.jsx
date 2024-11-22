import React,{useEffect} from "react";
import img3 from "../Assets/img3.jpg"
import rightarrow from "../Assets/rightarrow.png"
import aos from "aos"
import "aos/dist/aos.css"
const Advantages = () => {
    useEffect(() => {
        aos.init({
            once: "true",
        })
    }, [])
    return (
        <>
            <div className='flex flex-col-reverse lg:flex-row items-center lg:gap-14 2xl:gap-28 mx-auto max-w-[400px] md:max-w-[600px] lg:max-w-[1150px] xl:max-w-[1330px] 2xl:max-w-[1420px] pt-16 xl:pt-2 px-4 lg:px-8 2xl:px-1'>
                <div className='space-y-5 xl:space-y-12'>
                    <h1 className='text-[#212121] font-["Dela_Gothic_One"] text-[32px] text-center lg:text-[44px] lg:text-start xl:text-[52px] 2xl:text-[60px]'>Advantages Of Blockchain</h1>
                    <div className='space-y-6'>
                        <p className='font-["Montserrat"] text-sm lg:text-[15px] xl:text-base 2xl:text-[17px] flex lg:items-center gap-6' data-aos="fade-right" data-aos-anchor-placement="bottom-bottom" data-aos-easing="ease-in-sine" data-aos-duration="400"><span><img src={rightarrow} alt="" className='w-[70px]' /></span>Blockchain's cryptographic structure ensures secure, tamper-proof data storage and transactions.</p>

                        <p className='font-["Montserrat"] text-sm lg:text-[15px] xl:text-base 2xl:text-[17px] flex lg:items-center gap-6' data-aos="fade-right" data-aos-anchor-placement="bottom-bottom" data-aos-easing="ease-in-sine" data-aos-duration="400"><span><img src={rightarrow} alt="" className='w-[70px]' /></span>Removes central authorities, enabling peer-to-peer interactions and reducing reliance on intermediaries.</p>

                        <p className='font-["Montserrat"] text-sm lg:text-[15px] xl:text-base 2xl:text-[17px] flex lg:items-center gap-6' data-aos="fade-right" data-aos-anchor-placement="bottom-bottom" data-aos-easing="ease-in-sine" data-aos-duration="400"><span><img src={rightarrow} alt="" className='w-[70px]' /></span>Provides a public, unalterable ledger accessible to all, improving trust and accountability.</p>

                        <p className='font-["Montserrat"] text-sm lg:text-[15px] xl:text-base 2xl:text-[17px] flex lg:items-center gap-6' data-aos="fade-right" data-aos-anchor-placement="bottom-bottom" data-aos-easing="ease-in-sine" data-aos-duration="400"><span><img src={rightarrow} alt="" className='w-[70px]' /></span>Tracks asset origins and movement, benefiting supply chains, fraud prevention, and product authenticity.</p>

                        <p className='font-["Montserrat"] text-sm lg:text-[15px] xl:text-base 2xl:text-[17px] flex lg:items-center gap-6' data-aos="fade-right" data-aos-anchor-placement="bottom-bottom" data-aos-easing="ease-in-sine" data-aos-duration="400"><span><img src={rightarrow} alt="" className='w-[70px]' /></span>Automates processes with smart contracts, reducing transaction times and operational costs.</p>

                        <p className='font-["Montserrat"] text-sm lg:text-[15px] xl:text-base 2xl:text-[17px] flex lg:items-center gap-6' data-aos="fade-right" data-aos-anchor-placement="bottom-bottom" data-aos-easing="ease-in-sine" data-aos-duration="400"><span><img src={rightarrow} alt="" className='w-[70px]' /></span>Provides encrypted, permissioned access to sensitive information, protecting user identity and data.</p>
                    </div>
                </div>
                <img src={img3} alt="" className='lg:w-[500px] xl:w-[650px] mb-6 lg:mb-0' data-aos="fade" data-aos-anchor-placement="top-center" data-aos-easing="ease-in-sine" data-aos-duration="200"/>
            </div>
        </>
    )
}

export default Advantages
