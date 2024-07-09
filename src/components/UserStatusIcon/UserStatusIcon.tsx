'use client'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { HiOutlineUser } from "react-icons/hi";

export default function UserStatusIcon() {
    const router = useRouter();
    const [showUserIcon, setShowUserIcon] = useState<boolean>(false)
  return (
    <div>
      <HiOutlineUser className='text-3xl' onClick={()=>setShowUserIcon(!showUserIcon)} />
      
      {showUserIcon && (
        <div className='flex flex-col font-dana absolute w-28 h-20 items-center justify-evenly z-50 top-20 rounded-lg overflow-hidden bg-slate-200 dark:bg-slate-700 left-24'>
            <div className=' hover:bg-green-400 hover:text-white w-full h-1/2 flex justify-center items-center' onClick={()=>router.push('/login')}>
                <div>ورود</div>
            </div>

            <div className=' hover:bg-green-400 hover:text-white w-full h-1/2 flex justify-center items-center' onClick={()=>router.push('/signup')}>
                <div>ثبت نام</div>
            </div>
        </div>
      )}

    </div>
  )
}
