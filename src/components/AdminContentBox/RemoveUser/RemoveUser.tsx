import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

export default function RemoveUser() {
    const removeHandler =()=>{
        console.log("hi there ...")
    }
  const [user, setUser] = useState<string>("");
  return (
    <div className='flex flex-col justify-center items-center gap-y-4-4'>
      <div className='font-dana'>
        <b>نام کاربری</b>، <b>کد ملی</b> یا <b>شماره تلفن</b> کاربری که می
        خواهید حذف کنید را وارد کنید .
      </div>
      <div className='flex mt-7 w-96 bg-slate-200 dark:bg-slate-700 overflow-hidden border border-black dark:border-white  rounded-2xl'>
        <div className="w-11/12  h-9  px-7 ">
          <input
            type='text'
            className="outline-none font-dana w-full h-full bg-slate-200 dark:bg-slate-700"
            name=''
            id=''
            placeholder='جست و جوی کاربر...'
            onChange={(e) => setUser(e.target.value)}
            value={user}
          />
        </div>
        <div className="w-1/12 bg-slate-200 dark:bg-slate-700 flex justify-center items-center ">
          <CiSearch className="text-2xl" onClick={()=>removeHandler()}/>
        </div>
      </div>
    </div>
  );
}
