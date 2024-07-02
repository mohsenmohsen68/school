import "./../app/globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/Footer";
import HomePageSlider from "@/components/homepageSlider/HomePageSlider";
import CountDown from "@/components/countDown/CountDown";
import Promotion from "@/components/promotionSetction/Promotion";
import TitleBar from "@/components/TitleBar/TitleBar";
import RoadMap from "@/components/RoadMap/RoadMap";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { GiMaterialsScience } from "react-icons/gi";
import { GiAstronautHelmet } from "react-icons/gi";
import { LiaRobotSolid } from "react-icons/lia";



export default function Home() {
  return (
    <div className='bg-slate-50 dark:bg-slate-600 dark:text-white '>
      <div className=' flex justify-center h-full'>
        <Header />
      </div>

      <HomePageSlider />
      
      <div className='container mx-auto'>
        <CountDown />
      </div>

      <div className='container mx-auto'>
        <Promotion />
      </div>

    <TitleBar TitleName="نقشه راه ها" desc="نقشه های راه برای شروع اصولی یادگیری" color="green" />

    <div className='container mx-auto '>
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-4 place-items-center gap-2 ">
        <RoadMap icon={<HiOutlineDesktopComputer/>} title="برنامه نویسی" color="yellow" coursesNumber="دوازده" />
        <RoadMap icon={<GiMaterialsScience />} title="علوم پایه" color="blue" coursesNumber="بیست و دو" />
        <RoadMap icon={<GiAstronautHelmet/>} title="نجوم" color="red" coursesNumber="هیجده" />
        <RoadMap icon={<LiaRobotSolid/>} title="رباتیک" color="green" coursesNumber="هفت" />
      </div>
      </div>

      <TitleBar TitleName="آخرین دوره های پژوهش سرا" desc="سکوی پرتاپ شما به سمت موفقیت" color='blue' />


      <div className='container mx-auto '>
        <Footer />
      </div>
    </div>
  );
}
