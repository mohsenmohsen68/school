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
import Course from "@/components/Course/Course";
import OurHelps from "@/components/OurHelps/OurHelps";
import HorizontalSlider from "@/components/HorizontalSlider/HorizontalSlider";


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

      

    <TitleBar TitleName="نقشه راه ها" desc="نقشه های راه برای شروع اصولی یادگیری" color="green" />

    
      <div className=" md:container mx-auto grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-4 place-items-center gap-2 ">
        <RoadMap icon={<HiOutlineDesktopComputer/>} title="برنامه نویسی" color="yellow" coursesNumber="دوازده" />
        <RoadMap icon={<GiMaterialsScience />} title="علوم پایه" color="blue" coursesNumber="بیست و دو" />
        <RoadMap icon={<GiAstronautHelmet/>} title="نجوم" color="red" coursesNumber="هیجده" />
        <RoadMap icon={<LiaRobotSolid/>} title="رباتیک" color="green" coursesNumber="هفت" />
      </div>

      <div className='container mx-auto'>
        <Promotion />
      </div>

      <TitleBar TitleName="آخرین دوره های پژوهش سرا" desc="سکوی پرتاپ شما به سمت موفقیت" color='blue' />
    
    <div className=" md:container mx-auto grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 place-items-center py-4">
      <Course title='رباتیک مقدماتی' img="/img/robotics.jpg" teacherName='هادی ' teacherLastName="حسینی" rate={4} studentsNumber={204} desc="وقتی اسم بازی و مسابقه میاد بچه‌ها کنجکاویشون تحریک میشه و سوالات زیادی براشون به وجود میاد که باعث یادگیری بهتر و پرورش کنجکاویشون میشه." price={400000} discount={40}/>
      <Course title='نجوم مقدماتی' img="/img/stars.jpg" teacherName='محسن ' teacherLastName="موحدی نژاد" rate={5} studentsNumber={402} desc="وقتی اسم بازی و مسابقه میاد بچه‌ها کنجکاویشون تحریک میشه و سوالات زیادی براشون به وجود میاد که باعث یادگیری بهتر و پرورش کنجکاویشون میشه." price={2000000} discount={70}/>
      <Course title='رباتیک مقدماتی' img="/img/robotics.jpg" teacherName='هادی ' teacherLastName="حسینی" rate={4} studentsNumber={204} desc="وقتی اسم بازی و مسابقه میاد بچه‌ها کنجکاویشون تحریک میشه و سوالات زیادی براشون به وجود میاد که باعث یادگیری بهتر و پرورش کنجکاویشون میشه." price={400000} discount={40}/>
      <Course title='رباتیک مقدماتی' img="/img/robotics.jpg" teacherName='هادی ' teacherLastName="حسینی" rate={4} studentsNumber={204} desc="وقتی اسم بازی و مسابقه میاد بچه‌ها کنجکاویشون تحریک میشه و سوالات زیادی براشون به وجود میاد که باعث یادگیری بهتر و پرورش کنجکاویشون میشه." price={400000} discount={40}/>
      <Course title='رباتیک مقدماتی' img="/img/robotics.jpg" teacherName='هادی ' teacherLastName="حسینی" rate={4} studentsNumber={204} desc="وقتی اسم بازی و مسابقه میاد بچه‌ها کنجکاویشون تحریک میشه و سوالات زیادی براشون به وجود میاد که باعث یادگیری بهتر و پرورش کنجکاویشون میشه." price={400000} discount={40}/>
      <Course title='رباتیک مقدماتی' img="/img/robotics.jpg" teacherName='هادی ' teacherLastName="حسینی" rate={4} studentsNumber={204} desc="وقتی اسم بازی و مسابقه میاد بچه‌ها کنجکاویشون تحریک میشه و سوالات زیادی براشون به وجود میاد که باعث یادگیری بهتر و پرورش کنجکاویشون میشه." price={400000} discount={40}/>
      <Course title='رباتیک مقدماتی' img="/img/robotics.jpg" teacherName='هادی ' teacherLastName="حسینی" rate={4} studentsNumber={204} desc="وقتی اسم بازی و مسابقه میاد بچه‌ها کنجکاویشون تحریک میشه و سوالات زیادی براشون به وجود میاد که باعث یادگیری بهتر و پرورش کنجکاویشون میشه." price={400000} discount={40}/>
      <Course title='رباتیک مقدماتی' img="/img/robotics.jpg" teacherName='هادی ' teacherLastName="حسینی" rate={4} studentsNumber={204} desc="وقتی اسم بازی و مسابقه میاد بچه‌ها کنجکاویشون تحریک میشه و سوالات زیادی براشون به وجود میاد که باعث یادگیری بهتر و پرورش کنجکاویشون میشه." price={400000} discount={40}/>
      <Course title='رباتیک مقدماتی' img="/img/robotics.jpg" teacherName='هادی ' teacherLastName="حسینی" rate={4} studentsNumber={204} desc="وقتی اسم بازی و مسابقه میاد بچه‌ها کنجکاویشون تحریک میشه و سوالات زیادی براشون به وجود میاد که باعث یادگیری بهتر و پرورش کنجکاویشون میشه." price={400000} discount={40}/>
      <Course title='رباتیک مقدماتی' img="/img/robotics.jpg" teacherName='هادی ' teacherLastName="حسینی" rate={4} studentsNumber={204} desc="وقتی اسم بازی و مسابقه میاد بچه‌ها کنجکاویشون تحریک میشه و سوالات زیادی براشون به وجود میاد که باعث یادگیری بهتر و پرورش کنجکاویشون میشه." price={400000} discount={40}/>
      <Course title='رباتیک مقدماتی' img="/img/robotics.jpg" teacherName='هادی ' teacherLastName="حسینی" rate={4} studentsNumber={204} desc="وقتی اسم بازی و مسابقه میاد بچه‌ها کنجکاویشون تحریک میشه و سوالات زیادی براشون به وجود میاد که باعث یادگیری بهتر و پرورش کنجکاویشون میشه." price={400000} discount={40}/>
      <Course title='رباتیک مقدماتی' img="/img/robotics.jpg" teacherName='هادی ' teacherLastName="حسینی" rate={4} studentsNumber={204} desc="وقتی اسم بازی و مسابقه میاد بچه‌ها کنجکاویشون تحریک میشه و سوالات زیادی براشون به وجود میاد که باعث یادگیری بهتر و پرورش کنجکاویشون میشه." price={400000} discount={40}/>
      </div> 

      <TitleBar TitleName=" ما چه کمکی میتونیم بهت بکنیم " desc="از شروع مسیر کنارتیم و نمیذاریم آب تو دلت تکون بخوره" color='yellow' />
     
      <div className='md:container mx-auto '>
        <OurHelps/>
      </div>

      <TitleBar TitleName=" محبوب ترین دوره ها " desc="پرمخاطب ترین و بهترین دوره های پژوهش سرا " color='red' />
     

      <div className='container mx-auto  '>
        <HorizontalSlider/>
      </div>

      <div className='md:container mx-auto '>
        <Footer />
      </div>
    </div>
  );
}
