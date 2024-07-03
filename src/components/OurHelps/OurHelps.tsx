import React from "react";
import { IoBookOutline } from "react-icons/io5";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { AiOutlineProject } from "react-icons/ai";
import { SiSkillshare } from "react-icons/si";

export default function OurHelps() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 my-4 p-4'>
      <div className='flex bg-slate-200 dark:bg-slate-700 rounded-md'>
        <div className='w-2/12 flex justify-center items-center'>
          <div className='w-2/3 h-2/3 rounded-full bg-red-200 relative'>
            <div className='absolute top-1/2 -left-5 text-4xl text-red-500 -translate-y-1/2'>
              {" "}
              <IoBookOutline />{" "}
            </div>
          </div>
        </div>
        <div className=' w-10/12 p-4 flex flex-col'>
          <div className='font-dana-medium md:font-dana-demiBold'>تضمین کاملترین محتوا</div>
          <div className='font-dana text-sm md:text-base text-justify'>
            بزار خیالت راحت کنم توی دوره هامون به ریز ترین موارد پرداختیم بعداز
            دیدن این دوره نیاز به هیچ آموزش دیگه ای نداری.
          </div>
        </div>
      </div>
      <div className='flex bg-slate-200 dark:bg-slate-700 rounded-md'>
        <div className='w-2/12 flex justify-center items-center'>
          <div className='w-2/3 h-2/3 rounded-full bg-green-200 relative'>
            <div className='absolute top-1/2 -left-5 text-4xl text-green-500 -translate-y-1/2'>
              {" "}
              <HiOutlineChatBubbleLeftRight />{" "}
            </div>
          </div>
        </div>
        <div className=' w-10/12 p-4 flex flex-col'>
          <div className='font-dana-medium md:font-dana-demiBold'>پشتیبانی دائمی</div>
          <div className='font-dana text-sm md:text-base text-justify'>
            هرجا سوالی داشتی به مشکل خوردی بچه های تیم آمادن که مشکلت رو حل کنن
            تلاشمون اینه بدون نگرانی دوره رو کامل کنی.
          </div>
        </div>
      </div>
      <div className='flex bg-slate-200 dark:bg-slate-700 rounded-md'>
        <div className='w-2/12 flex justify-center items-center'>
          <div className='w-2/3 h-2/3 rounded-full bg-sky-200 relative'>
            <div className='absolute top-1/2 -left-5 text-4xl text-sky-500 -translate-y-1/2'>
              {" "}
              <AiOutlineProject />{" "}
            </div>
          </div>
        </div>
        <div className=' w-10/12 p-4 flex flex-col'>
          <div className='font-dana-medium md:font-dana-demiBold'>
            پروژه محور در راستای بازار کار
          </div>
          <div className='font-dana text-sm md:text-base text-justify'>
            کل تمرکز ما رو این هستش بعداز تموم شدن دوره شخص بتونه با اعتماد به
            نفس کامل پروژه بزنه واقدام کنه برای کسب درآمد.
          </div>
        </div>
      </div>
      <div className='flex bg-slate-200 dark:bg-slate-700 rounded-md'>
        <div className='w-2/12 flex justify-center items-center'>
          <div className='w-2/3 h-2/3 rounded-full bg-yellow-200 relative'>
            <div className='absolute top-1/2 -left-5 text-4xl text-yellow-500 -translate-y-1/2'>
              {" "}
              <SiSkillshare />{" "}
            </div>
          </div>
        </div>
        <div className=' w-10/12 p-4 flex flex-col'>
          <div className='font-dana-medium md:font-dana-demiBold'>سراغ حرفه ای ها رفتیم</div>
          <div className='font-dana text-sm md:text-base text-justify'>
            به جرعت میتونم بگم سخت گیرترین شرایط جذب مدرس داریم چون برامون مهمه
            محتوا خیلی ساده و روان بیان بشه که توی یادگیری به مشکل نخورید.
          </div>
        </div>
      </div>
    </div>
  );
}
