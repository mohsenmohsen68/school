"use client";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import Swal from "sweetalert2";

export default function RemoveUser() {
  const [showDeleteUserInfo, setShowDeleteUserInfo] = useState<boolean>(false);
  const [userIdentity, setUserIdentity] = useState<string>("");
  const [user, setUser] = useState({
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
    img: "",
    role: ""
  });

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

  const removeHandler = async () => {
    console.log("hi there ...", userIdentity);
    const userToRemove = await fetch(`/api/user?id=${userIdentity}`)
      .then((res) => res.json())
      .then((data) => data);
    if (userToRemove.status === 200) {
      setUser(userToRemove.data);
      console.log("user to remove.", userToRemove.data);
      setShowDeleteUserInfo(true);
    } else {
      Swal.fire({
        toast: true,
        customClass: {
          title: "font-moraba",
          confirmButton: "font-moraba",
          cancelButton: "font-moraba"
        },
        position: "bottom-end",
        title: " کاربری با این مشخصات وجود ندارد ...",
        icon: "error",
        showConfirmButton: true,
        confirmButtonText: "انصراف",
        confirmButtonColor: "green",
        showCancelButton: true,
        cancelButtonText: "تلاش مجدد",
        cancelButtonColor: "red"
      }).then((result) => {
        if (result.isConfirmed === true) {
        }
        if (result.isDismissed === true) {
        }
      });
    }
  };

  const RemoveSelectedUser = async() => {
    const result = await fetch(`/api/user?id=${user.userCode}`,{
        method:"DELETE"
    }).then(res=>res.json())
    .then(data=>data)

    console.log('result',result)
    if(result.status === 200){
        Toast.fire({
            toast: true,
            customClass: {
              title: "font-moraba",
              htmlContainer: "bg-slate-200 dark:bg-slate-700"
            },
            position: "bottom-end",
            title: " کاربر با موفقیت حذف گردید ...",
            icon: "success"
          });
          setShowDeleteUserInfo(false);
          setUserIdentity('')

    }else{
        Swal.fire({
            toast: true,
            customClass: {
              title: "font-moraba",
              confirmButton: "font-moraba",
              cancelButton: "font-moraba"
            },
            position: "bottom-end",
            title: " مشکلی به وجود آمده است، دوباره تلاش کنید ...",
            icon: "error",
            showConfirmButton: true,
            confirmButtonText: "انصراف",
            confirmButtonColor: "green",
            showCancelButton: true,
            cancelButtonText: "تلاش مجدد",
            cancelButtonColor: "red"
          }).then((result) => {
            if (result.isConfirmed === true) {
              
            }
             if(result.isDismissed ){

             }
          });
    }
  };

  return (
    <div className='w-full'>
      {!showDeleteUserInfo && (
        <div className='flex flex-col justify-center items-center gap-y-4-4'>
          <div className='font-dana'>
            <b>نام کاربری</b>، <b>کد ملی</b> یا <b>شماره تلفن</b> کاربری که می
            خواهید حذف کنید را وارد کنید .
          </div>
          <div className='flex mt-7 w-96 bg-slate-200 dark:bg-slate-700 overflow-hidden border border-black dark:border-white  rounded-2xl'>
            <div className='w-11/12  h-9  px-7 '>
              <input
                type='text'
                className='outline-none font-dana w-full h-full bg-slate-200 dark:bg-slate-700'
                name=''
                id=''
                placeholder='جست و جوی کاربر...'
                onChange={(e) => setUserIdentity(e.target.value)}
                value={userIdentity}
              />
            </div>
            <div className='w-1/12 bg-slate-200 dark:bg-slate-700 flex justify-center items-center '>
              <CiSearch className='text-2xl' onClick={() => removeHandler()} />
            </div>
          </div>
        </div>
      )}

      {showDeleteUserInfo && (
        <div className='w-full h-fit font-dana border p-7 flex flex-col justify-center items-center gap-y-2'>
          <div className='w-full flex flex-col gap-y-2 justify-between font-dana'>
            <div>نام : {user.firstName} </div>
            <div>نام خانوادگی : {user.lastName}</div>
          </div>
          <div className='w-full flex flex-col gap-y-2 justify-between font-dana'>
            <div>نام پدر : {user.fathersName}</div>
            <div>نام کاربری : {user.userName}</div>
          </div>
          <div className='w-full flex flex-col gap-y-2 justify-between font-dana'>
            <div>مدرسه : {user.school}</div>
            <div>پایه : {user.grade}</div>
          </div>
          <div className='w-full flex flex-col gap-y-2 justify-between font-dana'>
            <div>سن : {user.age}</div>
            <div>نقش : {user.role}</div>
          </div>
          <div className='w-full flex flex-col gap-y-2 justify-between font-dana'>
            <div>شماره تماس : {user.phoneNumber}</div>
            <div>کد ملی : {user.userCode}</div>
          </div>
          <div className=' flex justify-end font-dana'>
            <button
              className='bg-orange-500 mx-4 p-2'
              onClick={() => RemoveSelectedUser()}
            >
              حذف شود
            </button>
            <button
              className='bg-sky-500 p-2 '
              onClick={() => setShowDeleteUserInfo(false)}
            >
              انصراف
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
