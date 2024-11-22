import React from "react"
import rightarrow from "../Assets/rightarrow.png"
import img2 from "../Assets/img2.png"
const StaySafe = () => {
    return (
        <>
            <div className='flex flex-col-reverse lg:flex-row items-center lg:gap-14 2xl:gap-28 mx-auto max-w-[400px] md:max-w-[600px] lg:max-w-[1150px] xl:max-w-[1330px] 2xl:max-w-[1420px] pt-16 xl:pt-2 px-4 lg:px-8 2xl:px-1'>
                <div className='space-y-5 xl:space-y-12'>
                <h1 className='text-white font-["Roboto"] lg:pl-3 text-[24px] font-bold tracking-[3px] text-center lg:text-[44px] lg:text-start xl:text-[56px]'>STAY SAFE ONLINE</h1>
                    <div className='space-y-6 text-[#848484]'>

                        <div className="flex flex-row gap-3 xl:gap-6 items-start">
                            <img src={rightarrow} alt="" className='w-[20px] h-[20px] invert xl:h-[30px] xl:w-[30px]' />
                            <p className='font-["Montserrat"] text-sm lg:text-[15px] xl:text-base 2xl:text-[17px] flex lg:items-center gap-6' >Create strong, unique passwords to protect accounts from unauthorized access</p>
                        </div>

                        <div className="flex flex-row gap-3 xl:gap-6 items-start">
                            <img src={rightarrow} alt="" className='w-[20px] h-[20px] invert xl:h-[30px] xl:w-[30px]' />
                            <p className='font-["Montserrat"] text-sm lg:text-[15px] xl:text-base 2xl:text-[17px] flex lg:items-center gap-6' >Add extra security to accounts using two-factor authentication</p>
                        </div>

                        <div className="flex flex-row gap-3 xl:gap-6 items-start">
                            <img src={rightarrow} alt="" className='w-[20px] h-[20px] invert xl:h-[30px] xl:w-[30px]' />
                            <p className='font-["Montserrat"] text-sm lg:text-[15px] xl:text-base 2xl:text-[17px] flex lg:items-center gap-6' >Regularly update software to patch vulnerabilities and enhance security</p>
                        </div>

                        <div className="flex flex-row gap-3 xl:gap-6 items-start">
                            <img src={rightarrow} alt="" className='w-[20px] h-[20px] invert xl:h-[30px] xl:w-[30px]' />
                            <p className='font-["Montserrat"] text-sm lg:text-[15px] xl:text-base 2xl:text-[17px] flex lg:items-center gap-6' >Avoid phishing attempts by scrutinizing suspicious emails and links</p>
                        </div>

                        <div className="flex flex-row gap-3 xl:gap-6 items-start">
                            <img src={rightarrow} alt="" className='w-[20px] h-[20px] invert xl:h-[30px] xl:w-[30px]' />
                            <p className='font-["Montserrat"] text-sm lg:text-[15px] xl:text-base 2xl:text-[17px] flex lg:items-center gap-6' >Use secure networks or VPNs, avoid risky public Wi-Fi</p>
                        </div>

                        <div className="flex flex-row gap-3 xl:gap-6 items-start">
                            <img src={rightarrow} alt="" className='w-[20px] h-[20px] invert xl:h-[30px] xl:w-[30px]' />
                            <p className='font-["Montserrat"] text-sm lg:text-[15px] xl:text-base 2xl:text-[17px] flex lg:items-center gap-6' >Limit sharing sensitive data online to prevent identity theft</p>
                        </div>

                        <div className="flex flex-row gap-3 xl:gap-6 items-start">
                            <img src={rightarrow} alt="" className='w-[20px] h-[20px] invert xl:h-[30px] xl:w-[30px]' />
                            <p className='font-["Montserrat"] text-sm lg:text-[15px] xl:text-base 2xl:text-[17px] flex lg:items-center gap-6' >Protect devices with updated antivirus and anti-malware programs</p>
                        </div>

                        <div className="flex flex-row gap-3 xl:gap-6 items-start">
                            <img src={rightarrow} alt="" className='w-[20px] h-[20px] invert xl:h-[30px] xl:w-[30px]' />
                            <p className='font-["Montserrat"] text-sm lg:text-[15px] xl:text-base 2xl:text-[17px] flex lg:items-center gap-6' >Regularly back up data to avoid loss or ransomware impact</p>
                        </div>

                        <div className="flex flex-row gap-3 xl:gap-6 items-start">
                            <img src={rightarrow} alt="" className='w-[20px] h-[20px] invert xl:h-[30px] xl:w-[30px]' />
                            <p className='font-["Montserrat"] text-sm lg:text-[15px] xl:text-base 2xl:text-[17px] flex lg:items-center gap-6' >Limit unnecessary app permissions to protect personal information</p>
                        </div>

                        <div className="flex flex-row gap-3 xl:gap-6 items-start">
                            <img src={rightarrow} alt="" className='w-[20px] h-[20px] invert xl:h-[30px] xl:w-[30px]' />
                            <p className='font-["Montserrat"] text-sm lg:text-[15px] xl:text-base 2xl:text-[17px] flex lg:items-center gap-6' >Check accounts for unauthorized transactions, report fraud immediately</p>
                        </div>
                        
                    </div>
                </div>
                <img src={img2} alt="" className='lg:w-[500px] xl:w-[650px] mb-6 lg:mb-0'/>
            </div>
        </>
    )
}

export default StaySafe
