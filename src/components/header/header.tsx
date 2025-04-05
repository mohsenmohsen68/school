import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";
import LogoutIcon from "@/components/LogoutIcon/LogoutIcon"
import ScrollIndicator from "../scrollIndicator/ScrollIndicator";
import ShoppingBasketIcon from "@/components/ShoppingBasketIcon"

const ToggleIcon = dynamic(() => import("../toggleIcon/toggleIcon"), {
  ssr: false
});
const UserStatusIcon = dynamic(() => import("../UserStatusIcon/UserStatusIcon"), {
  ssr: false
});

export default function header({user}) {
  
  
  console.log("user : ", user)
  return (
    <div className="flex flex-col w-full ">

    <div className='w-full justify-self-center   dark:bg-slate-600 bg-slate-200 flex columns-2 md:columns-3 h-20 justify-between items-center '>
      <div className=' dark:bg-slate-700 bg-slate-200 hidden md:flex md:w-[10%] justify-center items-center h-full'>
        <Image src='/img/logo.webp' width={90} height={90} alt='logo img' />
      </div>
      <div className='  dark:bg-slate-700 bg-slate-200 w-[80%] md:w-[70%] text-xs md:text-sm  flex justify-center items-center h-full'>
        <ul className='flex h-full gap-7 border-b-0 font-dana child-hover:border-b-4 transition-all child-hover:border-b-violet-700 dark:child-hover:border-b-white child:flex child:items-center'>
          <Link href={"/"}>
            <li> پژوهش سرا </li>
          </Link>
          <Link href={"/courses"}>
            <li>دوره ها</li>
          </Link>
          <Link href={"/articles"}>
            <li>مقالات</li>
          </Link>
          <Link href={"/contactus"}>
            <li>تماس با ما</li>
          </Link>
          <Link href={"/aboutus"}>
            <li>درباره ما</li>
          </Link>
          <Link href={"/clusters"}>
            <li>خوشه های آموزشی</li>
          </Link>
        </ul>
      </div>
      <div className='relative dark:bg-slate-700 bg-slate-200 w-[20%] md:w-[20%] flex justify-center items-center h-full'>
        <div className='rounded-full w-9 h-9 dark:bg-sky-500 bg-white overflow-hidden mr-4 flex justify-center items-center'>
          {user ? <LogoutIcon user={JSON.parse(JSON.stringify(user))}/> :<UserStatusIcon/>}
        </div>
        <div className="mr-4">
          <ToggleIcon />
        </div>
        <div className="mr-4">
          <ShoppingBasketIcon />
        </div>
       
      </div>
    </div>

    <ScrollIndicator/>
    
    </div>
    // </div>
  );
}
