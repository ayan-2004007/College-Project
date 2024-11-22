import React from "react";
import bg from "../Assets/bg.jpg"
import i6 from "../Assets/i6.png"
import i5 from "../Assets/i5.png"
import i1 from "../Assets/i1.png"
const Banner = () => {
    return (
        <>
            <div className="h-auto bg-center bg-cover" style={{ backgroundImage: `url(${bg})` }}>
                <div className="w-full h-full bg-[rgb(0,0,0)] bg-opacity-[24%] backdrop-blur-[8px] flex flex-col gap-16 py-5 pt-20 xl:pt-32 xl:pb-10 2xl:gap-[110px]">

                    <div className="flex flex-col items-center gap-[55px] px-5 xl:flex-row xl:items-start xl:mx-auto xl:gap-0 xl:max-w-[1260px]">
                        <h1 className="font-['Audiowide'] text-[56px] text-white text-center xl:text-[80px] xl:text-start lg:tracking-[10px]">CYBER SECURITY</h1>
                        <div className="flex flex-col items-center gap-[30px] xl:items-start">
                            <p className="font-['Montserrat'] text-[#A1A1A1] text-sm font-light leading-[22px] sm:text-center max-w-[638px] xl:text-start xl:text-base xl:leadin-[26px]">Lorem ipsum odor amet, consectetuer adipiscing elit. Amet fermentum ullamcorper sem curae primis feugiat. Dictum fusce leo neque condimentum convallis lectus fusce. Rhoncus dolor sapien risus pulvinar aliquam nunc morbi finibus. Mattis nostra nisl tellus suspendisse feugiat ut penatibus arcu. Nulla eleifend fringilla commodo placerat erat varius. Rhoncus in gravida molestie justo congue blandit mattis per.</p>
                            <button className="text-[#180720] font-['Montserrat'] font-bold text-base bg-white px-8 py-5 rounded-[15px]">Know More</button>
                        </div>
                    </div>

                    <div className="flex flex-col px-8 gap-[30px] mx-auto md:grid md:grid-rows-2 md:grid-cols-2 xl:flex xl:flex-row xl:gap-[40px]">
                        <div className="flex flex-col gap-5 bg-black bg-opacity-[24%] backdrop-blur-[30px] rounded-[30px] border-[1px] border-[#414141] px-3 pl-6 py-16 max-w-[390px] xl:min-h-[320px]">
                            <img src={i6} alt="" className="h-[60px] w-[60px]" />
                            <p className="font-['Roboto'] text-base text-[#ACACAC] leading-[28px] font-light xl:text-lg xl:leading-[28px]">
                                Cybersecurity safeguards personal, financial, and organizational data from unauthorized access and breaches.
                            </p>
                        </div>
                        <div className="flex flex-col gap-5 bg-black bg-opacity-[24%] backdrop-blur-[30px] rounded-[30px] border-[1px] border-[#414141] px-3 pl-6 py-16 max-w-[390px] xl:min-h-[320px]">
                            <img src={i5} alt="" className="h-[60px] w-[60px]" />
                            <p className="font-['Roboto'] text-base text-[#ACACAC] leading-[28px] font-light xl:text-lg xl:leading-[28px]">
                                It helps avoid costly damages from cyberattacks, such as ransomware or fraud, which can disrupt businesses and individuals.
                            </p>
                        </div>
                        <div className="flex flex-col gap-5 bg-black bg-opacity-[24%] backdrop-blur-[30px] rounded-[30px] border-[1px] border-[#414141] px-3 pl-6 py-16 max-w-[390px] xl:min-h-[320px] md:col-span-2 md:place-self-center">
                            <img src={i1} alt="" className="h-[60px] w-[60px]" />
                            <p className="font-['Roboto'] text-base text-[#ACACAC] leading-[28px] font-light xl:text-lg xl:leading-[28px]">
                                By securing systems, cybersecurity builds trust in digital platforms, ensuring users' privacy is respected and protected.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Banner