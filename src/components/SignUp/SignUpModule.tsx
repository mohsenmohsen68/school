"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/Redux/Store";
import { createANewUser, signUpUser } from "@/Redux/users/Users";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import style from "./signup.module.css";
import { getClustersFromServer } from "@/Redux/clusters/Clusters";

export interface userData {
  firstName: string;
  lastName: string;
  userCode: string;
  school: string;
  fathersName: string;
  grade: string;
  age: string;
  userName: string;
  password: string;
  password2: string;
  phoneNumber: string;
  img: string;
  role: string;
  cluster: string;
}
type Prop = {
  addedByAdmin: boolean;
};

const Toast = Swal.mixin({
  toast: true,
  position: "bottom-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  }
});
export default function SignUpModule(props: Prop): JSX.Element {
  const routes = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const [showImage, setShowImage] = useState(false)
  const [img, setImg] = useState([])
  const [selectedImage, setSelectedImage] = useState("")
  const [fileName, setFileName] = useState("")
  const [clusters, setClusters] = useState([])

  const uploadIMG = async(e, userCode)=>{
    e.preventDefault()
    const formData = new FormData()
    console.log("img",img)
      formData.append("img", img)
      const res = await fetch('/api/user/myimages', {
        method: 'PUT',
        body: formData,
      })
      const body = await res.json()
      console.log("res :........ ", res, "body.....", body)
      if (res.status === 200) {
        const res = await fetch('/api/user/myimages/uploadimgapi', {
          method: 'PUT',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({userCode , img: `http://localhost:3000/uploads/usersImage/${body.data}`}),
        })
        console.log("imgUpload res ..", res)
        Toast.fire({
          icon: "success",
          customClass: {
            title: "font-moraba"
          },
          title: "عکس بارگذاری شد ..."
        });
        setSelectedImage(`http://localhost:3000/uploads/usersImage/${body.data}`)
        setShowImage(true)
        setFileName(body.data);
      } else {
        Toast.fire({
          icon: "error",
          customClass: {
            title: "font-moraba"
          },
          title: "مشکلی رخ داده است ..."
        });
      }
  }
   const getClusters = async()=>{
      const res = await dispatch(getClustersFromServer())
      console.log("res",res.payload.data)
      setClusters(res.payload.data)
   }
  useEffect(()=>{
     getClusters()
  },[])

  return (
    <div className='w-full h-full flex justify-center items-center flex-col font-moraba'>
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
            img: "",
            role: "",
            cluster:""
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
              img: "",
              role: "",
              cluster:""
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
            if (values.grade == "") {
              errors.grade = "انتخاب پایه الزامی است.";
            }
            //role validation
            if (props.addedByAdmin && values.role === "") {
              errors.role = "انتخاب نقش الزامی است.";
            }
            if (props.addedByAdmin && values.role === "معلم" && (values.cluster === "" || values.cluster === "-1")) {
              errors.cluster = "انتخاب خوشه الزامی است.";
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
            if (
              errors.firstName === "" &&
              errors.lastName === "" &&
              errors.userName === "" &&
              errors.userCode === "" &&
              errors.fathersName === "" &&
              errors.school === "" &&
              errors.age === "" &&
              errors.grade === "" &&
              errors.role === "" &&
              errors.cluster === "" &&
              errors.phoneNumber === "" &&
              errors.password === "" &&
              errors.password2 === "" &&
              errors.img === ""
            ) {
              return {};
            } else {
              return errors;
            }
          }}
          onSubmit={async (values, { setSubmitting }) => {
            const userBody = {
              firstName: values.firstName,
              lastName: values.lastName,
              userCode: values.userCode,
              school: values.school,
              fathersName: values.fathersName,
              grade: values.grade,
              age: values.age,
              userName: values.userName,
              password: values.password,
              phoneNumber: values.phoneNumber,
              img: img ? `/uploads/usersImage/${fileName} ` : '',
              role: values.role ? values.role : 'دانش آموز' ,
              cluster: values.cluster ? values.cluster : '' ,
            };
            // console.log(userBody);
            let result;
            if(props.addedByAdmin){
              result = await dispatch(createANewUser(userBody)).unwrap();
            }else{
              result = await dispatch(signUpUser(userBody)).unwrap();
            }
            console.log("resultttt : ", result);
            if (result.status === 200) {
              if (props.addedByAdmin) {
                Toast.fire({
                  toast: true,
                  customClass: {
                    title: "font-moraba",
                    htmlContainer: "bg-slate-200 dark:bg-slate-700"
                  },
                  position: "bottom-end",
                  title: " کاربر با موفقیت ثبت نام گردید ...",
                  icon: "success"
                });
                values.firstName = ""
                values.lastName = ""
                values.userCode = ""
                values.school = ""
                values.fathersName = ""
                values.grade = ''
                values.age = ""
                values.userName = ""
                values.password = ""
                values.password2 = ""
                values.phoneNumber = ""
                values.role = ""
                values.cluster = ""
              } else {
                Swal.fire({
                  toast: true,
                  customClass: {
                    title: "font-moraba",
                    htmlContainer: "bg-slate-200 dark:bg-slate-700",
                    actions: style.action,
                    confirmButton: "font-moraba",
                    cancelButton: "font-moraba"
                  },
                  position: "bottom-end",
                  title: " شما با موفقیت ثبت نام کردید ...",
                  icon: "success",
                  showConfirmButton: true,
                  confirmButtonText: "ورود",
                  confirmButtonColor: "green"
                }).then((result) => {
                  if (result.isConfirmed === true) {
                    routes.push("/login");
                  }
                });
              }
            } else if (result.status === 409) {
              if (props.addedByAdmin) {
                Toast.fire({
                  toast: true,
                  customClass: {
                    title: "font-moraba"
                  },
                  position: "bottom-end",
                  title: " کاربری با این مشخصات قبلا ثبت نام کرده است ...",
                  icon: "error"
                });
              } else {
                Swal.fire({
                  toast: true,
                  customClass: {
                    title: "font-moraba",
                    confirmButton: "font-moraba",
                    cancelButton: "font-moraba"
                  },
                  position: "bottom-end",
                  title: " کاربری با این مشخصات قبلا ثبت نام کرده است ...",
                  icon: "error",
                  showConfirmButton: true,
                  confirmButtonText: "ورود",
                  confirmButtonColor: "green",
                  showCancelButton: true,
                  cancelButtonText: "تلاش مجدد",
                  cancelButtonColor: "red"
                }).then((result) => {
                  if (result.isConfirmed === true) {
                    routes.push("/login");
                  }
                  // if(result.isDismissed )
                });
              }
            }
          }}
        >
          {({
            values,
            errors,
            touched,
            handleSubmit,
            handleChange,
            handleBlur,
            isSubmitting
          }) => (
            <form
              onSubmit={handleSubmit}
              className='grid grid-cols-1 xs:grid-cols-2 gap-2 text-slate-800'
            >
              <div className='col-start-1 col-span-2 flex justify-center'>
                {!props.addedByAdmin && (
                  <div>
                    ثبت نام کرده اید؟{" "}
                    <span className='text-green-600 font-moraba-medium'>
                      <Link href={"/login"}>وارد شوید ...</Link>
                    </span>
                  </div>
                )}
                {props.addedByAdmin && (
                  <div>
                    ثبت نام کاربر جدید ...
                    <div className="mb-2">
                      <select
                        name='role'
                        id='role'
                        className={`bg-slate-200 p-2 font-moraba  outline-none `}
                        onChange={handleChange}
                        value={values.role}
                        onBlur={handleBlur}
                      >
                        <option value='-1'>نقش کاربر؟</option>
                        <option value='مدیر'>مدیر</option>
                        <option value='معلم'>معلم</option>
                        <option value='دانش آموز'>دانش آموز</option>
                      </select>
                      
                      <div className='text-xs text-red-500'>
                        {errors.role && touched.role && errors.role}
                      </div>
                    </div>

                    
                     { values.role === "معلم" ? (<>
                      <select
                        name='cluster'
                        id='cluster'
                        className={`bg-slate-200 p-2 font-moraba  outline-none `}
                        onChange={handleChange}
                        value={values.cluster}
                        onBlur={handleBlur}
                      >
                        <option value='-1'>خوشه معلم؟</option>
                        {clusters.map(item=><option key={item._id} value={item.title}>{item.title}</option>)}
                      </select>
                      <div className='text-xs text-red-500'>
                        {errors.cluster && touched.cluster && errors.cluster}
                      </div>
                      </>): (<></>)} 
                      
                  </div>
                )}
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
                {/* handle img upload */}
                <label
                  htmlFor='file'
                  className='bg-sky-500 border-sky-700 text-white p-2 rounded-lg cursor-pointer hover:bg-sky-300 transition-all delay-75 shadow-xl font-dana text-sm'
                >
                  انتخاب عکس
                </label>
                <input
                  type='file'
                  name='img'
                  id='file'
                  className='bg-slate-200 p-2'
                  accept='image/*'
                  hidden
                  onChange={(e) => setImg(e.target.files[0])}
                />
                {showImage && (
                  <Image src={selectedImage} width={40} height={40} alt='عکس' />
                )}
                <button
                  className='p-2 bg-green-500 hover:bg-green-400 rounded-md hover:text-white'
                  onClick={(e) => uploadIMG(e,values.userCode)}
                >
                  ثبت
                </button>
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
    </div>
  );
}
