import React from "react";
import SignUpModule from "@/components/SignUp/SignUpModule";
import Image from "next/image";

export default function Page() {
  return (
    <div className='w-full h-dvh flex justify-center items-center flex-col font-moraba'>
      <div className='flex flex-col justify-center items-center'>
        <Image src={"/img/logo.webp"} width={90} height={90} alt='لوگوی سایت' />
        <div className='font-moraba-demiBold mb-4'>
          پژوهش سرای دانش آموزی باقرالعلوم
        </div>
      </div>

      <SignUpModule addedByAdmin={false}/>

      <div className='flex flex-col justify-center items-center font-moraba-medium mt-2'>
        با عضویت در سایت، تمامی قوانین و شرایط استفاده از خدمات
        <div className='text-green-600 '> پژوهش سرای دانش آموزی باقرالعلوم</div>
        <div className='text-red-600 '>را پذیرفته اید. </div>
      </div>
    </div>
  );
}
