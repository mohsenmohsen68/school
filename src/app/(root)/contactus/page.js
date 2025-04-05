import Map from "@/components/Map";
import BreadCrumb from "@/components/BreadCrumb";
import ContactusForm from "@/components/ContactusForm";
import Information from "@/components/Information";
import React from "react";
import {getMe} from "@/utils/getMe"

async function page() {
  const user = await getMe()
  return (
    <div className='mt-2 mb-4 w-full'>
      <div className='mb-4'>
        <BreadCrumb titles={"تماس با ما "} />
      </div>
      <div className=' md:flex w-full items-center gap-4 p-4 '>
        <div className='w-full md:w-full mb-28 md:mb-4 h-96 bg-red-500 relative flex justify-center'>
          <Map long={37.53007} lat={45.08591}/>
          <div className='font-dana w-3/4 h-1/2 absolute dark:shadow-md dark:bg-slate-800 dark:shadow-slate-500 top-[calc(70%)] gap-2 bg-white shadow-lg flex flex-col justify-center items-center'>
            <div className='text-2xl'>آدرس پژوهش‌سرا </div>
            <div className='text-lg p-2'>
              براعتی - خیابان صدا وسیما - کوی هشتم - طبقه چهارم هنرستان 23 تیر
            </div>
          </div>
        </div>
        <div className='w-full md:w-full h-96 mb-28 md:mb-4 bg-red-500 relative flex justify-center'>
          <Map long={37.531549} lat={45.053289}/>
          <div className=' font-dana w-3/4 h-1/2 absolute dark:shadow-md dark:bg-slate-800 dark:shadow-slate-500 top-[calc(70%)] gap-2 bg-white shadow-lg flex flex-col justify-center items-center'>
            <div className='text-2xl'>آدرس ناحیه یک </div>
            <div className='text-lg p-2'>
              خیابان دانشکده - ابتدای خیابان منصور افشار - ناحیه یک آموزش و پروش ارومیه
            </div>
          </div>
        </div>
      </div>
      <div className=' md:flex w-full items-center mt-24'>
        <div className='w-full md:w-full md:mb-5'>
          <Information />
        </div>
        <div className='w-full md:w-full'>
          <ContactusForm userID={user ? JSON.parse(JSON.stringify(user?._id)) : null} />
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default page;
