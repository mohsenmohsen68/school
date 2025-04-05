"use client";
import React, { useState } from "react";
import CreateComment from "./CreateComment";
import Image from "next/image";
import ShopPromote from "@/components/ShopPromote";

function Explanation({ course, children, userID }) {
  const [explain, setExplain] = useState(true);
  const [moreInfo, setMoreInfo] = useState(false);
  const [comments, setComments] = useState(false);

  return (
    <div className="w-full h-full">
      <div className='flex justify-center gap-2 my-5 '>
        <button
          className={`${
            explain
              ? "bg-gray-700 dark:bg-white dark:text-black text-white"
              : "bg-white"
          } font-dana border dark:bg-slate-800 border-gray-700 hover:bg-gray-700 hover:text-white rounded-full p-2`}
          onClick={() => {
            setExplain(true);
            setComments(false);
            setMoreInfo(false);
          }}
        >
          توضیحات
        </button>
        <button
          className={`${
            moreInfo
              ? "bg-gray-700 dark:bg-white dark:text-black  text-white"
              : "bg-white"
          } font-dana border dark:bg-slate-800 border-gray-700 hover:bg-gray-700 hover:text-white rounded-full p-2`}
          onClick={() => {
            setExplain(false);
            setComments(false);
            setMoreInfo(true);
          }}
        >
          اطلاعات بیشتر
        </button>
        <button
          className={`${
            comments
              ? "bg-gray-700 dark:bg-white dark:text-black text-white"
              : "bg-white"
          } font-dana border dark:bg-slate-800 border-gray-700 hover:bg-gray-700 hover:text-white rounded-full p-2`}
          onClick={() => {
            setExplain(false);
            setComments(true);
            setMoreInfo(false);
          }}
        >
          نظرات کاربران
        </button>
      </div>

      {explain && (
        <div >
          <div className="flex flex-col  ">
          <div className="h-1/4 ">
            <div className='font-dana text-2xl'>درباره محصول</div>
            <p className='font-dana leading-10'>
              {course.description}
            </p>
          </div>
          <div className="h-3/4">
          <ShopPromote img1={course.img} />
          </div>
          </div>
        </div>
      )}
      {moreInfo && (
        <div className='flex flex-col font-dana'>
          <hr className='w-full my-2' />
          <div className='flex justify-between p-4 w-full'>
            <div>تعداد دانش آموز </div>
            <div>{course.studentNo}</div>
          </div>
          <hr className='w-full my-2' />
          <div className='flex justify-between p-4 w-full'>
            <div>تعداد جلسات</div>
            <div className='flex'>{course.sessionNo}</div>
          </div>
          <hr className='w-full my-2' />
          <div className='flex justify-between p-4 w-full'>
            <div>پیش نیازهای دوره</div>
            <div>{course.preRequisite}</div>
          </div>
          <hr className='w-full my-2' />
          <div className='flex justify-between p-4 w-full'>
            <div>قیمت </div>
            <div>{course.price}</div>
          </div>
          <hr className='w-full my-2' />
          <div className='flex justify-between p-4 w-full'>
            <div>خوشه علمی مربوطه</div>
            <div>{course.cluster}</div>
          </div>
          <hr className='w-full my-2' />
        </div>
      )}
      {comments && (
        <div className=' mt-9 md:flex md:gap-9'>
          {/* server component */}
          {children}
          {/* client component */}
          <CreateComment
            courseID={JSON.parse(JSON.stringify(course._id))}
            userID={userID ? JSON.parse(JSON.stringify(userID)) : ""}
          />
        </div>
      )}
    </div>
  );
}

export default Explanation;
