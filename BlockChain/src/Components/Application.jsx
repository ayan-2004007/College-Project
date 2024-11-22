import React, { useEffect } from "react";
import i1 from "../Assets/icon1.png"
import i2 from "../Assets/icon2.png"
import i3 from "../Assets/icon3.png"
import i4 from "../Assets/icon4.png"
import i5 from "../Assets/icon5.png"
import i6 from "../Assets/icon6.png"
import i7 from "../Assets/icon7.png"
import i8 from "../Assets/icon8.png"
import aos from "aos"
import "aos/dist/aos.css"
const Application = () => {
    useEffect(() => {
        aos.init({
            once: "true",
        })
    }, [])
    return (
        <>
            <div className="flex flex-col gap-12 xl:gap-[75px] mt-10 lg:mt-0">
                <div className="flex flex-col px-5 gap-6 items-center lg:px-10">
                    <h1 className="text-[32px] font-['Dela_Gothic_One'] text-center text-[#212121] md:text-[38px] lg:text-[44px] xl:text-[56px]">BlockChain Use Cases</h1>
                    <p className="text-[15px] font-['Montserrat'] font-light leading-5 text-center sm:max-w-[620px] md:font-normal lg:text-[16px] lg:leading-6 lg:max-w-[1098px] xl:text-[18px] xl:leading-8">Blockchain technology offers transformative applications across industries, enhancing security, transparency, and efficiency. Explore these diverse use cases revolutionizing finance, identity, healthcare, and beyond</p>
                </div>
                <div className="flex flex-col px-5 gap-5 lg:grid lg:grid-rows-4 lg:grid-cols-2 lg:mx-auto">

                    <div className="bg-[#AC68FF] flex flex-col gap-4 items-center py-8 px-6 rounded-[20px] sm:max-w-[420px] sm:mx-auto xl:flex-row xl:max-w-[674px] xl:gap-7" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-easing="ease-in-sine" data-aos-duration="400">
                        <img src={i1} alt="" className="h-[100px] w-[100px] xl:h-[80px] xl:w-[80px]" />
                        <div className="flex flex-col gap-5">
                            <h1 className="text-white font-['Dela_Gothic_One'] text-[15px] uppercase text-center xl:text-[20px] xl:text-start">Cryptocurrency</h1>
                            <p className="text-white font-['Montserrat'] text-sm text-center xl:text-[16px] xl:leading-7 xl:text-start xl:font-light">Digital currency secured by cryptography, enabling secure online transactions and decentralized financial systems without relying on traditional banks.</p>
                        </div>
                    </div>

                    <div className="bg-[#AC68FF] flex flex-col gap-4 items-center py-8 px-6 rounded-[20px] sm:max-w-[420px] sm:mx-auto xl:flex-row xl:max-w-[674px] xl:gap-7" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-easing="ease-in-sine" data-aos-duration="400">
                        <img src={i2} alt="" className="h-[100px] w-[100px] xl:h-[80px] xl:w-[80px]" />
                        <div className="flex flex-col gap-5">
                            <h1 className="text-white font-['Dela_Gothic_One'] text-[15px] uppercase text-center xl:text-[20px] xl:text-start">Supply Chain Management</h1>
                            <p className="text-white font-['Montserrat'] text-sm text-center xl:text-[16px] xl:leading-7 xl:text-start xl:font-light">The coordination of production, shipment, and distribution processes to ensure efficient delivery of goods from suppliers to consumers.</p>
                        </div>
                    </div>

                    <div className="bg-[#AC68FF] flex flex-col gap-4 items-center py-8 px-6 rounded-[20px] sm:max-w-[420px] sm:mx-auto xl:flex-row xl:max-w-[674px] xl:gap-7" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-easing="ease-in-sine" data-aos-duration="400">
                        <img src={i3} alt="" className="h-[100px] w-[100px] xl:h-[80px] xl:w-[80px]" />
                        <div className="flex flex-col gap-5">
                            <h1 className="text-white font-['Dela_Gothic_One'] text-[15px] uppercase text-center xl:text-[20px] xl:text-start">Smart Contracts</h1>
                            <p className="text-white font-['Montserrat'] text-sm text-center xl:text-[16px] xl:leading-7 xl:text-start xl:font-light">Self-executing contracts with terms directly written into code, automating transactions and reducing the need for intermediaries in various agreements.</p>
                        </div>
                    </div>

                    <div className="bg-[#AC68FF] flex flex-col gap-4 items-center py-8 px-6 rounded-[20px] sm:max-w-[420px] sm:mx-auto xl:flex-row xl:max-w-[674px] xl:gap-7" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-easing="ease-in-sine" data-aos-duration="400">
                        <img src={i4} alt="" className="h-[100px] w-[100px] xl:h-[80px] xl:w-[80px]" />
                        <div className="flex flex-col gap-5">
                            <h1 className="text-white font-['Dela_Gothic_One'] text-[15px] uppercase text-center xl:text-[20px] xl:text-start">Decentralized Finance</h1>
                            <p className="text-white font-['Montserrat'] text-sm text-center xl:text-[16px] xl:leading-7 xl:text-start xl:font-light">LA blockchain-based financial ecosystem offering traditional banking services like lending and borrowing without central authorities or intermediaries.</p>
                        </div>
                    </div>

                    <div className="bg-[#AC68FF] flex flex-col gap-4 items-center py-8 px-6 rounded-[20px] sm:max-w-[420px] sm:mx-auto xl:flex-row xl:max-w-[674px] xl:gap-7" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-easing="ease-in-sine" data-aos-duration="400">
                        <img src={i5} alt="" className="h-[100px] w-[100px] xl:h-[80px] xl:w-[80px]" />
                        <div className="flex flex-col gap-5">
                            <h1 className="text-white font-['Dela_Gothic_One'] text-[15px] uppercase text-center xl:text-[20px] xl:text-start">Identity Verification</h1>
                            <p className="text-white font-['Montserrat'] text-sm text-center xl:text-[16px] xl:leading-7 xl:text-start xl:font-light">Processes to confirm a person’s identity, often using digital methods, to secure online services and prevent fraud or unauthorized access.</p>
                        </div>
                    </div>

                    <div className="bg-[#AC68FF] flex flex-col gap-4 items-center py-8 px-6 rounded-[20px] sm:max-w-[420px] sm:mx-auto xl:flex-row xl:max-w-[674px] xl:gap-7" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-easing="ease-in-sine" data-aos-duration="400">
                        <img src={i6} alt="" className="h-[100px] w-[100px] xl:h-[80px] xl:w-[80px]" />
                        <div className="flex flex-col gap-5">
                            <h1 className="text-white font-['Dela_Gothic_One'] text-[15px] uppercase text-center xl:text-[20px] xl:text-start">Voting Systems</h1>
                            <p className="text-white font-['Montserrat'] text-sm text-center xl:text-[16px] xl:leading-7 xl:text-start xl:font-light">Digital or blockchain-based systems that enable secure, transparent, and tamper-resistant voting processes to maintain the integrity of elections.</p>
                        </div>
                    </div>

                    <div className="bg-[#AC68FF] flex flex-col gap-4 items-center py-8 px-6 rounded-[20px] sm:max-w-[420px] sm:mx-auto xl:flex-row xl:max-w-[674px] xl:gap-7" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-easing="ease-in-sine" data-aos-duration="400">
                        <img src={i7} alt="" className="h-[100px] w-[100px] xl:h-[80px] xl:w-[80px]" />
                        <div className="flex flex-col gap-5">
                            <h1 className="text-white font-['Dela_Gothic_One'] text-[15px] uppercase text-center xl:text-[20px] xl:text-start">Healthcare Management</h1>
                            <p className="text-white font-['Montserrat'] text-sm text-center xl:text-[16px] xl:leading-7 xl:text-start xl:font-light">The administration of healthcare systems to improve patient care, streamline processes, and manage medical resources efficiently.</p>
                        </div>
                    </div>

                    <div className="bg-[#AC68FF] flex flex-col gap-4 items-center py-8 px-6 rounded-[20px] sm:max-w-[420px] sm:mx-auto xl:flex-row xl:max-w-[674px] xl:gap-7"  data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-easing="ease-in-sine" data-aos-duration="400">
                        <img src={i8} alt="" className="h-[100px] w-[100px] xl:h-[80px] xl:w-[80px]" />
                        <div className="flex flex-col gap-5">
                            <h1 className="text-white font-['Dela_Gothic_One'] text-[15px] uppercase text-center xl:text-[20px] xl:text-start">Gaming and NFTs</h1>
                            <p className="text-white font-['Montserrat'] text-sm text-center xl:text-[16px] xl:leading-7 xl:text-start xl:font-light">Digital assets representing in-game items or collectibles, often used in gaming to create unique, tradable items with real-world value.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Application