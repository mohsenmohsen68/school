"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { createANewPost, updatePost } from "@/Redux/posts/Posts";
import { selectOption } from "@/Redux/CMS/CMSRoutes";
import Swal from "sweetalert2";
import Image from "next/image";
const { uuid } = require("uuidv4");

const ArticleEditor = dynamic(
  () => import("./../../components/ArticleEditor/ArticleEditor"),
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

export default function UpdatePostEditor({ rowData, onUpdate }): JSX.Element {
  const dispatch = useDispatch();
  const [postData, setPostData] = useState("");
  const [selectedImage, setSelectedImage] = useState(rowData.img);
  const [selectedFile, setSelectedFile] = useState();
  const [fileName, setFileName] = useState(rowData.img.split("/")[3]);

  const handleAddPost = (data: string) => {
    setPostData(data);
  };

  const handleImageUploadButton = async (selectedF: File) => {
    // setUploading(true);

    try {
      console.log("fff", selectedF);
      let data = new FormData();
      data.append("image", selectedF);
      fetch("http://localhost:3004/api/post/titleImage", {
        method: "POST",
        body: data
      })
        .then((res) => res.json())
        .then((d) => {
          setFileName(d.filename);
          console.log("ggg", d.filename);
          console.log("ggg2", selectedImage);
          console.log("ggg4", selectedFile);
          console.log("gggff", d);
        });
    } catch (err) {
      console.log("errrr", err);
    }
    // setUploading(false);
  };

  return (
    <div className='p-7'>
      <Formik
        initialValues={{
          title: rowData.title,
          img: rowData.img
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
          const publishedDate = new Intl.DateTimeFormat("fa-IR").format(pdate);
          const body = {
            postID: rowData.postID,
            title: values.title,
            author,
            publishedDate,
            img: `/img/postsTitleImage/${fileName} `,
            postBody: postData
          };
          console.log(" ----  bodddddddddy ---", body);
          const result = await dispatch(updatePost(body));
          console.log("result of adding article :", result.payload);
          if (result.payload.status === 200) {
            Toast.fire({
              toast: true,
              customClass: {
                title: "font-moraba",
                htmlContainer: "bg-slate-200 dark:bg-slate-700"
              },
              position: "bottom-end",
              title: " پست با موفقیت بروز گردید ...",
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

            <div className='flex justify-center items-center mt-2'>
              <label>
                <input
                  type='file'
                  hidden
                  onChange={({ target }) => {
                    if (target.files) {
                      const file = target.files[0];
                      setSelectedImage(URL.createObjectURL(file));
                      setSelectedFile(file);
                      console.log("file : ", file);
                      console.log("Image : ", selectedImage);
                      handleImageUploadButton(file);
                    }
                  }}
                />
                <div>
                  {selectedImage.length > 0 ? (
                    <Image
                      src={selectedImage}
                      width={70}
                      height={70}
                      alt='selected image'
                    />
                  ) : (
                    <div className='p-1 bg-green-500 border-dashed '>
                      انتخاب تصویر دوره
                    </div>
                  )}
                </div>
              </label>
            </div>

            <div className='w-full'>
              <ArticleEditor
                onHandleAddArticle={handleAddPost}
                imgPath={"/api/post/image"}
                initData={rowData.postBody}
              />
            </div>

            <div className='w-full'>
              <button
                type='submit'
                disabled={isSubmitting}
                className='rounded-md bg-green-600 hover:bg-green-400 p-2 mt-2 text-xl font-moraba w-full '
              >
                بروز رسانی پست
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}
