'use client'
import React from "react";
import Image from "next/image";

export default function Community() {
  return (
    <div className='flex w-full h-fit gap-4 mt-2'>
      <div className="flex flex-col w-2/3 p-4">
        <div className='font-dana-demiBold '>
          یک جامعه فعال از منتورها و دانشجویان برای پاسخگویی به سوالات شما آماده
          هستند
        </div>
        <div className="font-dana justify-center p-4 leading-7">
          اگر در جلسات آموزشی سوالی داشته باشید، می‌توانید سوال خود را در همان
          جلسه ثبت نمایید. سوال شما در جامعه مربوط به دوره ثبت می‌شود و منتور‌ها
          و دانشجویان هم دوره ای، پاسخگوی سوالات شما خواهند بود. جامعه برنامه
          نویسان سون لرن نه تنها فضایی است برای پشتیبانی و پاسخگویی به سوالات
          شما، بلکه به زودی از پر از تجربه‌های ارزشمند برترین برنامه نویسان
          ایرانی در شرکت‌های مطرح خواهد شد.
        </div>
      </div>
      <div className="w-1/3 p-4 relative flex justify-center items-center ">
        <Image src={"/img/learning.png"} width={0} height={0} sizes="100vw" className="w-2/3 h-full z-10" alt="learning Image"/>
        <div className=" bg-sky-300 absolute z-0  w-3/5 h-full -skew-x-3 -skew-y-3 top-0 right-7"></div>
      </div>
    </div>
  );
}
