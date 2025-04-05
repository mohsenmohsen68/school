"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";
import { updatePassword, updateUser } from "@/Redux/users/Users";

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

export default function StudentSetting({user}) {
    const router = useRouter();
    const dispatch = useDispatch();
    const [lastUserName, setLastUserName] = useState("");
    const [lastPhoneNumber, setLastPhoneNumber] = useState("");
    const [lastUserCode, setLastUserCode] = useState("");
    const [userName, setUserName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [fathersName, setFathersName] = useState("");
    const [userCode, setUserCode] = useState("");
    const [school, setSchool] = useState("");
    const [grade, setGrade] = useState("");
    const [age, setAge] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [role, setRole] = useState("");
    const [userImg, setUserImg] = useState("");
    const [id, setId] = useState(0);
    const [passVisible, setPassVisible] = useState(false);
    const [passVisible1, setPassVisible1] = useState(false);
    const [passVisible2, setPassVisible2] = useState(false);
    const [lastPass, setLastPass] = useState("");
    const [newPass1, setNewPass1] = useState("");
    const [newPass2, setNewPass2] = useState("");
    const [img, setImg] = useState([])


    useEffect(() => {
        const getUser = async () => {
            const res = await fetch("/api/auth/me")
                .then((res) => res.json())
                .then((data) => data);
            console.log(res);
            setUserName(res.data.userName);
            setFirstName(res.data.firstName);
            setLastName(res.data.lastName);
            setFathersName(res.data.fathersName);
            setUserCode(res.data.userCode);
            setPhoneNumber(res.data.phoneNumber);
            setRole(res.data.role)
            setAge(res.data.age)
            setGrade(res.data.grade)
            setSchool(res.data.school)
            setUserImg(res.data.img)
            setLastUserName(res.data.userName);
            setLastPhoneNumber(res.data.phoneNumber);
            setLastUserCode(res.data.userCode);
            setId(res.data._id);
        };
        getUser();
    }, []);


    const uploadIMG = async () => {
        const formData = new FormData()
        console.log("image", img)
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
            body: JSON.stringify({ userID : id, img: `http://localhost:3000/uploads/usersImage/${body.data}` }),
          })
          console.log("imgUpload res ..", res)
          Toast.fire({
            toast: true,
            customClass: {
              title: "font-moraba",
              htmlContainer: "bg-slate-200 dark:bg-slate-700"
            },
            position: "bottom-end",
            title: "عکس کاربر با موفقین بارگزاری شد ...",
            icon: "success"
          });
        } else {
            Toast.fire({
                toast: true,
                customClass: {
                  title: "font-moraba",
                  htmlContainer: "bg-slate-200 dark:bg-slate-700"
                },
                position: "bottom-end",
                title: "مشکلی در سمت سرور رخ داده است ...",
                icon: "error"
              });
        }
    }

    const changeInfoHandler = async () => {
        const body = {
            userName,
            firstName,
            lastName,
            fathersName,
            age,
            grade,
            school,
            phoneNumber,
            userCode,
        };
        const res = await dispatch(updateUser(body));
        console.log("res : ", res);
        if (res.payload.status === 200) {
            Toast.fire({
                toast: true,
                customClass: {
                  title: "font-moraba",
                  htmlContainer: "bg-slate-200 dark:bg-slate-700"
                },
                position: "bottom-end",
                title: "اطلاعات با موفقیت بروز گردید ...",
                icon: "success"
              });
        } else if (res.payload.status === 409) {
            Toast.fire({
                toast: true,
                customClass: {
                  title: "font-moraba",
                  htmlContainer: "bg-slate-200 dark:bg-slate-700"
                },
                position: "bottom-end",
                title: "کاربری با این مشخصات قبلا ثبت نام نکرده است ...",
                icon: "error"
              });
        } else {
            Toast.fire({
                toast: true,
                customClass: {
                  title: "font-moraba",
                  htmlContainer: "bg-slate-200 dark:bg-slate-700"
                },
                position: "bottom-end",
                title: "مشکلی در سمت سرور رخ داده است ...",
                icon: "error"
              });
            router.refresh();
        }
    };

    const changePasswordHandler = async () => {
        console.log(lastPass, newPass1, newPass2, id)
        if (newPass1 !== newPass2) {
            return Toast.fire({
                toast: true,
                customClass: {
                  title: "font-moraba",
                  htmlContainer: "bg-slate-200 dark:bg-slate-700"
                },
                position: "bottom-end",
                title: "رمز جدید و تکرار رمز جدید مشابه هم نیستند ...",
                icon: "error"
              });
        }
        const body = { lastPass, newPass1, newPass2, id }
        const res = await dispatch(updatePassword(body))
        console.log("res :::", res)
        if (res.payload.status === 200) {
          setLastPass('')
          setNewPass1('')
          setNewPass2('')
          Toast.fire({
            toast: true,
            customClass: {
              title: "font-moraba",
              htmlContainer: "bg-slate-200 dark:bg-slate-700"
            },
            position: "bottom-end",
            title: "رمز عبور شما با موفقیت تغییر کرد ...",
            icon: "success"
          });
        } else {
            Toast.fire({
                toast: true,
                customClass: {
                  title: "font-moraba",
                  htmlContainer: "bg-slate-200 dark:bg-slate-700"
                },
                position: "bottom-end",
                title: "رمز وارد شده اشتباه است ...",
                icon: "error"
              });
        }
    }

    return (
        <div className="font-moraba">
            <div className='flex flex-col gap-2 p-4 w-full'>
                <h1>تغییر مشخصات</h1>
                <div className='flex justify-evenly w-full'>
                    <input
                        type='text'
                        className='border p-1'
                        placeholder='نام کاربری'
                        value={userName}
                        disabled
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <input
                        type='text'
                        className='border p-1'
                        placeholder='نام '
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <input
                        type='text'
                        className='border p-1'
                        placeholder='نام خانوادگی'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <div className='flex justify-evenly w-full'>
                    <input
                        type='text'
                        className='border p-1'
                        placeholder='شماره تلفن همراه'
                        value={phoneNumber}
                        disabled
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                    <input
                        type='text'
                        className='border p-1'
                        placeholder='کد ملی'
                        value={userCode}
                        disabled
                        onChange={(e) => setUserCode(e.target.value)}
                    />
                    <input
                        type='text'
                        className='border p-1'
                        placeholder='نام پدر'
                        value={fathersName}
                        onChange={(e) => setFathersName(e.target.value)}
                    />
                </div>
                <div className='flex justify-evenly w-full'>
                    <input
                        type='text'
                        className='border p-1'
                        placeholder='مدرسه'
                        value={school}
                        onChange={(e) => setSchool(e.target.value)}
                    />
                    <input
                        type='text'
                        className='border p-1'
                        placeholder='پایه'
                        value={grade}
                        onChange={(e) => setGrade(e.target.value)}
                    />
                    <input
                        type='text'
                        className='border p-1'
                        placeholder='سن'
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    />
                </div>

                <div className='flex justify-start'>
                    <button
                        className='border py-2 px-2 shadow-md bg-green-500 hover:bg-green-400'
                        onClick={() => {
                            changeInfoHandler();
                        }}
                    >
                        تغییر مشخصات
                    </button>
                </div>
            </div>
            <hr />
            <div className='flex flex-col gap-2 p-4 w-full'>
                <h1>تغییر رمز عبور</h1>
                <div className='flex border justify-start w-fit items-center px-2 dark:bg-slate-800 dark:text-white'>
                    <input
                        type={passVisible ? "text" : "password"}
                        className='border-none focus:outline-none focus:ring-0 p-1'
                        placeholder='رمز عبور قبلی'
                        value={lastPass}
                        onChange={(e) => setLastPass(e.target.value)}
                    />
                    {!passVisible && (
                        <FaRegEye
                            className='text-xl'
                            onClick={() => setPassVisible(true)}
                        />
                    )}
                    {passVisible && (
                        <FaRegEyeSlash
                            className='text-xl'
                            onClick={() => setPassVisible(false)}
                        />
                    )}
                </div>
                <div className='flex md:flex-col gap-2'>
                    <div className='flex border justify-start w-fit items-center px-2 dark:bg-slate-800 dark:text-white'>
                        <input
                            type={passVisible1 ? "text" : "password"}
                            className='border-none focus:outline-none focus:ring-0 p-1'
                            placeholder='رمز عبور جدید'
                            value={newPass1}
                            onChange={(e) => setNewPass1(e.target.value)}
                        />
                        {!passVisible1 && (
                            <FaRegEye
                                className='text-xl'
                                onClick={() => setPassVisible1(true)}
                            />
                        )}
                        {passVisible1 && (
                            <FaRegEyeSlash
                                className='text-xl'
                                onClick={() => setPassVisible1(false)}
                            />
                        )}
                    </div>
                    <div className='flex border justify-start w-fit items-center px-2 dark:text-white dark:bg-slate-800'>
                        <input
                            type={passVisible2 ? "text" : "password"}
                            className='border-none focus:outline-none focus:ring-0 p-1'
                            placeholder='تکرار رمز عبور جدید'
                            value={newPass2}
                            onChange={(e) => setNewPass2(e.target.value)}
                        />
                        {!passVisible2 && (
                            <FaRegEye
                                className='text-xl'
                                onClick={() => setPassVisible2(true)}
                            />
                        )}
                        {passVisible2 && (
                            <FaRegEyeSlash
                                className='text-xl'
                                onClick={() => setPassVisible2(false)}
                            />
                        )}
                    </div>
                </div>
                <div className='flex justify-start'>
                    <button className='border py-2 px-2 shadow-md bg-green-500 hover:bg-green-400' onClick={() => changePasswordHandler()}>
                        تغییر رمز عبور
                    </button>
                </div>
            </div>
            
            <hr />

            <div className='flex flex-col px-4 w-full'>
                <h1>تغییر عکس پروفایل</h1>
                <div className='flex justify-center items-center w-full mb-2'>
                    <label
                        htmlFor='myfile'
                        className='p-2 border-dashed border-green-700 border-2 bg-green-500 hover:bg-green-400 hover:text-white mx-4'
                    >
                        انتخاب عکس{" "}
                    </label>
                    <input
                        type='file'
                        name='profileImg'
                        id='myfile'
                        accept='image/png, image/jpeg'
                        className='hidden'
                        onChange={(e) => setImg(e.target.files[0])}
                    />
                    <button className="p-2 bg-green-500 hover:bg-green-400 hover:text-white rounded-md" onClick={uploadIMG}>ثبت عکس پروفایل</button>
                </div>
            </div>
            <hr />
        </div>
    );
}

