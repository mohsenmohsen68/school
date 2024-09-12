"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { createANewCourse } from "@/Redux/courses/Courses";
import Image from "next/image";
import Swal from 'sweetalert2'
import { selectOption } from "@/Redux/CMS/CMSRoutes";
const { uuid } = require("uuidv4");

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

export default function AddCourse() {
  const dispatch = useDispatch();
  const [courseData, setCourseData] = useState("");
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedFile, setSelectedFile] = useState("");

  const handleAddCourse = (data: string) => {
    setCourseData(data);
  };

  const handleImageUploadButton = async ():boolean => {
    // setUploading(true);
    try {
      if (!selectedFile) return false;
       console.log("the file is selected ...")
      let data = new FormData();
      data.append("image", selectedFile);
      fetch("http://localhost:3002/api/course/titleImage", {
        method: "POST",
        body: data
      })
        .then((res) => res.json())
        .then((d) => {
          // setImageFileName(d.filename);
          console.log("ggg", d.filename);
          console.log("ggg2", selectedImage);
          console.log("ggg4", selectedFile);
          return true;
        });
    } catch (err) {
      console.log('errrr',err);
    }
    // setUploading(false);
  };

  return (
    <div className='p-7'>
      <Formik
        initialValues={{
          title: "",
          description: "",
          discount: "",
          price: "",
          status: "",
          sessionNo: "",
          lastUpdate: "",
          preRequisite: "",
          courseType: "",
          studentNo: "",
          stisfiction: "",
          teacher: "",
          img: ""
        }}
        validate={(values) => {
          const errors = {
            title: "",
            description: "",
            discount: "",
            price: "",
            status: "",
            sessionNo: "",
            preRequisite: "",
            courseType: "",
            studentNo: "",
            teacher: ""
          };
          //course title validation
          if (!values.title) {
            errors.title = "وارد کردن عنوان دوره الزامی است.";
          } else if (values.title.length <= 2) {
            errors.title = " عنوان دوره باید حداقل سه حرف داشته باشد .";
          }
          //course description validation
          if (!values.description) {
            errors.description = "وارد کردن توضیحات دوره الزامی است.";
          } else if (values.description.length <= 2) {
            errors.description = " توضیحات دوره باید حداقل سه حرف داشته باشد .";
          }
          //course discount validation
          if (!values.discount) {
            errors.discount = "وارد کردن تخفیف دوره الزامی است.";
          } else {
            if (isNaN(+values.discount)) {
              errors.discount = "ورودی تخفیف باید یک عدد باشد ...";
            } else if (+values.discount > 100 || +values.discount < 0) {
              errors.discount = "میزان تخفیف باید عددی بین 0 و 100 باشد ...";
            }
          }
          //course price validation
          if (!values.price) {
            errors.price = "وارد کردن قیمت دوره الزامی است.";
          } else {
            if (isNaN(+values.price)) {
              errors.price = "ورودی قیمت باید یک عدد باشد ...";
            }
          }
          //course status validation
          if (!values.status) {
            errors.status = "وارد کردن وضعیت دوره الزامی است.";
          }
          //course session validation
          if (!values.sessionNo) {
            errors.sessionNo = "ورد کردن تعداد جلسات الزامی است ...";
          }
          if (isNaN(+values.sessionNo)) {
            errors.sessionNo = "تعداد جلسات دوره باید یک عدد باشد ...";
          } else if (+values.sessionNo < 0) {
            errors.sessionNo = " تعداد جلسات باید عددی مثبت باشد ...";
          }

          //course preRequisite validation
          if (!values.preRequisite) {
            errors.preRequisite = "وارد کردن پیش نیاز دوره الزامی است.";
          } else if (values.preRequisite.length <= 2) {
            errors.preRequisite =
              " پیش نیاز دوره باید حداقل سه حرف داشته باشد .";
          }
          //course courseType validation
          if (!values.courseType) {
            errors.courseType = "وارد کردن نوع دوره الزامی است.";
          }
          //course teacher validation
          if (!values.teacher) {
            errors.teacher = "وارد کردن مدرس دوره الزامی است.";
          } else if (values.teacher.length <= 2) {
            errors.teacher = " مدرس دوره باید حداقل سه حرف داشته باشد .";
          }

          //course studentNo validation
          if (!values.studentNo) {
            errors.studentNo = "تعداد دانش آموزان دوره نباید خالی باشد ...";
          } else {
            if (isNaN(+values.studentNo)) {
              errors.studentNo = "تعداد دانش آموزان دوره باید یک عدد باشد ...";
            } else if (+values.studentNo < 0) {
              errors.studentNo = " تعداد دانش آموزان باید عددی مثبت باشد ...";
            }
          }
          console.log("err: ", errors);
          if (
            errors.title === "" &&
            errors.description === "" &&
            errors.discount === "" &&
            errors.price === "" &&
            errors.status === "" &&
            errors.sessionNo === "" &&
            errors.preRequisite === "" &&
            errors.courseType === "" &&
            errors.studentNo === "" &&
            errors.teacher === ""
          ) {
            return {};
          } else {
            return errors;
          }
        }}
        onSubmit={async (values, { setSubmitting }) => {
          console.log("mmmmm", courseData);

          const imageHandled = handleImageUploadButton();
          console.log('cccc',imageHandled)
          if (imageHandled) {
            const d = new Date();
            let year = d.getFullYear();
            let month = d.getMonth();
            let day = d.getDay();
            const pdate = new Date(year, month, day);
            const publishedDate = new Intl.DateTimeFormat("fa-IR").format(
              pdate
            );
            const courseID = uuid();
            const body = {
              courseID,
              title: values.title,
              description: values.description,
              discount: values.discount,
              price: values.price,
              status: values.status,
              sessionNo: values.sessionNo,
              publishedDate: publishedDate,
              lastUpdate: publishedDate,
              preRequisite: values.preRequisite,
              courseType: values.courseType,
              studentNo: 0,
              stisfiction: 5,
              img: "/......................./",
              courseBody: courseData,
              teacher: values.teacher
            };
            console.log(" ----  bodddddddddy ---", body);
            const result = await dispatch(createANewCourse(body));
            console.log('result of adding article :',result.payload.status)
            if(result.payload.status === 201){
              Toast.fire({
                toast: true,
                customClass: {
                  title: "font-moraba",
                  htmlContainer: "bg-slate-200 dark:bg-slate-700"
                },
                position: "bottom-end",
                title: " دوره با موفقیت ثبت گردید ...",
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
          <form onSubmit={handleSubmit} className='text-slate-800 font-moraba'>
            <div className=' grid grid-cols-1 md:grid-cols-2'>
              <div className='flex flex-col mt-2 ml-1 '>
                <input
                  type='text'
                  name='title'
                  placeholder='عنوان دوره ...'
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
                  name='description'
                  placeholder='توضیحات دوره ...'
                  className={`bg-slate-200 p-2  outline-none `}
                  onChange={handleChange}
                  value={values.description}
                  onBlur={handleBlur}
                />
                <div className='text-xs text-red-500'>
                  {errors.description &&
                    touched.description &&
                    errors.description}
                </div>
              </div>
            </div>

            <div className=' grid grid-cols-1 md:grid-cols-2'>
              <div className='flex flex-col mt-2 ml-1 '>
                <input
                  type='text'
                  name='discount'
                  placeholder='تخفیف (عددی بین 0 و 100) ...'
                  className={`bg-slate-200 p-2  outline-none `}
                  onChange={handleChange}
                  value={values.discount}
                  onBlur={handleBlur}
                />
                <div className='text-xs text-red-500 font-moraba'>
                  {errors.discount && touched.discount && errors.discount}
                </div>
              </div>

              <div className='flex flex-col mt-2 '>
                <input
                  type='text'
                  name='price'
                  placeholder=' قیمت محصول...'
                  className={`bg-slate-200 p-2  outline-none `}
                  onChange={handleChange}
                  value={values.price}
                  onBlur={handleBlur}
                />
                <div className='text-xs text-red-500 font-moraba'>
                  {errors.price && touched.price && errors.price}
                </div>
              </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2'>
              <div className='flex flex-col mt-2 ml-1'>
                <input
                  type='text'
                  name='studentNo'
                  placeholder=' تعداد دانش آموزان دوره ...'
                  className={`bg-slate-200 p-2  outline-none `}
                  onChange={handleChange}
                  value={values.studentNo}
                  onBlur={handleBlur}
                />
                <div className='text-xs text-red-500 font-moraba'>
                  {errors.studentNo && touched.studentNo && errors.studentNo}
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
                      }
                    }}
                  />
                  <div>
                    {selectedImage ? (
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
                {/* <button disabled={uploading} onClick={handleImageUploadButton}>
                  {uploading ? "در حال بارگزاری ..." : "بارگزاری"}
                </button> */}
              </div>
            </div>

            <div className=' grid grid-cols-1 md:grid-cols-2'>
              <div className='flex flex-col mt-2 ml-1 font-moraba '>
                <input
                  type='text'
                  name='sessionNo'
                  placeholder=' تعداد جلسات دوره ...'
                  className={`bg-slate-200 p-2  outline-none `}
                  onChange={handleChange}
                  value={values.sessionNo}
                  onBlur={handleBlur}
                />
                <div className='text-xs text-red-500'>
                  {errors.sessionNo && touched.sessionNo && errors.sessionNo}
                </div>
              </div>

              <div className='flex flex-col mt-2 font-moraba'>
                <input
                  type='text'
                  name='preRequisite'
                  placeholder=' پیش نیازهای دوره  ...'
                  className={`bg-slate-200 p-2  outline-none `}
                  onChange={handleChange}
                  value={values.preRequisite}
                  onBlur={handleBlur}
                />
                <div className='text-xs text-red-500'>
                  {errors.preRequisite &&
                    touched.preRequisite &&
                    errors.preRequisite}
                </div>
              </div>
            </div>

            <div className=' grid grid-cols-1 md:grid-cols-2'>
              <div className='flex flex-col mt-2 ml-1'>
                <select
                  name='status'
                  id='status'
                  className={`bg-slate-200 p-2 font-moraba  outline-none `}
                  onChange={handleChange}
                  value={values.status}
                  onBlur={handleBlur}
                >
                  <option value='-1'>وضعیت دوره ؟</option>
                  <option value='برگزاری'>در حال برگزاری </option>
                  <option value='ثبت نام'>ثبت نام دانش آموزان</option>
                </select>
                <div className='text-xs text-red-500'>
                  {errors.status && touched.status && errors.status}
                </div>
              </div>

              <div className='flex flex-col mt-2'>
                <select
                  name='courseType'
                  id='courseType'
                  className={`bg-slate-200 p-2 font-moraba  outline-none `}
                  onChange={handleChange}
                  value={values.courseType}
                  onBlur={handleBlur}
                >
                  <option value='-1'>نحوه برگزاری دوره ؟</option>
                  <option value='مجازی'>مجازی </option>
                  <option value='حضوری'>حضوری</option>
                  <option value='حضوری-مجازی'>حضوری - مجازی </option>
                </select>
                <div className='text-xs text-red-500'>
                  {errors.courseType && touched.courseType && errors.courseType}
                </div>
              </div>
            </div>

            <div className=' grid grid-cols-1 md:grid-cols-2'>
              <div className='flex flex-col mt-2 font-moraba'>
                <input
                  type='text'
                  name='teacher'
                  placeholder=' مدرس دوره  ...'
                  className={`bg-slate-200 p-2  outline-none `}
                  onChange={handleChange}
                  value={values.teacher}
                  onBlur={handleBlur}
                />
                <div className='text-xs text-red-500'>
                  {errors.teacher && touched.teacher && errors.teacher}
                </div>
              </div>
            </div>

            <div className='w-full'>
              <ArticleEditor
                onHandleAddArticle={handleAddCourse}
                imgPath={"/api/course/image"}
                initData={"<p>  من ویرایشگر دوره های شما هستم ... </p>"}
              />
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
