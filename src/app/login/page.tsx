import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <div className='w-full h-dvh flex justify-center items-center flex-col font-moraba'>
        <div className="flex flex-col justify-center items-center">
            <Image src={'/img/logo.webp'} width={90} height={90} alt="لوگوی سایت"/>
            <div className="font-moraba-demiBold mb-4">
                پژوهش سرای دانش آموزی باقرالعلوم     
            </div>
        </div>
      <div className="p-9 border-2">
        <form action='' className="flex flex-col gap-4">
            <div>حساب کاربری ندارید؟  <span className="text-green-600 font-moraba-medium"><Link href={'/signup'}>ثبت نام کنید</Link></span></div>
          <input type='text' placeholder='نام کاربری یا ایمیل ...' className="bg-slate-200 p-2" />
          <input type='password' placeholder='رمز عبور ...' className="bg-slate-200 p-2"/>
          <div>
          <input type='checkbox' name='' id='' className="mx-2" />
          مرا به خاطر بسپار
          </div>
          <button className="rounded-md bg-green-600 p-2 text-xl">ورود</button>
        </form>
      </div>
      <div className="flex flex-col justify-center items-center font-moraba-medium mt-2">
      
        با عضویت در سایت، تمامی قوانین و شرایط استفاده از خدمات 
        <div className="text-green-600 "> پژوهش سرای دانش آموزی باقرالعلوم</div> 
        <div className="text-red-600 ">را پذیرفته اید. </div>
      </div>
    </div>
  );
}
