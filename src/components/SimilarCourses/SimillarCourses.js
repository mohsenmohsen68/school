'use client'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Styles from './SimilarCourses.module.css';
import { Pagination } from 'swiper/modules';
import Course from '@/components/Course/Course';

function SimillarCourses({ courses, filter }) {
  console.log('vv', courses, filter)
  const filteredCourses = courses.filter(item => item.cluster === filter)
  console.log("filtered course : ", filteredCourses)
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className={Styles.mySwiper}
      >
        {filteredCourses.map(item => <SwiperSlide key={item._id}>
          <Course img={item.img} id={item._id} discount={item.discount} title={item.title} desc={item.description} rate={item.stisfiction} teacherName={item.teacher.firstName} teacherLastName={item.teacher.lastName} studentsNumber={item.studentNo} price={item.price}  />
        </SwiperSlide>)}


      </Swiper>
    </>
  )
}

export default SimillarCourses
