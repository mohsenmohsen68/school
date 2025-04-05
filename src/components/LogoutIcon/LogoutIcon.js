'use client'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { HiUserCircle } from "react-icons/hi2";
import { RxDashboard } from "react-icons/rx";
import { RiLogoutCircleLine } from "react-icons/ri";
import Swal from 'sweetalert2';
import Image from 'next/image';

export default function LogoutIcon({ user }) {

  const logoutHandler = () => {
    Swal.fire({
      showCancelButton: true,
      buttonsStyling: false,
      icon: "warning",
      customClass: {
        popup:
          "!relative !transform !overflow-hidden !rounded-lg !bg-white !text-left !shadow-xl !transition-all sm:!my-8 sm:!w-full sm:!max-w-lg !p-0 !grid-cols-none",
        icon: "!m-0 !mx-auto !flex !h-12 !w-12 !flex-shrink-0 !items-center !justify-center !rounded-full !border-0 !bg-red-100 sm:!h-10 sm:!w-10 !mt-5 sm!mt-6 sm:!ml-6 !col-start-1 !col-end-3 sm:!col-end-2",
        title:
          "!p-0 !pt-3 !text-center sm:!text-left !text-base !font-semibold !leading-6 !text-gray-900 !pl-4 !pr-4 sm:!pr-6 sm:!pl-0 sm:!pt-6 sm:!ml-4 !col-start-1 sm:!col-start-2 !col-end-3",
        htmlContainer:
          "!mt-2 sm:!mt-0 !m-0 !text-center sm:!text-left !text-sm !text-gray-500 !pl-4 sm:!pl-0 !pr-4 !pb-4 sm:!pr-6 sm:!pb-4 sm:!ml-4 !col-start-1 sm:!col-start-2 !col-end-3",
        actions:
          "!bg-gray-50 !px-4 !py-3 sm:!flex sm:!flex-row-reverse sm:!px-6 !w-full !justify-start !mt-0 !col-start-1 !col-end-3",
        confirmButton:
          "inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto",
        cancelButton:
          "mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
      },
      title: "خروج از حساب کاربری",
      text: "مطمعن هستید؟",
      confirmButtonText: "خروج",
      cancelButtonText: "انصراف"
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await fetch("/api/auth/signout", {
          method: "POST"
        });
        if (res.status === 200) {
          Swal.fire({
            buttonsStyling: false,
            icon: "success",
            customClass: {
              popup:
                "!relative !transform !overflow-hidden !rounded-lg !bg-white !text-left !shadow-xl !transition-all sm:!my-8 sm:!w-full sm:!max-w-lg !p-0 !grid-cols-none",
              icon: "!m-0 !mx-auto !flex !h-12 !w-12 !flex-shrink-0 !items-center !justify-center !rounded-full !border-0 !bg-red-100 sm:!h-10 sm:!w-10 !mt-5 sm!mt-6 sm:!ml-6 !col-start-1 !col-end-3 sm:!col-end-2",
              title:
                "!p-0 !pt-3 !text-center sm:!text-left !text-base !font-semibold !leading-6 !text-gray-900 !pl-4 !pr-4 sm:!pr-6 sm:!pl-0 sm:!pt-6 sm:!ml-4 !col-start-1 sm:!col-start-2 !col-end-3",
              htmlContainer:
                "!mt-2 sm:!mt-0 !m-0 !text-center sm:!text-left !text-sm !text-gray-500 !pl-4 sm:!pl-0 !pr-4 !pb-4 sm:!pr-6 sm:!pb-4 sm:!ml-4 !col-start-1 sm:!col-start-2 !col-end-3",
              actions:
                "!bg-gray-50 !px-4 !py-3 sm:!flex sm:!flex-row-reverse sm:!px-6 !w-full !justify-start !mt-0 !col-start-1 !col-end-3",
              confirmButton:
                "inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto",
              cancelButton:
                "mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
            },
            title: "با موفقیت خارج شدید...",
            timer: 2000,
          });
          location.replace('/')
        }
      } else {
      }
    });
  };

  const router = useRouter();
  const [showUserIcon, setShowUserIcon] = useState(false)
  return (
    <div>
      {/* <HiUserCircle className='text-5xl' onClick={() => setShowUserIcon(!showUserIcon)} /> */}
      <div className='flex w-28 h-20 overflow-hidden items-center justify-evenly rounded-full' onClick={() => setShowUserIcon(!showUserIcon)}>
        <Image width={50} height={50} alt="userImage" src={user.img} />

      </div>
      {showUserIcon && (
        <div className='flex flex-col  font-dana absolute w-28 h-20 overflow-hidden items-center justify-evenly z-50 top-20 rounded-lg bg-slate-200 dark:bg-slate-700 left-24'>
          <div className=' hover:bg-green-400 hover:text-white w-full h-1/2 flex justify-center items-center hover:cursor-pointer' onClick={() => router.push('/cms')}>
            <div className='flex justify-between w-full items-center px-3'>
              <div><RxDashboard className='text-3xl ' /></div>
              <div>داشبورد</div>
            </div>
          </div>

          <div className=' hover:bg-green-400 hover:text-white w-full h-1/2 flex justify-center items-center hover:cursor-pointer' onClick={() => logoutHandler()}>
            <div className='flex justify-between w-full items-center px-3'>
              <div><RiLogoutCircleLine className='text-3xl ' /></div>
              <div>خروج</div>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}

