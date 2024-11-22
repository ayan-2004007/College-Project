import React from "react";
import img from "../Assets/img.png"
const Intro = () => {
    return (
        <>
            <div id="howWorks" className='lg:flex items-center space-y-6 lg:space-y-0 lg:gap-14 2xl:gap-28 mx-auto max-w-[400px] md:max-w-[600px] lg:max-w-[1150px] xl:max-w-[1330px] 2xl:max-w-[1420px] px-4 lg:px-2 2xl:px-1'>
                <img src={img} alt="" className='lg:w-[500px] xl:w-[650px]' />
                <div className='space-y-5 xl:space-y-12'>
                    <h1 className='text-white font-["Roboto"] lg:pl-3 text-[24px] font-bold tracking-[3px] text-center lg:text-[44px] lg:text-start xl:text-[56px]'>INTRODUCTION</h1>
                    <p className='leading-[22px] font-light text-[#989898] font-["Montserrat"] text-sm lg:text-[15px] xl:text-lg xl:leading-7'>Lorem ipsum odor amet, consectetuer adipiscing elit. Amet fermentum ullamcorper sem curae primis feugiat. Dictum fusce leo neque condimentum convallis lectus fusce. Rhoncus dolor sapien risus pulvinar aliquam nunc morbi finibus. Mattis nostra nisl tellus suspendisse feugiat ut penatibus arcu. Nulla eleifend fringilla commodo placerat erat varius. Rhoncus in gravida molestie justo congue blandit mattis per.
                    Facilisis rhoncus nascetur aliquam venenatis curae mollis. Penatibus dignissim praesent consectetur, nibh orci placerat. Nullam eget convallis maximus arcu faucibus. Iaculis dolor dui nascetur; bibendum neque ut. Faucibus vel eleifend a scelerisque himenaeos malesuada eu dis. Velit eleifend scelerisque, maecenas hendrerit vulputate aliquam quis. Placerat lacus primis nam molestie aptent semper malesuada quis. Malesuada tempus eget euismod vitae sociosqu pellentesque lacinia semper.</p>
                </div>
            </div>
        </>
    )
}

export default Intro
