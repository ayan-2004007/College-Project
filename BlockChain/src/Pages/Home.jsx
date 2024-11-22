import Banner from "../Components/Banner"
import Application from "../Components/Application"
import HowWorks from "../Components/HowWorks"
import Advantages from "../Components/Advantages"
import Future from "../Components/Future"
import Platforms from "../Components/Platforms"
const Home = () => {
    return (
        <>
            <div className="flex flex-col gap-[65px]">
                <Banner />
                <div className="flex flex-col gap-[65px] lg:gap-[100px] xl:gap-[120px]">
                    <HowWorks />
                    <Application />
                    <Advantages />
                    <Platforms/>
                    <Future />
                </div>
            </div>
        </>
    )
}
export default Home