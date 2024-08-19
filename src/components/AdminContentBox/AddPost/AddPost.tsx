"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { createANewPost } from "@/Redux/posts/Posts";
const { uuid } = require('uuidv4');

const ArticleEditor = dynamic(
  () => import("./../../../components/ArticleEditor/ArticleEditor"),
  { ssr: false }
);


export default function AddPost() {
  const dispatch = useDispatch()
  const [postData, setPostData] = useState("");

  const handleAddPost = (data: string) => {
    setPostData(data);
  };

  return (
    <div className='p-7'>
      <Formik
        initialValues={{
          title: "",
        }}
        validate={(values) => {
          const errors = {
            title: "",
          };
          //firstname validation
          if (!values.title) {
            errors.title = "وارد کردن عنوان پست الزامی است.";
          } else if (values.title.length <= 2) {
            errors.title = " عنوان پست باید حداقل سه حرف داشته باشد .";
          }
          //lastname validation
         
          //role validation

          if ( errors.title === "" ) {
            return {};
          } else {
            return errors;
          }
        }}
        onSubmit={async (values, { setSubmitting }) => {
          console.log("mmmmm", postData);
          const author = "mohsen";
          const d = new Date()
          let year = d.getFullYear();
          let month = d.getMonth();
          let day = d.getDay();
          const pdate = new Date(year,month,day)
          const publishedDate = new Intl.DateTimeFormat('fa-IR').format(pdate);
          const postID = uuid()
          const body = {
            postID,
            title: values.title,
            author,
            publishedDate,
            img:'mkmkmk',
            postBody:postData
          };
           console.log(body)
          dispatch(createANewPost(body))

        }
      }
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

            

            <div className='w-full'>
              < ArticleEditor onHandleAddArticle={handleAddPost} imgPath={'/api/post/image'} />
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
