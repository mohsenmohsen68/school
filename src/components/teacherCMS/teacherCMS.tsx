import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { FaUsers } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";
import { FaRegCommentDots } from "react-icons/fa6";
import { GrArticle } from "react-icons/gr";
import { BsFileEarmarkPost } from "react-icons/bs";
import { FaChalkboardTeacher } from "react-icons/fa";
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

export default function TeacherCMS() {
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
        <div className="flex flex-col p-1 justify-center items-center ml-4 ">
          <div className="font-moraba">محسن موحدی نژاد</div>
          <div className=' dark:bg-slate-700  w-full flex justify-center items-center'>
            <div className="rounded-full w-9 h-9 p-1 bg-black dark:bg-sky-500 text-yellow-300"><GiReturnArrow className="text-2xl "/></div>
            <div className='mr-2'>
              <ToggleIcon />
            </div>
          </div>
        </div>
      </div>

      <div
        id='sidebar'
        className='h-dvh w-20 bg-slate-200 dark:bg-slate-700 flex flex-col overflow-hidden justify-start items-center child:text-3xl child:my-2'
      >
        <SideBarIcon title='users' icon={<FaUsers/>} />
        <SideBarIcon title='articles' icon={<GrArticle/>} />
        <SideBarIcon title='comments' icon={<FaRegCommentDots/>} />
        <SideBarIcon title='posts' icon={<BsFileEarmarkPost/>} />
        <SideBarIcon title='courses' icon={<FaChalkboardTeacher/>} />
        
      </div>
    </div>
  );
}
