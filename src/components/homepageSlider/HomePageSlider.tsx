"use client";
import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/react";
import "swiper/css";

// Import Swiper styles
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { TypeAnimation } from "react-type-animation";
// import Swiper and modules styles

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./HomePageSlider.module.css";
import Image from "next/image";

export default function HomePageSlider() {
  return (
    <div className="max-w-full ">
<Swiper
    slidesPerView={1}
    autoplay={{delay:7000}}
    loop={true}
    pagination={{
      clickable: true
    }}
    navigation={true}
    modules={[ Navigation,Pagination,Autoplay]}
    className={styles.swiper}
    >
      <SwiperSlide className='relative'>
          <Image
            src={"/img/computer.jpg"}
            width={0}
            height={0}
            sizes='100vw'
            style={{ width: "100%", height: "88vh" }}
            alt='caption image'
          />
          <div className='font-moraba-demiBold text-base md:text-2xl absolute top-4 right-4 md:right-48 text-gray-500 dark:text-gray-500'>
            {" "}
            آموزش مهارت های نرم افزاری و برنامه نویسی کامپیوتر{" "}
          </div>
        </SwiperSlide>
      <SwiperSlide>
       
          <Image
            src={"/img/spacenights.jpg"}
            width={0}
            height={0}
            sizes='100vw'
            style={{ width: "100%", height: "88vh" }}
            alt='caption image'
          />
        <div className='font-dana-demiBold text-base md:text-2xl absolute top-4  right-4 md:right-48 text-gray-200 dark:text-gray-200'>
            {" "}
            بزرگترین و مجهزترین رصد خانه شمال غرب کشور{" "}
          </div>
        
      </SwiperSlide>
      <SwiperSlide className='relative'>
          <Image
            src={"/img/robotics.jpg"}
            width={0}
            height={0}
            sizes='99vw'
            style={{ width: "100%" ,overflow:'auto', height: "88vh" }}
            alt='caption image' 
          />
          <div className='font-dana-demiBold text-base md:text-2xl absolute top-4  right-4 md:right-48 text-gray-700 dark:text-gray-700'>
            {" "}
            برگزاری کلاس های رباتیک برای تمام سنین{" "}
          </div>
        </SwiperSlide>
      <SwiperSlide className='relative'>
          <Image
            src={"/img/lab.jpg"}
            width={0}
            height={0}
            sizes='99vw'
            style={{ width: "100%", height: "88vh" }}
            alt='caption image'
          />
            <TypeAnimation
              sequence={[
                "آزمایشگاه های مجهز علوم پایه  ",
                1000, // Waits 1s
                " برگزاری کلاس های آزمایشگاهی برای مدارس", 
                2000, // Waits 2s
                "  تشکیل کلاس های آمادگی برای المپیاد منطقه ای",
                1000, 
                "  تشکیل کلاس های آمادگی برای المپیاد کشوری",
                2000,
              ]}
              speed={20}
              cursor={true}
              repeat={Infinity}
              className='font-dana-demiBold text-base md:text-2xl absolute top-14 right-4 md:right-8 text-gray-700 dark:text-gray-700'
            />
          
        </SwiperSlide>
      <SwiperSlide className='relative'>
          <Image
            src={"/img/stars.jpg"}
            width={0}
            height={0}
            sizes='99vw'
            style={{ width: "100%", height: "88vh" }}
            alt='caption image'
          />
          <div className='font-dana-demiBold text-base md:text-2xl absolute top-24 right-4 md:right-48 dark:text-red0'>
            {" "}
            رصد ستارگان و سیارات در شب های نجوم{" "}
          </div>
        </SwiperSlide>
    </Swiper>
    </div>
    
  );
}
