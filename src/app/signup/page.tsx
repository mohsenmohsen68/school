"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Formik } from "formik";

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
  return (
    <div className='w-full h-dvh flex justify-center items-center flex-col font-moraba'>
      <div className='flex flex-col justify-center items-center'>
        <Image src={"/img/logo.webp"} width={90} height={90} alt='لوگوی سایت' />
        <div className='font-moraba-demiBold mb-4'>
          پژوهش سرای دانش آموزی باقرالعلوم
        </div>
      </div>
      <div className='border-2 p-4'>
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
          validate={(values) => {
            const errors: userData = {
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
            };
            //firstname validation
            if (!values.firstName) {
              errors.firstName = "وارد کردن نام الزامی است.";
            } else if (values.firstName.length <= 2) {
              errors.firstName = " فامیلی باید حداقل سه حرف داشته باشد .";
            }
            //lastname validation
            if (!values.lastName) {
              errors.lastName = "وارد کردن نام الزامی است.";
            } else if (values.lastName.length <= 2) {
              errors.lastName = "فامیلی باید حداقل سه حرف داشته باشد .";
            }
            //username validation
            if (!values.userName) {
              errors.userName = "وارد کردن نام کاربری الزامی است.";
            } else if (!/^[A-Za-z][A-Za-z0-9_]{7,29}$/g.test(values.userName)) {
              errors.userName = "نام کاربری نامعتبر است.";
            }
            //usercode validation
            if (!values.userCode) {
              errors.userCode = "وارد کردن کد ملی الزامی است.";
            } else if (values.userCode.length !== 10) {
              errors.userCode = "کد ملی باید ده رقمی باشد.";
            }
            //fathersname validation
            if (!values.fathersName) {
              errors.fathersName = "وارد کردن نام پدر الزامی است.";
            } else if (values.fathersName.length <= 2) {
              errors.fathersName = " نام پدر باید حداقل سه حرف داشته باشد .";
            }
            //school validation
            if (!values.school) {
              errors.school = "وارد کردن نام مدرسه الزامی است.";
            } else if (values.school.length <= 2) {
              errors.school = " نام مدرسه باید حداقل سه حرف داشته باشد .";
            }
            //age validation
            if (!values.age) {
              errors.age = "وارد کردن سن الزامی است.";
            } else if (values.age.length > 2) {
              errors.age = " سن حداکثر دو رقمی است.";
            }
            //grade validation
            if (values.grade === "-1") {
              errors.grade = "انتخاب پایه الزامی است.";
            }
            //phone number validation
            if (!values.phoneNumber) {
              errors.phoneNumber = "وارد کردن شماره همراه الزامی است.";
            } else if (values.phoneNumber.length !== 11) {
              errors.phoneNumber = " شماره همراه یازده رقمی است.";
            }
            //password validation
            if (!values.password) {
              errors.password = "وارد کردن رمز عبور الزامی است.";
            } else if (
              !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/g.test(
                values.password
              )
            ) {
              errors.password = "رمز عبور امن نیست.";
            }

            //password2 validation
            if (values.password2 !== values.password) {
              errors.password2 = "تکرار رمز عبور اشتباه است.";
            }
            return errors;
          }}
          onSubmit={(values, errors) => {
            console.log("values", values);
            console.log("errors", errors);
          }}
        >
          {({
            values,
            handleSubmit,
            handleChange,
            handleBlur,
            isSubmitting,
            errors,
            touched
          }) => (
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
              <div className='flex flex-col '>
                <input
                  type='text'
                  name='firstName'
                  placeholder='نام ...'
                  className={`bg-slate-200 p-2  outline-none `}
                  onChange={handleChange}
                  value={values.firstName}
                  onBlur={handleBlur}
                />
                <div className='text-xs text-red-500'>
                  {errors.firstName && touched.firstName && errors.firstName}
                </div>
              </div>
              <div className='flex flex-col'>
                <input
                  type='text'
                  name='lastName'
                  placeholder='نام خانوادگی  ...'
                  className={`bg-slate-200 p-2 outline-none `}
                  onChange={handleChange}
                  value={values.lastName}
                  onBlur={handleBlur}
                />
                <div className='text-xs text-red-500'>
                  {errors.lastName && touched.lastName && errors.lastName}
                </div>
              </div>

              <div className='flex flex-col'>
                <input
                  type='text'
                  name='userName'
                  placeholder='نام کاربری  ...'
                  className={`bg-slate-200 p-2  outline-none `}
                  onChange={handleChange}
                  value={values.userName}
                  onBlur={handleBlur}
                />
                <div className='text-xs text-red-500'>
                  {errors.userName && touched.userName && errors.userName}
                </div>
              </div>

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

              <div className='flex flex-col'>
                <input
                  type='text'
                  placeholder='کد ملی  ...'
                  name='userCode'
                  className={`bg-slate-200 p-2 outline-none `}
                  onChange={handleChange}
                  value={values.userCode}
                  onBlur={handleBlur}
                />
                <div className='text-xs text-red-500'>
                  {errors.userCode && touched.userCode && errors.userCode}
                </div>
              </div>

              <div className='flex flex-col'>
                <input
                  type='text'
                  name='fathersName'
                  placeholder='نام پدر  ...'
                  className={`bg-slate-200 p-2 outline-none `}
                  onChange={handleChange}
                  value={values.fathersName}
                  onBlur={handleBlur}
                />
                <div className='text-xs text-red-500'>
                  {errors.fathersName &&
                    touched.fathersName &&
                    errors.fathersName}
                </div>
              </div>

              <div className='flex flex-col'>
                <input
                  type='text'
                  name='school'
                  placeholder='نام مدرسه  ...'
                  className={`bg-slate-200 p-2 outline-none `}
                  onChange={handleChange}
                  value={values.school}
                  onBlur={handleBlur}
                />
                <div className='text-xs text-red-500'>
                  {errors.school && touched.school && errors.school}
                </div>
              </div>

              <div className='flex flex-col'>
                <input
                  type='text'
                  name='age'
                  placeholder='سن  ...'
                  className={`bg-slate-200 p-2 outline-none `}
                  onChange={handleChange}
                  value={values.age}
                  onBlur={handleBlur}
                />
                <div className='text-xs text-red-500'>
                  {errors.age && touched.age && errors.age}
                </div>
              </div>

              <div className='flex flex-col'>
                <select
                  name='grade'
                  id='paye'
                  className={`bg-slate-200 p-2 font-moraba  outline-none `}
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
                <div className='text-xs text-red-500'>
                  {errors.grade && touched.grade && errors.grade}
                </div>
              </div>

              <div className='flex flex-col'>
                <input
                  type='text'
                  name='phoneNumber'
                  placeholder='شماره همراه  ...'
                  className={`bg-slate-200 p-2  outline-none `}
                  onChange={handleChange}
                  value={values.phoneNumber}
                  onBlur={handleBlur}
                />
                <div className='text-xs text-red-500'>
                  {errors.phoneNumber &&
                    touched.phoneNumber &&
                    errors.phoneNumber}
                </div>
              </div>

              <div className='flex flex-col'>
                <input
                  type='password'
                  name='password'
                  placeholder='رمز عبور ...'
                  className={`bg-slate-200 p-2  outline-none `}
                  onChange={handleChange}
                  value={values.password}
                  onBlur={handleBlur}
                />
                <div className='text-xs text-red-500'>
                  {errors.password && touched.password && errors.password}
                </div>
              </div>

              <div className='flex flex-col'>
                <input
                  type='password'
                  name='password2'
                  placeholder=' رمز عبور تکرار ...'
                  className={`bg-slate-200 p-2  outline-none `}
                  onChange={handleChange}
                  value={values.password2}
                  onBlur={handleBlur}
                />
                <div className='text-xs text-red-500'>
                  {errors.password2 && touched.password2 && errors.password2}
                </div>
              </div>
              <div>
                <input type='checkbox' name='' id='' className='mx-2' />
                مرا به خاطر بسپار
              </div>
              <button
                type='submit'
                disabled={isSubmitting}
                className='rounded-md bg-green-600 hover:bg-green-400 p-2 text-xl'
              >
                ثبت نام
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
