"use client"
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { loginUser } from "@/Redux/users/Users";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

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

export default function Page() {
const [identifier,settIdentifier] = useState('');
const [password,setPassword] = useState('');
const dispatch = useDispatch()
const router = useRouter()

const loginHandler = async (event)=>{
event.preventDefault();
const body = {identifier, password}
const res =await dispatch(loginUser(body))
console.log('login response : ', res.payload.status)
if(res.payload.status === 422){
  Toast.fire({
    toast: true,
    customClass: {
      title: "font-moraba"
    },
    position: "bottom-end",
    title: " نام کاربری یا شماره همراه را به همراه رمز عبور وارد نمایید ...",
    icon: "error"
  });
}else if(res.payload.status===404){
  Toast.fire({
    toast: true,
    customClass: {
      title: "font-moraba"
    },
    position: "bottom-end",
    title: " نام کاربری یا رمز عبور اشتباه است ...",
    icon: "error"
  });
}else if(res.payload.status === 200){
  Toast.fire({
    toast: true,
    customClass: {
      title: "font-moraba"
    },
    position: "bottom-end",
    title: " با موفقیت وارد شدید ...",
    icon: "success"
  });
  router.push("/cms");
}
}

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
          <input type='text' placeholder='نام کاربری یا ایمیل ...' className="bg-slate-200 p-2" onChange={event=>settIdentifier(event.target.value)} />
          <input type='password' placeholder='رمز عبور ...' onChange={event=>setPassword(event.target.value)} className="bg-slate-200 p-2"/>
          <div>
          <input type='checkbox' name='' id='' className="mx-2" />
          مرا به خاطر بسپار
          </div>
          <button className="rounded-md bg-green-600 p-2 text-xl" onClick={loginHandler}>ورود</button>
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
