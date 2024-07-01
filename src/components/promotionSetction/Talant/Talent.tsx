'use client'
import React from "react";
import Image from "next/image";

export default function Talent() {
  return (
    <div className='flex w-full h-fit gap-4 mt-2'>
      <div className='flex flex-col w-2/3 p-4'>
        <div className='font-dana-demiBold '>
          تلاش برای کشف بهترین استعداد دانش آموزان
        </div>
        <div className='font-dana justify-center p-4 leading-7'>
          فعالیت‌های دانشجویان در طول مشاهده دوره شامل مشاهده منظم جلسات، پاسخ
          صحیح به سوالات آزمون‌ها و فعالیت ویژه و مستمر آن‌ها در جامعه برنامه
          نویسی، برای آن‌ها امتیازاتی در بر خواهد داشت و تیم سون لرن دانشجویان
          ممتاز را با توجه به امتیازاتشان رده بندی و برای معرفی به بازار کار
          معرفی می‌کند. در انتهای دوره نیز آزمون‌های جامع چند مرحله ای تدارک
          دیده شده است که ارزیابی مهارتی دانشجو را انجام می‌دهد. در صورت قبولی
          دانشجو در آزمون‌های ذکر شده در انتهای دوره، مدرک سطح بندی شده آنلاین
          سون لرن به ایشان اهدا می‌شود.
        </div>
      </div>
      <div className='w-1/3 p-4 relative flex justify-center items-center '>
        <Image
          src={"/img/Talent.png"}
          width={0}
          height={0}
          sizes='100vw'
          className='w-2/3 h-full z-10'
          alt='learning Image'
        />
        <div className=' bg-sky-300 absolute z-0  w-3/5 h-full -skew-x-3 -skew-y-3 top-0 right-7'></div>
      </div>
    </div>
  );
}
