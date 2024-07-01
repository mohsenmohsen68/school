'use client'
import React from "react";
import Image from "next/image";

export default function Learning() {
  return (
    <div className='flex w-full h-fit gap-4 mt-2 transition-all'>
      <div className='flex flex-col w-2/3 p-4'>
        <div className='font-dana-demiBold '>
          در دنیای برنامه نویسی و نرم افزار، مهارت همیشه بر مدرک و مدرک گرایی
          اولویت داشته است. ما در تیم سون لرن با اساتیدی که تخصص و تجربه بالا در
          شرکت ‌های بزرگ دارند، این مهارت و تجربه‌های ارزشمند آن‌ها را در
          سرفصل‌های آموزشی خود قرار داده ایم و به شما منتقل می‌کنیم.
        </div>
        <div className='font-dana justify-center p-4 leading-7'>
          حتی دانشجویانی که سال‌ها در دانشگاه‌های مطرح کشور در رشته‌های تخصصی
          علوم کامپیوتر درس خوانده اند و مدرک گرفته اند، آماده ورود به بازار کار
          نیستند. دوره‌های سون لرن با هدف پر کردن گپ بین دانشگاه و صنعت طراحی
          شده اند و حاوی محتوای کاملا منطبق بر نیاز بازار کار هستند. و مهمتر
          اینکه این تجربه‌ها را از مدرسینی دریافت می‌کنید که در بهترین شرکت ‌های
          فناوری ایران مانند دیجی کالا، اسنپ، فیلیمو و آپارات، علی بابا، جاباما
          و سون لرن فعالیت دارند. در جلسات مصاحبه کاری، همه آنچه نیاز دارید
          مهارت مورد نیاز بازار کار و پرزنت درست خودتان است. با ما در این مسیر
          لذت بخش و البته نه کوتاه مدت همراه باشید تا آماده ورود به بازار کار
          شوید.
        </div>
      </div>
      <div className='w-1/3 p-4 relative flex justify-center items-center '>
        <Image
          src={"/img/Skill.png"}
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
