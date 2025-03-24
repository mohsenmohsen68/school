"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Course from "../Course/Course";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import styles from "./HorizontalSliderCSS.module.css";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";


type prop = {
    title: string;
    img: string;
    teacherName: string;
    teacherLastName: string;
    rate: number;
    studentsNumber: number;
    desc: string;
    price: number;
    discount: number;
  };  
export default function HorizontalSlider(props: prop): JSX.Element {
  const progressCircle = useRef<HTMLInputElement>(null);
  const progressContent = useRef<HTMLInputElement>(null);
  const onAutoplayTimeLeft = (
    s: typeof Swiper,
    time: number,
    progress: number
  ): void => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty(
        "--progress",
        String(1 - progress)
      );
    }
    if (progressContent.current) {
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
        disableOnInteraction: false
        //  pauseOnMouseEnter: true,
      }}
      pagination={{
        clickable: true
      }}
      modules={[Autoplay, Pagination]}
      onAutoplayTimeLeft={onAutoplayTimeLeft}
      preventClicks={false}
      breakpoints={{
        // when window width is <= 1024px
        0: {
          slidesPerView: 1
        },
        680: {
          slidesPerView: 2
        },
        // when window width is <= 768px
        770: {
          slidesPerView: 3
        },
        1032: {
          slidesPerView: 4
        }
      }}
      className={styles.swiper}
    >
      {props.courses.map((item) => (
        <SwiperSlide className={styles.swiperSlide}>
          <Course
            key={item._id}
            title={item.title}
            img={item.img}
            teacherName={item.teacher.firstName}
            teacherLastName={item.teacher.lastName}
            rate={item.stisfiction}
            studentsNumber={item.studentNo}
            desc={item.description}
            price={item.price}
            discount={item.discount}
          />
        </SwiperSlide>
      ))}
      <div className={styles.autoplayProgress} slot='container-end'>
        <svg viewBox='0 0 48 48' ref={progressCircle}>
          <circle cx='24' cy='24' r='20'></circle>
        </svg>
        <span ref={progressContent}></span>
      </div>
    </Swiper>
  );
}
