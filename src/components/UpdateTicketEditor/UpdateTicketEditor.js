"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Formik, FormikErrors } from "formik";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/Redux/Store";
import Swal from "sweetalert2";
import { selectOption } from "@/Redux/CMS/CMSRoutes";
import Image from "next/image";
import {updateTicket} from "@/Redux/request/Request"
const { uuid } = require("uuidv4");

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

export default function UpdateTicketEditor({
  rowData,
  onUpdate
}) {
  console.log("rrrrr", rowData);
  const dispatch = useDispatch();
  

  return (
    <div className='p-7'>
      <Formik
        initialValues={{
          title: rowData.title,
          body: rowData.requestBody,
          answer : rowData.response
        }}
        validate={(values) => {
          const errors = {
            title: "",
            body: ""
          };
          //course title validation
          if (!values.title) {
            errors.title = "وارد کردن موضوع تیکت الزامی است.";
          } else if (values.title.length <= 2) {
            errors.title = " موضوع تیکت باید حداقل سه حرف داشته باشد .";
          }
          //course description validation
          if (!values.body) {
            errors.body = "وارد کردن  تیکت الزامی است.";
          } else if (values.body.length <= 2) {
            errors.body = " متن تیکت باید حداقل سه حرف داشته باشد .";
          }

          console.log("err: ", errors);
          if (errors.title === "" && errors.body === "") {
            return {};
          } else {
            return errors;
          }
        }}
        onSubmit={async (values, { setSubmitting }) => {
          
          const body = {
            id: rowData._id,
            title: values.title,
            requestBody: values.body,
            date: rowData.date,
            user: rowData.user,
            isChecked: rowData.isChecked,
            response: values.answer
          };
          console.log(" ----  bodddddddddy ---", body);
          const result = await dispatch(updateTicket(body));
          console.log("result of adding article :", result.payload);
          if (result.payload.status === 200) {
            Toast.fire({
              toast: true,
              customClass: {
                title: "font-moraba",
                htmlContainer: "bg-slate-200 dark:bg-slate-700"
              },
              position: "bottom-end",
              title: " تیکت با موفقیت بروز گردید ...",
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
          <form onSubmit={handleSubmit} className='text-slate-800 font-moraba'>
        
            <div className='grid grid-cols-1'>
              <div className='flex flex-col mt-2 ml-1'>
                <input
                  type='text'
                  name='title'
                  placeholder=' موضوع تیکت ...'
                  className={`bg-slate-200 p-2  outline-none `}
                  onChange={handleChange}
                  value={values.title}
                  onBlur={handleBlur}
                />
                <div className='text-xs text-red-500 font-moraba'>
                  {errors.title && touched.title && errors.title}
                </div>
              </div>
            </div>

           

            

            <div className=' grid grid-cols-1'>
              <div className='flex flex-col mt-2 font-moraba'>
                <textarea id="body" cols="30" rows="7" name='body'
                  placeholder=' متن تیکت  ...'
                  className={`bg-slate-200 p-2  outline-none `}
                  onChange={handleChange}
                  value={values.body}
                  onBlur={handleBlur} />
               
                <div className='text-xs text-red-500'>
                  {errors.body && touched.body && errors.body}
                </div>
              </div>
            </div>


            <div className=' grid grid-cols-1'>
              <div className='flex flex-col mt-2 font-moraba'>
                <textarea id="answer" cols="30" rows="7" name='answer'
                  placeholder=' پاسخ به تیکت  ...'
                  className={`bg-slate-200 p-2  outline-none `}
                  onChange={handleChange}
                  value={values.answer}
                  onBlur={handleBlur} />
              </div>
            </div>

            

            <div className='w-full'>
              <button
                type='submit'
                disabled={isSubmitting}
                className='rounded-md bg-green-600 hover:bg-green-400 p-2 mt-2 text-xl font-moraba w-full '
              >
                ویرایش تیکت
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}
