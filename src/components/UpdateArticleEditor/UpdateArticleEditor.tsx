"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Formik, FormikErrors } from "formik";
import { useDispatch } from "react-redux";
import { getArticlesFromServer, updateArticle } from "@/Redux/articles/Articles";
import { AppDispatch } from "@/Redux/Store";
import Swal from 'sweetalert2'
import { selectOption } from "@/Redux/CMS/CMSRoutes";
import Image from "next/image";

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

export default function UpdateArticleEditor( {rowData, onUpdate} ):JSX.Element {
  console.log('rrrrr', rowData)
  const dispatch = useDispatch<AppDispatch>()
  const [articleData, setArticleData] = useState(rowData.articleData);
  const [showImage, setShowImage] = useState(false);
  const [img, setImg] = useState([]);
  const [selectedImage, setSelectedImage] = useState("");
  const [fileName, setFileName] = useState("");

  const handleAddArticle = (data: string) => {
    setArticleData(data);
    console.log('my updated article body ... : ',data)
  };

  const uploadIMG = async (e, articleID) => {
    e.preventDefault();
    const formData = new FormData();
    console.log("img", img);
    formData.append("img", img);
    const res = await fetch("/api/articles/myimages", {
      method: "PUT",
      body: formData
    });
    const body = await res.json();
    console.log("res :........ ", res, "body.....", body);
    if (res.status === 200) {
      const res = await fetch("/api/articles/myimages/uploadimgapi", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          articleID,
          img: `http://localhost:3000/uploads/articlesImage/${body.data}`
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
      setSelectedImage(`http://localhost:3000/uploads/articlesImage/${body.data}`);
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
          title: rowData.title,
          category: rowData.categoty,
          keyWords: rowData.keyWords
        }}
        validate={(values) => {
          const errors= {
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
          
          const body = {
            articleID:rowData.articleID,
            title: values.title,
            category: values.category,
            keyWords: values.keyWords,
            author,
            publishedDate,
            img: img ? `/uploads/articlesImage/${fileName} ` : '',
            articleBody:articleData
          };
           console.log('updated body : ',body)
          const result =await dispatch(updateArticle(body))
          console.log("resulttttt:",result)
          if(result.payload.status === 200){
            Toast.fire({
              toast: true,
              customClass: {
                title: "font-moraba",
                htmlContainer: "bg-slate-200 dark:bg-slate-700"
              },
              position: "bottom-end",
              title: " مقاله با موفقیت بروز گردید ...",
              icon: "success"
            });
            dispatch(getArticlesFromServer("/api/articles"));
            dispatch(selectOption(""))
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
         
          
          
          //to show the articles list we call onUpdate Prop
          onUpdate()
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
                {/* articleimage uploader ... */}
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
                        onClick={(e) => uploadIMG(e, rowData.articleID)}
                      >
                        ثبت
                      </button>


              </div>
            </div>

            <div className='w-full'>
              <ArticleEditor onHandleAddArticle={handleAddArticle} imgPath={'/api/articles/image'} initData={rowData.articleBody}/>
            </div>

            <div className='w-full'>
              <button
                type='submit'
                disabled={isSubmitting}
                className='rounded-md bg-green-600 hover:bg-green-400 p-2 mt-2 text-xl font-moraba w-full '
              >
                بروز رسانی مقاله
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}

