import React from "react";
import Image from "next/image";
import { GiReturnArrow } from "react-icons/gi";
import CmsSidebar from "../cmsSidebar/CmsSidebar";
import ContentBox from "./ContentBox/ContentBox";
import Link from "next/link";
import ToggleIcon from "../toggleIcon/toggleIcon";
import userModel from "@/models/users";

export default async function CMS({user}) {

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
          <div className='font-moraba'>{`${user.firstName} ${user.lastName}`}</div>
          <div className=' dark:bg-slate-700  w-full flex justify-center items-center'>
            <div className='rounded-full w-9 h-9 p-1 bg-black dark:bg-sky-500 text-yellow-300'>
              <Link href={'/'}>
              <GiReturnArrow className='text-2xl ' />
              </Link>
            </div>
            <div className='mr-2'>
              <ToggleIcon />
            </div>
          </div>
        </div>
      </div>

      <div className='w-full flex p-1'>
        <div className="w-1/12  h-[calc(100vh-94px)] ">
          {/* <CmsSidebar cmsType={"teacher"}  /> */}
          <CmsSidebar cmsType={'admin'} /> 
          {/* <CmsSidebar cmsType={'student'} />  */}
        </div>
        <div className='w-11/12  h-[calc(100vh-94px)] '>
          <ContentBox cmsType={"admin"} user={JSON.parse(JSON.stringify(user))} />
        </div>
      </div>
    </div>
  );
}
