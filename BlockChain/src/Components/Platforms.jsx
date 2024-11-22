import React from 'react'
import Marquee from "react-fast-marquee";
import p1 from "../assets/p1.png"
import p2 from "../assets/p2.png"
import p3 from "../assets/p3.png"
import p4 from "../assets/p4.png"
import p5 from "../assets/p5.png"
import p6 from "../assets/p6.png"
import p7 from "../assets/p7.png"
import p8 from "../assets/p8.png"

const Platforms = () => {
    return (
        <>
            <div className="flex flex-col px-5 gap-6 items-center lg:px-10 xl:mt-14">
                <h1 className="text-[32px] font-['Dela_Gothic_One'] text-center text-[#212121] md:text-[38px] lg:text-[44px] xl:text-[56px]">Blockchain Platforms</h1>
                <p className="text-[15px] font-['Montserrat'] font-light leading-5 text-center sm:max-w-[620px] md:font-normal lg:text-[16px] lg:leading-6 lg:max-w-[1098px] xl:text-[18px] xl:leading-8">Explore the most influential blockchain networks transforming industries, enabling secure transactions, decentralized applications, and powering the future of digital technology.</p>
            </div>
            <Marquee autoFill gradient gradientWidth={20} gradientColor='white'>
                <div className='flex items-center gap-6 md:gap-8 lg:gap-16 xl:gap-24'>
                    <img src={p1} alt="" className='w-[60px] md:w-[80px] lg:w-[100px] xl:w-[120px] h-full' />
                    <img src={p2} alt="" className='w-[60px] md:w-[80px] lg:w-[100px] xl:w-[120px] h-full' />
                    <img src={p3} alt="" className='w-[60px] md:w-[80px] lg:w-[100px] xl:w-[120px] h-full' />
                    <img src={p4} alt="" className='w-[60px] md:w-[80px] lg:w-[100px] xl:w-[120px] h-full' />
                    <img src={p5} alt="" className='w-[60px] md:w-[80px] lg:w-[100px] xl:w-[120px] h-full' />
                    <img src={p6} alt="" className='w-[60px] md:w-[80px] lg:w-[100px] xl:w-[120px] h-full' />
                    <img src={p7} alt="" className='w-[60px] md:w-[80px] lg:w-[100px] xl:w-[120px] h-full' />
                    <img src={p8} alt="" className='w-[60px] md:w-[80px] lg:w-[100px] xl:w-[120px] h-full mr-6 md:mr-8 lg:mr-16 xl:mr-24' />
                </div>
            </Marquee>
        </>
    )
}

export default Platforms
