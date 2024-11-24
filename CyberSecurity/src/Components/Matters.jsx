import React from 'react'
import i1 from "../Assets/i1.png"
import i2 from "../Assets/i2.png"
import i3 from "../Assets/i3.png"
import i4 from "../Assets/i4.png"
import i5 from "../Assets/i5.png"


const Matters = () => {
    return (
        <>
            <div className='space-y-8 xl:space-y-16'>
                <h1 className='text-white font-["Roboto"] px-5 text-[24px] font-bold tracking-[3px] text-center lg:text-[44px] xl:text-[56px]'>WHY CYBER SECURITY MATTERS</h1>
                <div className='px-10 xl:px-5 flex flex-wrap justify-center mx-auto gap-6 xl:gap-9 text-white max-w-[400px] md:max-w-[450px] lg:max-w-[1150px] xl:max-w-[1270px] 2xl:max-w-[1500px]'>
                    <div className='font-["Roboto"] w-full lg:w-[235px] lg:h-[235px] xl:w-[255px] xl:h-[255px] bg-white bg-opacity-[12%] rounded-3xl border border-[#7E7E7E] flex flex-col justify-between py-10 lg:py-8 px-[14px] space-y-4 lg:space-y-0'>
                        <img src={i1} alt="" className='w-14 h-14' />
                        <p className='font-bold text-lg'>Protection Against Cyber Threats</p>
                        <p className='text-white text-opacity-[65%] text-[13px]'>Safeguard Systems And Data From Malware, Phishing And Ransomware Attacks</p>
                    </div>
                    <div className='font-["Roboto"] w-full lg:w-[235px] lg:h-[235px] xl:w-[255px] xl:h-[255px] bg-white bg-opacity-[12%] rounded-3xl border border-[#7E7E7E] flex flex-col justify-between py-10 lg:py-8 px-[14px] space-y-4 lg:space-y-0'>
                        <img src={i2} alt="" className='w-14 h-14' />
                        <p className='font-bold text-lg'>Safeguarding Sensitive Information</p>
                        <p className='text-white text-opacity-[65%] text-[13px]'>Ensure Personal And Business Data Remains Secure From Unauthorized Access</p>
                    </div>
                    <div className='font-["Roboto"] w-full lg:w-[235px] lg:h-[235px] xl:w-[255px] xl:h-[255px] bg-white bg-opacity-[12%] rounded-3xl border border-[#7E7E7E] flex flex-col justify-between py-10 lg:py-8 px-[14px] space-y-4 lg:space-y-0'>
                        <img src={i3} alt="" className='w-14 h-14' />
                        <p className='font-bold text-lg'>Ensuring Business Continuity</p>
                        <p className='text-white text-opacity-[65%] text-[13px]'>Prevent Operational Disruptions And Ensure Quick Recovery From Cyberattacks</p>
                    </div>
                    <div className='font-["Roboto"] w-full lg:w-[235px] lg:h-[235px] xl:w-[255px] xl:h-[255px] bg-white bg-opacity-[12%] rounded-3xl border border-[#7E7E7E] flex flex-col justify-between py-10 lg:py-8 px-[14px] space-y-4 lg:space-y-0'>
                        <img src={i4} alt="" className='w-14 h-14' />
                        <p className='font-bold text-lg'>Building Trust in Digital Systems</p>
                        <p className='text-white text-opacity-[65%] text-[13px]'>Enhance User Confidence In Online Platforms Through Robust Security Measures</p>
                    </div>
                    <div className='font-["Roboto"] w-full lg:w-[235px] lg:h-[235px] xl:w-[255px] xl:h-[255px] bg-white bg-opacity-[12%] rounded-3xl border border-[#7E7E7E] flex flex-col justify-between py-10 lg:py-8 px-[14px] space-y-4 lg:space-y-0'>
                        <img src={i5} alt="" className='w-14 h-14' />
                        <p className='font-bold text-lg'>Mitigating Financial Loss</p>
                        <p className='text-white text-opacity-[65%] text-[13px]'>Reduce Costs Linked To Data Breaches And Other Cyber Threats</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Matters