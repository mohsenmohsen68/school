"use client"
import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { GiReturnArrow } from "react-icons/gi";
import CmsSidebar from "../cmsSidebar/CmsSidebar";
import ContentBox from "./ContentBox/ContentBox";

const SideBarIcon = dynamic(() => import("../sideBarIcon/SideBarIcon"), {
  ssr: false
});
const ToggleIcon = dynamic(() => import("../toggleIcon/toggleIcon"), {
  ssr: false
});
const UserStatusIcon = dynamic(
  () => import("../UserStatusIcon/UserStatusIcon"),
  {
    ssr: false
  }
);

export default function CMS() {



  return (
    <div>
      <div
        id='header'
        className='w-full h-20 bg-slate-200 dark:bg-slate-700 flex justify-between '
      >
        <Image
          width={79}
          height={79}
          src={"/img/logo.webp"}
          alt='school logo'
        />
        <div className='flex flex-col p-1 justify-center items-center ml-4 '>
          <div className='font-moraba'>محسن موحدی نژاد</div>
          <div className=' dark:bg-slate-700  w-full flex justify-center items-center'>
            <div className='rounded-full w-9 h-9 p-1 bg-black dark:bg-sky-500 text-yellow-300'>
              <GiReturnArrow className='text-2xl ' />
            </div>
            <div className='mr-2'>
              <ToggleIcon />
            </div>
          </div>
        </div>
      </div>

      <div className='w-full flex '>
        <div className="w-1/12 bg-red-300 h-[calc(100vh-80px)] flex justify-center py-2 ">
          {/* <CmsSidebar cmsType={"teacher"}  /> */}
          <CmsSidebar cmsType={'admin'} /> 
          {/* <CmsSidebar cmsType={'student'} />  */}
        </div>
        <div className='w-11/12 bg-yellow-300 h-[calc(100vh-80px)]'>
          <ContentBox cmsType={"admin"} />
        </div>
      </div>
    </div>
  );
}
