"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { createANewArticle } from "@/Redux/articles/Articles";
const { uuid } = require('uuidv4');
import Swal from 'sweetalert2'
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

export default function AddArticle() {
  const dispatch = useDispatch()
  const [articleData, setArticleData] = useState("");

  const handleAddArticle = (data: string) => {
    setArticleData(data);
  };

  return (
    <div className='p-7'>
      <Formik
        initialValues={{
          title: "",
          category: "",
          keyWords: ""
        }}
        validate={(values) => {
          const errors = {
            title: "",
            category: "",
            keyWords: ""
          };
          //firstname validation
          if (!values.title) {
            errors.title = "وارد کردن عنوان مقاله الزامی است.";
          } else if (values.title.length <= 2) {
            errors.title = " عنوان مقاله باید حداقل سه حرف داشته باشد .";
          }
          //lastname validation
          if (!values.keyWords) {
            errors.keyWords = "وارد کردن کلمات کلیدی الزامی است.";
          } else if (values.keyWords.length <= 2) {
            errors.keyWords = "کلمات کلیدی باید حداقل سه حرف داشته باشد .";
          }
          //username validation

          //grade validation
          if (values.category == "") {
            errors.category = "انتخاب دسته بندی الزامی است.";
          }
          //role validation

          if (
            errors.category === "" &&
            errors.keyWords === "" &&
            errors.title === ""
          ) {
            return {};
          } else {
            return errors;
          }
        }}
        onSubmit={async (values, { setSubmitting }) => {
          console.log("mmmmm", articleData);
          const author = "mohsen";
          const d = new Date()
          let year = d.getFullYear();
          let month = d.getMonth();
          let day = d.getDay();
          const pdate = new Date(year,month,day)
          const publishedDate = new Intl.DateTimeFormat('fa-IR').format(pdate);
          const articleID = uuid()
          const body = {
            articleID,
            title: values.title,
            category: values.category,
            keyWords: values.keyWords,
            author,
            publishedDate,
            img:'mkmkmk',
            articleBody:articleData
          };
           console.log(body)
          const result = await dispatch(createANewArticle(body))
          console.log('result of adding article :',result.payload.status)
          if(result.payload.status === 201){
            Toast.fire({
              toast: true,
              customClass: {
                title: "font-moraba",
                htmlContainer: "bg-slate-200 dark:bg-slate-700"
              },
              position: "bottom-end",
              title: " مقاله با موفقیت ثبت گردید ...",
              icon: "success"
            });
            dispatch( selectOption("") ) 
          }else{
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
                placeholder='عنوان مقاله ...'
                className={`bg-slate-200 p-2  outline-none `}
                onChange={handleChange}
                value={values.title}
                onBlur={handleBlur}
              />
              <div className='text-xs text-red-500'>
                {errors.title && touched.title && errors.title}
              </div>
            </div>

            <div className='flex flex-col mt-2 '>
              <input
                type='text'
                name='keyWords'
                placeholder='کلمات کلیدی ...'
                className={`bg-slate-200 p-2  outline-none `}
                onChange={handleChange}
                value={values.keyWords}
                onBlur={handleBlur}
              />
              <div className='text-xs text-red-500'>
                {errors.keyWords && touched.keyWords && errors.keyWords}
              </div>
            </div>

            <div className=' grid grid-cols-1 md:grid-cols-2'>
              <div className='flex flex-col mt-2'>
                <select
                  name='category'
                  id='category'
                  className={`bg-slate-200 p-2 font-moraba  outline-none `}
                  onChange={handleChange}
                  value={values.category}
                  onBlur={handleBlur}
                >
                  <option value='-1'>خوشه علمی مربوطه ؟</option>
                  <option value='ریاضیات'>ریاضیات</option>
                  <option value='زیست شناسی'>زیست شناسی</option>
                  <option value='زمین شناسی'>زمین شناسی</option>
                  <option value='شیمی'>شیمی</option>
                  <option value='فیزیک'>فیزیک</option>
                  <option value='برق و الکترونیک'>برق و الکترونیک</option>
                  <option value='رباتیک'>رباتیک</option>
                  <option value='برنامه نویسی'>برنامه نویسی</option>
                  <option value='هوش مصنوعی'>هوش مصنوعی</option>
                  <option value='نجوم'>نجوم</option>
                  <option value='انرژی های نوین'>انرژی های نوین</option>
                  <option value='هوافضا'>هوافضا</option>
                </select>
                <div className='text-xs text-red-500'>
                  {errors.category && touched.category && errors.category}
                </div>
              </div>

              <div className='flex justify-center items-center mt-2'>
                <label
                  htmlFor='file'
                  className='bg-sky-500 mt-2 border-sky-700 text-white p-2 rounded-lg cursor-pointer hover:bg-sky-300 transition-all delay-75 shadow-xl font-dana text-sm'
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
            </div>

            <div className='w-full'>
              <ArticleEditor onHandleAddArticle={handleAddArticle} imgPath={'/api/articles/image'} initData={'<p>  من ویرایشگر مقاله های شما هستم ... </p>'}/>
            </div>

            <div className='w-full'>
              <button
                type='submit'
                disabled={isSubmitting}
                className='rounded-md bg-green-600 hover:bg-green-400 p-2 mt-2 text-xl font-moraba w-full '
              >
                ثبت مقاله
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}
