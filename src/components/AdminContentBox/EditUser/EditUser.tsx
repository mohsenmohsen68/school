"use client"
import { Formik } from "formik";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import Swal from "sweetalert2";
import { userData } from "@/components/SignUp/SignUpModule";
import { useDispatch } from "react-redux";
import { updateUser } from "@/Redux/users/Users";
import { AppDispatch } from "@/Redux/Store";
import Image from "next/image";

export default function EditUser() {
  const dispatch = useDispatch<AppDispatch>();
  const [showEditUserInfo, setShowEditUserInfo] = useState<boolean>(false);
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
  const [showImage, setShowImage] = useState(false);
  const [img, setImg] = useState([]);
  const [selectedImage, setSelectedImage] = useState("");
  const [fileName, setFileName] = useState("");

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

  const uploadIMG = async (e, userCode) => {
    e.preventDefault();
    const formData = new FormData();
    console.log("img", img);
    formData.append("img", img);
    const res = await fetch("/api/user/myimages", {
      method: "PUT",
      body: formData
    });
    const body = await res.json();
    console.log("res :........ ", res, "body.....", body);
    if (res.status === 200) {
      const res = await fetch("/api/user/myimages/uploadimgapi", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          userCode,
          img: `http://localhost:3000/uploads/usersImage/${body.data}`
        })
      });
      console.log("imgUpload res ..", res);
      Toast.fire({
        icon: "success",
        customClass: {
          title: "font-moraba"
        },
        title: "عکس بارگذاری شد ..."
      });
      setSelectedImage(`http://localhost:3000/uploads/usersImage/${body.data}`);
      setShowImage(true);
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
  };

  const EditHandler = async () => {
    const userToEdit = await fetch(`/api/user?id=${userIdentity}`)
      .then((res) => res.json())
      .then((data) => data);
    if (userToEdit.status === 200) {
      setUser(userToEdit.data);
      console.log("user to user to edit.", userToEdit.data);
      setShowEditUserInfo(true);
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
        confirmButtonText: "تلاش مجدد",
        confirmButtonColor: "green"
      }).then((result) => {
        if (result.isConfirmed === true) {
          setUserIdentity("");
        }
      });
    }
  };

  return (
    <div className='w-full'>
      {!showEditUserInfo && (
        <div className='flex flex-col justify-center items-center gap-y-4-4'>
          <div className='font-dana'>
            <b>نام کاربری</b>، <b>کد ملی</b> یا <b>شماره تلفن</b> کاربری که می
            خواهید ویرایش کنید را وارد کنید .
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
              <CiSearch className='text-2xl' onClick={() => EditHandler()} />
            </div>
          </div>
        </div>
      )}

      {showEditUserInfo && (
        <div className='w-full h-fit font-dana flex flex-col justify-center items-center gap-y-2'>
          <div className='w-full h-full flex justify-center items-center flex-col font-moraba'>
            <div className='border-2 p-4'>
              <Formik
                initialValues={{
                  firstName: user.firstName,
                  lastName: user.lastName,
                  userName: user.userName,
                  userCode: user.userCode,
                  fathersName: user.fathersName,
                  school: user.school,
                  age: user.age,
                  grade: user.grade,
                  phoneNumber: user.phoneNumber,
                  img: user.img,
                  role: user.role
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
                    role: ""
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
                  } else if (
                    !/^[A-Za-z][A-Za-z0-9_]{7,29}$/g.test(values.userName)
                  ) {
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
                    errors.fathersName =
                      " نام پدر باید حداقل سه حرف داشته باشد .";
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
                  if (values.role == "") {
                    errors.role = "انتخاب نقش الزامی است.";
                  }
                  //phone number validation
                  if (!values.phoneNumber) {
                    errors.phoneNumber = "وارد کردن شماره همراه الزامی است.";
                  } else if (values.phoneNumber.length !== 11) {
                    errors.phoneNumber = " شماره همراه یازده رقمی است.";
                  }
                  //password validation

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
                    errors.phoneNumber === "" &&
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
                    phoneNumber: values.phoneNumber,
                    img: img ? `/uploads/usersImage/${fileName} ` : '',
                    role: values.role
                  };

                  const result = await dispatch(updateUser(userBody));
                  console.log("resultttt : ", result.payload);
                  if (result.payload.status === 200) {
                    Toast.fire({
                      toast: true,
                      customClass: {
                        title: "font-moraba",
                        htmlContainer: "bg-slate-200 dark:bg-slate-700"
                      },
                      position: "bottom-end",
                      title: " کاربر با موفقیت ویرایش شد ...",
                      icon: "success"
                    });
                    setShowEditUserInfo(false);
                    setUserIdentity("");
                  } else if (result.payload.status === 409) {
                    Toast.fire({
                      toast: true,
                      customClass: {
                        title: "font-moraba"
                      },
                      position: "bottom-end",
                      title: result.payload.message,
                      icon: "error"
                    });
                    setShowEditUserInfo(false);
                    setUserIdentity("");
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
                      <div>
                        ویرایش کاربر ...
                        <div>
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
                      </div>
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
                        {errors.firstName &&
                          touched.firstName &&
                          errors.firstName}
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
                        <Image src={selectedImage} width={40} height={40} alt='عکس'/>
                      )}
                      <button
                        className='p-2 bg-green-500 hover:bg-green-400 rounded-md hover:text-white'
                        onClick={(e) => uploadIMG(e, values.userCode)}
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
                        disabled
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

                    <button
                      type='submit'
                      disabled={isSubmitting}
                      className='rounded-md bg-green-600 hover:bg-green-400 p-2 text-xl'
                    >
                      ویرایش
                    </button>

                    <button
                      className='rounded-md bg-orange-600 hover:bg-orange-400 p-2 text-xl '
                      onClick={() => setShowEditUserInfo(false)}
                    >
                      انصراف
                    </button>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
