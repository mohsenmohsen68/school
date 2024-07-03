"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Course from "../Course/Course";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import styles from './HorizontalSliderCSS.module.css';

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

export default function HorizontalSlider() {
    const progressCircle = useRef<HTMLInputElement>(null);
    const progressContent = useRef<HTMLInputElement>(null);
    const onAutoplayTimeLeft = (s: typeof Swiper, time:number, progress:number):void => {
        if(progressCircle.current){
            progressCircle.current.style.setProperty('--progress', String(1 - progress));
        }
        if(progressContent.current){
            progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
        }
    };
  return (
      
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        // freeMode={true}
        autoplay={{
             delay: 2500,
             disableOnInteraction: false,
             pauseOnMouseEnter: true,
          }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        preventClicks= {false}
        breakpoints= {{
            // when window width is <= 1024px
            0:{
                slidesPerView: 1,
            },
                454: {
                    slidesPerView: 2,
                },
                // when window width is <= 768px
                722:{
                    slidesPerView:3 
                },
                1032: {
                    slidesPerView: 4
                },
                
            }}
        className={styles.swiper}
      >
        <SwiperSlide className={styles.swiperSlide}>
           <Course title='رباتیک مقدماتی' img="/img/robotics.jpg" teacherName='هادی ' teacherLastName="حسینی" rate={4} studentsNumber={204} desc="وقتی اسم بازی و مسابقه میاد بچه‌ها کنجکاویشون تحریک میشه و سوالات زیادی براشون به وجود میاد که باعث یادگیری بهتر و پرورش کنجکاویشون میشه." price={400000} discount={40}/>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
            <Course title='نجوم مقدماتی' img="/img/stars.jpg" teacherName='محسن ' teacherLastName="موحدی نژاد" rate={5} studentsNumber={402} desc="وقتی اسم بازی و مسابقه میاد بچه‌ها کنجکاویشون تحریک میشه و سوالات زیادی براشون به وجود میاد که باعث یادگیری بهتر و پرورش کنجکاویشون میشه." price={2000000} discount={70}/>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
           <Course title='رباتیک مقدماتی' img="/img/robotics.jpg" teacherName='هادی ' teacherLastName="حسینی" rate={4} studentsNumber={204} desc="وقتی اسم بازی و مسابقه میاد بچه‌ها کنجکاویشون تحریک میشه و سوالات زیادی براشون به وجود میاد که باعث یادگیری بهتر و پرورش کنجکاویشون میشه." price={400000} discount={40}/>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
            <Course title='نجوم مقدماتی' img="/img/stars.jpg" teacherName='محسن ' teacherLastName="موحدی نژاد" rate={5} studentsNumber={402} desc="وقتی اسم بازی و مسابقه میاد بچه‌ها کنجکاویشون تحریک میشه و سوالات زیادی براشون به وجود میاد که باعث یادگیری بهتر و پرورش کنجکاویشون میشه." price={2000000} discount={70}/>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
           <Course title='رباتیک مقدماتی' img="/img/robotics.jpg" teacherName='هادی ' teacherLastName="حسینی" rate={4} studentsNumber={204} desc="وقتی اسم بازی و مسابقه میاد بچه‌ها کنجکاویشون تحریک میشه و سوالات زیادی براشون به وجود میاد که باعث یادگیری بهتر و پرورش کنجکاویشون میشه." price={400000} discount={40}/>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
            <Course title='نجوم مقدماتی' img="/img/stars.jpg" teacherName='محسن ' teacherLastName="موحدی نژاد" rate={5} studentsNumber={402} desc="وقتی اسم بازی و مسابقه میاد بچه‌ها کنجکاویشون تحریک میشه و سوالات زیادی براشون به وجود میاد که باعث یادگیری بهتر و پرورش کنجکاویشون میشه." price={2000000} discount={70}/>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
           <Course title='رباتیک مقدماتی' img="/img/robotics.jpg" teacherName='هادی ' teacherLastName="حسینی" rate={4} studentsNumber={204} desc="وقتی اسم بازی و مسابقه میاد بچه‌ها کنجکاویشون تحریک میشه و سوالات زیادی براشون به وجود میاد که باعث یادگیری بهتر و پرورش کنجکاویشون میشه." price={400000} discount={40}/>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
            <Course title='نجوم مقدماتی' img="/img/stars.jpg" teacherName='محسن ' teacherLastName="موحدی نژاد" rate={5} studentsNumber={402} desc="وقتی اسم بازی و مسابقه میاد بچه‌ها کنجکاویشون تحریک میشه و سوالات زیادی براشون به وجود میاد که باعث یادگیری بهتر و پرورش کنجکاویشون میشه." price={2000000} discount={70}/>
        </SwiperSlide>
        <div className={styles.autoplayProgress} slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
       
      </Swiper>
    
    
  );
}
