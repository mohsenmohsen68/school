import React from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { VscCommentDiscussion } from "react-icons/vsc";

export default function Comment() {
  return (
    <div className='w-full h-fit pt-4 bg-slate-200 dark:bg-slate-700 my-4 p-4'>
      <div className='flex gap-3 my-1'>
        <VscCommentDiscussion className='text-4xl text-red-500 ' />
        <div className='font-dana-demiBold'>نظرات</div>
      </div>
      <div className='flex gap-3 my-1'>
        <div>
          <FaRegCircleUser className='text-4xl text-sky-500 ' />
        </div>
        <div className='font-dana-demiBold flex flex-col'>
          <div className='font-dana-medium'>نام کاربری</div>
          <div className='font-dana text-xs'>ثبت نظر جدید </div>
        </div>
      </div>

      <div className='flex flex-col gap-2 w-full lg:w-2/3'>
        <div>
          <input
            type='text'
            placeholder='موضوع نظر'
            className='font-dana p-2 text-sm w-full outline-none'
          />
        </div>

        <div>
          <textarea
            name=''
            id=''
            cols={30}
            rows={10}
            placeholder='نظر خود را وارد کنید ...'
            className='font-dana text-sm p-2 w-full outline-none '
          />
        </div>

        <div className='flex self-end w-40 font-dana text-sm '>
          <button className='ml-2 bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded'>
            {" "}
            انصراف
          </button>
          <button className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'>
            {" "}
            ثبت
          </button>
        </div>
      </div>
    </div>
  );
}
