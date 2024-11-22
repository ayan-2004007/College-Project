import React,{useEffect} from "react";
import img2 from "../Assets/img2.jpg"
import aos from "aos"
import "aos/dist/aos.css"
const HowWorks = () => {
    useEffect(() => {
        aos.init({
            once: "true",
        })
    }, [])
    return (
        <>
            <div id="howWorks" className='lg:flex items-center space-y-6 lg:space-y-0 lg:gap-14 2xl:gap-28 mx-auto max-w-[400px] md:max-w-[600px] lg:max-w-[1150px] xl:max-w-[1330px] 2xl:max-w-[1420px] px-4 lg:px-2 2xl:px-1'>
                <img src={img2} alt="" className='lg:w-[500px] xl:w-[650px]' data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-easing="ease-in-sine" data-aos-duration="600"/>
                <div className='space-y-5 xl:space-y-12'>
                    <h1 className='text-[#212121] font-["Dela_Gothic_One"] lg:pl-3 text-[32px] text-center lg:text-[44px] lg:text-start xl:text-[52px] 2xl:text-[60px]'>How It Works ?</h1>
                    <p className='font-["Montserrat"] text-sm lg:text-[15px] xl:text-base 2xl:text-[17px] xl:leading-7'>Blockchain is a decentralized digital ledger that securely records transactions across multiple computers, ensuring transparency and preventing tampering. Each transaction is grouped into a "block" and linked to the previous block via a cryptographic hash, creating a chain. This structure makes it nearly impossible to alter past data without modifying all subsequent blocks, requiring consensus from the network. When a transaction occurs, it is verified by a network of computers (nodes) using rules like Proof of Work or Proof of Stake. Once validated, the transaction is added to the blockchain and distributed to all participants. Blockchain eliminates the need for intermediaries, enabling secure, transparent, and efficient peer-to-peer transactions. While widely known for its role in cryptocurrency, blockchain's potential extends to industries like finance, supply chain management, and healthcare, offering solutions for secure data sharing, automation, and fraud prevention</p>
                </div>
            </div>
        </>
    )
}

export default HowWorks
