import React from "react";
import { GiConverseShoe } from "react-icons/gi";
import { FaEdgeLegacy } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import Image from "next/image";


function Information() {
    const phoneCode = 21;
    const phoneNumber = 123456789;
    const cellphone = 93305984848;
  return (
    <div className='flex flex-col gap-2 justify-center items-center p-4 shadow-lg mx-4 dark:shadow-md dark:bg-slate-800 dark:shadow-slate-500'>
      <div className='font-dana text-sm'>تماس با ما</div>
      <div className='font-dana text-xl'>اطلاعات تماس</div>
      <div className='flex justify-between items-center w-full'>
        <div className="w-1/5 flex justify-center">
        <Image width={60} height={60} alt="عکس لوگو" src="/img/LOGO.webp" className='text-gray-400 text-2xl' />
        </div>
        <div className='font-dana w-4/5 flex justify-start'>پژوهش سرای دانش آموزی باقرالعلوم</div>
      </div>
      <div className='flex justify-between items-center w-full'>
        <div className="w-1/5 flex justify-center">
        <FaEdgeLegacy className=' text-sky-500 text-2xl' />
        </div>
        <div className='font-dana w-4/5 flex justify-start'>https://pajoohesh_bagher.ir</div>
      </div>
      <div className='flex justify-between items-center w-full'>
        <div className="w-1/5 flex justify-center">
        <FaLocationDot className='text-rose-500 text-2xl' />
        </div>
        <div className='font-dana w-4/5 flex justify-start'> ارومیه - براعتی - خیابان صدا و سیما - کوی 8 - طبقه چهارم هنرستان 23 تیر </div>
      </div>
      <div className='flex justify-between items-center w-full'>
        <div className="w-1/5 flex justify-center">
        <FaPhone className='text-green-500 text-2xl' />
        </div>
        <div className='font-dana w-4/5 flex justify-start'>{phoneCode.toLocaleString("fa-ir", { useGrouping: false })}-{phoneNumber.toLocaleString("fa-ir", { useGrouping: false })}</div>
      </div>
      <div className='flex justify-between items-center w-full'>
        <div className="w-1/5 flex justify-center">
        <MdOutgoingMail className='text-red-500 text-2xl' />
        </div>
        <div className='font-dana w-4/5 flex justify-start'>pajoohesh_bg@gmail.com</div>
      </div>
      <div className='flex justify-between items-center w-full'>
        <div className="w-1/5 flex justify-center">
        <FaTelegramPlane className='text-blue-500 text-2xl' />
        </div>
        <div className='font-dana w-4/5 flex justify-start'>تماس با مدیریت در واتس اپ یا تلگرام : {(cellphone).toLocaleString("fa-ir", { useGrouping: false })}</div>
      </div>
      
      
    </div>
  );
}

export default Information;
