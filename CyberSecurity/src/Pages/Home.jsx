import React from "react";
import Banner from "../Components/Banner";
import Intro from "../Components/Intro";
import StaySafe from "../Components/StaySafe";

const Home = () => {
    return (
        <>
            <div className="bg-[#090909] flex flex-col gap-[94px] xl:gap-[150px]">
                <Banner />
                <Intro/>
                <StaySafe/>
            </div>
        </>
    )
}
export default Home;