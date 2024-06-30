
import React from "react";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";
import Image from "next/image";
import dynamic from "next/dynamic";
const Map = dynamic(() => import("../Map"), {
    loading: () => <p>loading...</p>,
    ssr: false
})


export default function Footer() {
  return (
    <div className=' dark:bg-slate-900 bg-slate-200 w-full h-fit'>
      <div className='w-full h-full p-3 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-4 child:dark:text-white'>
        <div className=' p-4 '>
          <div className='font-dana-demiBold mb-4'>درباره ما</div>
          <div className='font-dana'>
            پژوهش سرای دانش آموزی باقرالعلوم یک آکادمی دولتی آموزش مهارت های
            تحصیلی و فناورانه هست که با هدف تحویل نیروی متخصص و خلاق فعالیت می
            کند.
          </div>
        </div>
        <div className=' p-4'>
          <div className='font-dana-demiBold mb-4'>دسترسی سریع</div>
          <div className='font-dana'>
            <ul className='flex flex-col font-dana'>
              <li>
                <Link href={"./rules"}>قوانین و مقررات</Link>
              </li>
              <li>
                <Link href={"./"}>ارسال تیکت</Link>
              </li>
              <li>
                <Link href={"./courses"}> همه دوره ها</Link>
              </li>
              <li>
                <Link href={"./clusters"}>آشنایی با خوشه های علمی</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className=' p-4 '>
          <div className='font-dana-demiBold mb-4'>تماس با ما</div>
          <div className='font-dana'>
            <div className='flex gap-3 mb-2'>
              <div>
                <FaInstagram className='text-red-600 text-2xl' />
              </div>
              <div> p-urmia@</div>
            </div>
            <div className='flex gap-3 mb-2'>
              <div>
                <FaTelegram className='text-blue-600 text-2xl' />
              </div>
              <div> p-urmia@</div>
            </div>
            <div className='flex gap-3 mb-2'>
              <div>
                <Image
                  src={"/img/eitaa.svg"}
                  width={24}
                  height={24}
                  alt='eita logo'
                />
              </div>
              <div> p-urmia@</div>
            </div>
            <div className='flex gap-3 mb-2'>
              <div>
                <Image
                  src={"/img/shad.svg"}
                  className='rounded-md'
                  width={24}
                  height={24}
                  alt='eita logo'
                />
              </div>
              <div> p-urmia@</div>
            </div>
          </div>
        </div>
        <div className=' p-4 overflow-hidden'>
          <div className='font-dana-demiBold mb-4 '>آدرس ما</div>
          <div className='font-dana h-full'>
            <Map/>
          </div>
        </div>
      </div>
    </div>
  );
}
