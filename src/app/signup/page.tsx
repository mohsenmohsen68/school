import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function page() {
  return (
    <div className='w-full h-dvh flex justify-center items-center flex-col font-moraba'>
        <div className="flex flex-col justify-center items-center">
            <Image src={'/img/logo.webp'} width={90} height={90} alt="لوگوی سایت"/>
            <div className="font-moraba-demiBold mb-4">
                پژوهش سرای دانش آموزی باقرالعلوم     
            </div>
        </div>
      <div className="p-4 border-2 ">
        <form action='' className="grid grid-cols-1 xs:grid-cols-2 gap-4 text-slate-800">
        <div className='col-start-1 col-span-2 flex justify-center'>ثبت نام کرده اید؟  <span className="text-green-600 font-moraba-medium"><Link href={'/login'}>وارد شوید ...</Link></span></div>
       
          <input type='text' placeholder='نام ...' className="bg-slate-200 p-2" />
          <input type='text' placeholder='نام خانوادگی  ...' className="bg-slate-200 p-2" />
          <input type='text' placeholder='کد ملی  ...' className="bg-slate-200 p-2" />
          <input type='text' placeholder='نام پدر  ...' className="bg-slate-200 p-2" />
          <input type='text' placeholder='نام مدرسه  ...' className="bg-slate-200 p-2" />
          <input type='text' placeholder='سن  ...' className="bg-slate-200 p-2" />
          {/* <label htmlFor="paye">کلاس چندمی ؟  </label> */}
          <select name="paye" id="paye" className="bg-slate-200 p-2" >
             <option value="-1">کلاس چندمی ؟</option>
             <option value="1" >اول</option>
             <option value="2" >دوم</option>
             <option value="3">سوم</option>
             <option value="4">چهارم</option>
             <option value="5">پنجم</option>
             <option value="6">ششم</option>
             <option value="7">هفتم</option>
             <option value="8">هشتم</option>
             <option value="9">نهم</option>
             <option value="10">دهم</option>
             <option value="11">یازدهم</option>
             <option value="12">دوازدهم</option>
       
          </select>
          <input type='text' placeholder='شماره همراه  ...' className="bg-slate-200 p-2" />
          <input type='password' placeholder='رمز عبور ...' className="bg-slate-200 p-2"/>
          <input type='password' placeholder=' رمز عبور تکرار ...' className="bg-slate-200 p-2"/>
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

  )
}
