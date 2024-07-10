"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Formik } from "formik";
import { useFormik } from "formik";

interface userData {
  firstName: string;
  lastName: string;
  userName: string;
  userCode: string;
  fathersName: string;
  school: string;
  age: string;
  grade: string;
  password: string;
  password2: string;
  img: string;
  phoneNumber: string;
}

export default function Page() {
  // const form = useFormik({
  //   validate : ()=>{},

  //   initialValues:{
  // firstName:'',
  // lastName:'',
  // userName:'',
  // userCode:'',
  // fathersName:'',
  // school:'',
  // age:'',
  // grade:'',
  // phoneNumber:'',
  // password:'',
  // password2:'',
  // img:''
  //   },

  //   onSubmit : ()=>{
  //     console.log('done')
  //   },
  // })
  return (
    <div className='w-full h-dvh flex justify-center items-center flex-col font-moraba'>
      <div className='flex flex-col justify-center items-center'>
        <Image src={"/img/logo.webp"} width={90} height={90} alt='لوگوی سایت' />
        <div className='font-moraba-demiBold mb-4'>
          پژوهش سرای دانش آموزی باقرالعلوم
        </div>
      </div>
      <div className="border-2 p-4">

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          userName: "",
          userCode: "",
          fathersName: "",
          school: "",
          age: "",
          grade: "",
          phoneNumber: "",
          password: "",
          password2: "",
          img: ""
        }}
        onSubmit={(values) => {
          console.log("values", values);
        }}
      >
        {({values, handleSubmit, handleChange, handleBlur}) => (
          <form
            action=''
            onSubmit={handleSubmit}
            className='grid grid-cols-1 xs:grid-cols-2 gap-2 text-slate-800'
          >
            <div className='col-start-1 col-span-2 flex justify-center'>
              ثبت نام کرده اید؟{" "}
              <span className='text-green-600 font-moraba-medium'>
                <Link href={"/login"}>وارد شوید ...</Link>
              </span>
            </div>

            <input
              type='text'
              name='firstName'
              placeholder='نام ...'
              className='bg-slate-200 p-2'
              onChange={handleChange}
              value={values.firstName}
              onBlur={handleBlur}
            />
            <input
              type='text'
              name='lastName'
              placeholder='نام خانوادگی  ...'
              className='bg-slate-200 p-2'
              onChange={handleChange}
              value={values.lastName}
              onBlur={handleBlur}
            />
            <input
              type='text'
              name='userName'
              placeholder='نام کاربری  ...'
              className='bg-slate-200 p-2'
              onChange={handleChange}
              value={values.userName}
              onBlur={handleBlur}
            />
            <div className='flex justify-center items-center'>
              <label
                htmlFor='file'
                className='bg-sky-500 border-sky-700 text-white p-2 rounded-lg cursor-pointer hover:bg-sky-300 transition-all delay-75 shadow-xl font-dana text-sm'
              >
                بارگذاری تصویر
              </label>
              <input
                type='file'
                name='img'
                id='file'
                placeholder='انتخاب عکس  ...'
                className='bg-slate-200 p-2'
                accept='image/*'
                hidden
                onChange={handleChange}
              value={values.img}
              onBlur={handleBlur}
              />
            </div>

            <input
              type='text'
              placeholder='کد ملی  ...'
              name='userCode'
              className='bg-slate-200 p-2'
              onChange={handleChange}
              value={values.userCode}
              onBlur={handleBlur}
            />
            <input
              type='text'
              name='fathersName'
              placeholder='نام پدر  ...'
              className='bg-slate-200 p-2'
              onChange={handleChange}
              value={values.fathersName}
              onBlur={handleBlur}
            />
            <input
              type='text'
              name='school'
              placeholder='نام مدرسه  ...'
              className='bg-slate-200 p-2'
              onChange={handleChange}
              value={values.school}
              onBlur={handleBlur}
            />
            <input
              type='text'
              name='age'
              placeholder='سن  ...'
              className='bg-slate-200 p-2'
              onChange={handleChange}
              value={values.age}
              onBlur={handleBlur}
            />

            <select
              name='grade'
              id='paye'
              className='bg-slate-200 p-2 child:font-moraba font-moraba'
              onChange={handleChange}
              value={values.grade}
              onBlur={handleBlur}
            >
              <option value='-1'>کلاس چندمی ؟</option>
              <option value='1'>اول</option>
              <option value='2'>دوم</option>
              <option value='3'>سوم</option>
              <option value='4'>چهارم</option>
              <option value='5'>پنجم</option>
              <option value='6'>ششم</option>
              <option value='7'>هفتم</option>
              <option value='8'>هشتم</option>
              <option value='9'>نهم</option>
              <option value='10'>دهم</option>
              <option value='11'>یازدهم</option>
              <option value='12'>دوازدهم</option>
            </select>
            <input
              type='text'
              name='phoneNumber'
              placeholder='شماره همراه  ...'
              className='bg-slate-200 p-2'
              onChange={handleChange}
              value={values.phoneNumber}
              onBlur={handleBlur}
            />
            <input
              type='password'
              name='password'
              placeholder='رمز عبور ...'
              className='bg-slate-200 p-2'
              onChange={handleChange}
              value={values.password}
              onBlur={handleBlur}
            />
            <input
              type='password'
              name='password2'
              placeholder=' رمز عبور تکرار ...'
              className='bg-slate-200 p-2'
              onChange={handleChange}
              value={values.password2}
              onBlur={handleBlur}
            />
            <div>
              <input type='checkbox' name='' id='' className='mx-2' />
              مرا به خاطر بسپار
            </div>
            <button
              className='rounded-md bg-green-600 hover:bg-green-400 p-2 text-xl'
            >
              ورود
            </button>
          </form>
        )}
      </Formik>

      </div>
      <div className='flex flex-col justify-center items-center font-moraba-medium mt-2'>
        با عضویت در سایت، تمامی قوانین و شرایط استفاده از خدمات
        <div className='text-green-600 '> پژوهش سرای دانش آموزی باقرالعلوم</div>
        <div className='text-red-600 '>را پذیرفته اید. </div>
      </div>
    </div>
  );
}
