import React,{useEffect} from "react";
import img4 from "../Assets/img4.jpg"
import aos from "aos"
import "aos/dist/aos.css"
const Future = () => {
    useEffect(() => {
        aos.init({
            once: "true",
        })
    }, [])
    return (
        <>
            <div className='mb-16 lg:flex items-center space-y-6 lg:space-y-0 lg:gap-14 2xl:gap-28 mx-auto max-w-[400px] md:max-w-[600px] lg:max-w-[1150px] xl:max-w-[1330px] 2xl:max-w-[1420px] pt-16 xl:pt-2 px-4 lg:px-2 2xl:px-1'>
                <img src={img4} alt="" className='lg:w-[500px] xl:w-[650px]' data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-easing="ease-in-sine" data-aos-duration="6   00"/>
                <div className='space-y-5 xl:space-y-12'>
                    <h1 className='text-[#212121] font-["Dela_Gothic_One"] lg:pl-3 text-[32px] text-center lg:text-[44px] lg:text-start xl:text-[50px]'>Future Of Blockchain</h1>
                    <p className='font-["Montserrat"] text-sm lg:text-[15px] xl:text-base 2xl:text-[17px] xl:leading-7'>The future of blockchain holds transformative potential across industries, extending far beyond cryptocurrency. In finance, it promises faster, cheaper cross-border payments, decentralized finance (DeFi), and central bank digital currencies (CBDCs). In supply chain management, blockchain will enhance transparency, traceability, and fraud prevention, while in healthcare, it offers secure, interoperable patient data management. Smart contracts will automate complex processes in sectors like legal, insurance, and real estate. Additionally, blockchain's ability to increase transparency, reduce fraud, and enhance security will drive adoption in government and public services. Despite challenges such as scalability and regulation, blockchain's future is promising as it continues to evolve, providing more efficient, secure, and decentralized solutions for a wide range of applications globally.</p>
                </div>
            </div>
        </>
    )
}

export default Future
