'use client'
import React from "react";
import Image from "next/image";

export default function GuideToJob() {
  return (
    <div className='flex w-full h-fit gap-4 mt-2'>
      <div className='flex flex-col w-2/3 p-4'>
        <div className='font-dana-demiBold '>
        آماده سازی دانش آموزان برای ورود به بازار کار
        </div>
        <div className='font-dana justify-center p-4 leading-7'>
           هرساله شرکت‌های معتبری از سراسر ایران اقدام به جذب نیرو در حوزه
          تکنولوژی می‌کنند و بسیاری از این مجموعه‌ها از سون‌لرن درخواست معرفی
          نیروی متخصص دارند. در این شرایط سون‌لرن خود را موظف می‌داند تا افراد
          برتر هر دوره را اعتبارسنجی کرده و به شرکت‌های متقاضی جهت استخدام معرفی
          کند. سایر دانشجویان نیز درصورت بهره‌مندی کامل از محتوای دوره و تکمیل
          مهارت‌های خود به‌راحتی قادر به اشتغال و فعالیت در زمینه موردنظر خود
          خواهند بود.
        </div>
      </div>
      <div className='w-1/3 p-4 relative flex justify-center items-center '>
        <Image
          src={"/img/GuideToJob.png"}
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
