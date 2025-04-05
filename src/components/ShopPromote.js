"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function ShopPromote({ img1, img2 }) {
  const router = useRouter();
  return (
    <div className='w-11/12 md:flex md:justify-between'>
      <div className="flex flex-col items-end justify-center w-1/2">
        <p className=' text-base lg:text-2xl md:text-xl sm:text-lg font-dana-demiBold mb-4'>
          تضمین کاملترین محتوا،{" "}
          <span className='text-red-600 text-base lg:text-2xl md:text-xl sm:text-lg font-dana-demiBold'>
            اصالت،
          </span>
        </p>
        <p className='text-lg lg:text-base md:text-sm sm:text-xs font-dana mb-4'>
          با انتخاب درست از مسیر لذت ببر
        </p>
        <button
          class='relative inline-flex  items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800'
          onClick={() => router.push("/contactus")}
        >
          <span class='relative font-moraba p-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 sm:text-xs'>
            تماس با ما
          </span>
        </button>
      </div>

    
  <div data-aos="fade-right" className=" perspective-400 w-1/2 h-full flex" >
          <img src={img1} className="transform md:w-7/12 md:h-6/12 w-full h-full rotate-y-45 hover:rotate-y-0  transition-all duration-1000 shadow-lg" alt="promote image" />
        </div>
    </div>
  );
}
