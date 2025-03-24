import React from "react";
import Image from "next/image";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { PiStudentLight } from "react-icons/pi";
import Rating from "@mui/material/Rating";
import { FaArrowDown } from "react-icons/fa";

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

const Course = (props: prop): JSX.Element => {
  return (
    <div className='flex flex-col w-60 h-96 bg-slate-200 dark:bg-slate-700 shadow-lg rounded-2xl overflow-hidden justify-self-center mx-auto'>
      <div className='relative h-2/5'>
        <Image
          src={props.img}
          width={0}
          height={0}
          sizes='100vw'
          className='w-full h-full'
          alt='course Image'
        />
        <div className='w-7 h-7 rounded-full absolute top-2 right-2 bg-green-600 flex justify-center items-center font-dana text-xs p-0 '>
          {" "}
          {props.discount.toLocaleString("fa-ir")}%{" "}
        </div>
      </div>
      <div className='px-2 pt-2'>
        <div className='font-dana-medium'> {props.title} </div>
        <div className='font-dana text-xs line-clamp-3 pt-2 text-justify '>
          {" "}
          {props.desc}{" "}
        </div>
        <div className='flex justify-between mt-2 items-center'>
          <div className='flex font-dana text-sm'>
            <LiaChalkboardTeacherSolid className='text-2xl ml-2' />{" "}
            {props.teacherName} {props.teacherLastName}{" "}
          </div>
          <div className='flex flex-col items-center justify-center'>
            <div className='font-dana text-sm'>امتیاز</div>
            <Rating
              name='read-only'
              className='text-xs'
              value={props.rate}
              readOnly
            />
          </div>
        </div>
        <hr className='w-full mt-2 border-green-500 dark:border-green-500' />
        <div className='flex justify-between mt-2 items-center'>
          <div className='flex font-dana text-sm'>
            <PiStudentLight className='text-2xl ml-2' />{" "}
            {props.studentsNumber.toLocaleString("fa-ir")}
          </div>
          <div className='flex flex-col items-center justify-center'>
            <div className='line-through text-xs font-dana'>
              {" "}
              {props.price.toLocaleString("fa-ir")}{" "}
            </div>
            <div className='text-green-500 dark:text-stone-500 font-dana'>
              {" "}
              {(
                props.price -
                (props.price * props.discount) / 100
              ).toLocaleString("fa-ir")}{" "}
            </div>
          </div>
        </div>
        <div className="flex justify-center ">
          <div className={`bg-green-500 flex justify-center items-center w-9 hover:w-full h-9 rounded-full transition-all ease-in-out duration-200 before:content-["⊻"] hover:before:content-none font-dana-medium hover:after:content-["بیشتر..."] `}>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
