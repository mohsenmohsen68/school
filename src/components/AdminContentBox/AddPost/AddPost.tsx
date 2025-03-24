"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { createANewPost } from "@/Redux/posts/Posts";
const { uuid } = require("uuidv4");
import Swal from "sweetalert2";
import Image from "next/image";
import { selectOption } from "@/Redux/CMS/CMSRoutes";

const ArticleEditor = dynamic(
  () => import("./../../../components/ArticleEditor/ArticleEditor"),
  { ssr: false }
);

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

export default function AddPost() {
  const dispatch = useDispatch();
  const [postData, setPostData] = useState("");
  const [uploaded, setUploaded] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedFile, setSelectedFile] = useState<File>();
  const [fileName, setFileName] = useState("");
  const [showImage, setShowImage] = useState(false);
  const [img, setImg] = useState([]);

  const handleAddPost = (data: string) => {
    setPostData(data);
  };

  useEffect(() => {
    setUploaded(true);
  }, [uploaded]);

  const uploadIMG = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    console.log("img", img);
    formData.append("img", img);
    const res = await fetch("/api/post/myimages", {
      method: "PUT",
      body: formData
    });
    const body = await res.json();
    console.log("res :........ ", res, "body.....", body);
    if (res.status === 200) {
      const res = await fetch("/api/post/myimages/uploadimgapi", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          postID: uuid(),
          img: `http://localhost:3000/uploads/postsImage/${body.data}`
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
      setSelectedImage(`http://localhost:3000/uploads/postsImage/${body.data}`);
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

  return (
    <div className='p-7'>
      <Formik
        initialValues={{
          title: ""
        }}
        validate={(values) => {
          const errors = {
            title: ""
          };
          //firstname validation
          if (!values.title) {
            errors.title = "وارد کردن عنوان پست الزامی است.";
          } else if (values.title.length <= 2) {
            errors.title = " عنوان پست باید حداقل سه حرف داشته باشد .";
          }
          //lastname validation

          //role validation

          if (errors.title === "") {
            return {};
          } else {
            return errors;
          }
        }}
        onSubmit={async (values, { setSubmitting }) => {
         
            console.log("mmmmm", postData);
            const author = "mohsen";
            const d = new Date();
            let year = d.getFullYear();
            let month = d.getMonth();
            let day = d.getDay();
            const pdate = new Date(year, month, day);
            const publishedDate = new Intl.DateTimeFormat("fa-IR").format(
              pdate
            );
            const postID = uuid();
            const body = {
              postID,
              title: values.title,
              author,
              publishedDate,
              img: img ? `/uploads/postsImage/${fileName} ` : "",
              postBody: postData
            };
            console.log(body);
            const result = await dispatch(createANewPost(body));
            console.log("object", result.payload.status);
            if (result.payload.status === 201) {
              Toast.fire({
                toast: true,
                customClass: {
                  title: "font-moraba",
                  htmlContainer: "bg-slate-200 dark:bg-slate-700"
                },
                position: "bottom-end",
                title: " پست با موفقیت ثبت گردید ...",
                icon: "success"
              });
              dispatch(selectOption(""));
            } else {
              Toast.fire({
                toast: true,
                customClass: {
                  title: "font-moraba"
                },
                position: "bottom-end",
                title: " مشکلی در سمت سرور رخ داده است ...",
                icon: "error"
              });
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
          <form onSubmit={handleSubmit} className='text-slate-800'>
            <div className='flex flex-col mt-2 '>
              <input
                type='text'
                name='title'
                placeholder='عنوان پست ...'
                className={`bg-slate-200 p-2  outline-none `}
                onChange={handleChange}
                value={values.title}
                onBlur={handleBlur}
              />
              <div className='text-xs text-red-500'>
                {errors.title && touched.title && errors.title}
              </div>
            </div>

            <div className='flex justify-center items-center mt-2 '>
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
                onClick={(e) => uploadIMG(e)}
              >
                ثبت
              </button>
            </div>

            <div className='w-full'>
              <ArticleEditor
                onHandleAddArticle={handleAddPost}
                imgPath={"/api/post/image"}
                initData={"<p>  من ویرایشگر پست های شما هستم ... </p>"}
              />
            </div>

            <div className='w-full'>
              <button
                type='submit'
                disabled={isSubmitting}
                className='rounded-md bg-green-600 hover:bg-green-400 p-2 mt-2 text-xl font-moraba w-full '
              >
                ثبت پست
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}
