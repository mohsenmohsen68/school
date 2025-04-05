"use client";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function AddToShoppingCart({ course }) {



  const [courseCount, setCourseCount] = useState(0);

  const addToCart = () => {
    const newItem = { id: course._id, count: courseCount, name: course.title, price: course.price, img: course.img || "/img/defaultImage.png" }
    let courseShoppingCart = JSON.parse(localStorage.getItem("courseShoppingCart")) || []

    if (courseShoppingCart.length > 0) {
      const isthereCourseInLocalStorage = courseShoppingCart.some(item => item.id === course._id)
      if (isthereCourseInLocalStorage) {
        courseShoppingCart.forEach(item => {
          if (item.id === course._id) {
            item.count = item.count + courseCount
          }
        })
        localStorage.setItem("courseShoppingCart", JSON.stringify(courseShoppingCart))
        toast.success(
          <div className='font-BYekan text-sm'>دوره انتخاب شده با موفقیت به سبد خرید اضافه شد ...</div>,
          {
            duration: 4000,
            position: "top-center"
          }
        );

      } else {
        courseShoppingCart.push(newItem)
        localStorage.setItem("courseShoppingCart", JSON.stringify(courseShoppingCart))
        toast.success(
          <div className='font-BYekan text-sm'>دوره انتخاب شده با موفقیت به سبد خرید اضافه شد ...</div>,
          {
            duration: 4000,
            position: "top-center"
          }
        );
      }

    } else {
      courseShoppingCart.push(newItem)
      localStorage.setItem("courseShoppingCart", JSON.stringify(courseShoppingCart))
      toast.success(
        <div className='font-BYekan text-sm'>دوره انتخاب شده با موفقیت به سبد خرید اضافه شد ...</div>,
        {
          duration: 4000,
          position: "top-center"
        }
      );

    }

  }
  return (
    <div className="flex items-center ">
      <div className="flex justify-center items-center ml-9">
        <div className="border-[1px] p-2 transition-all hover:cursor-pointer hover:bg-slate-400 " onClick={(event) => setCourseCount((prev) => prev - 1)}>-</div>
        <div className="border-[1px] p-2 transition-all hover:cursor-pointer hover:bg-slate-400"> {courseCount} </div>
        <div className="border-[1px] p-2 transition-all hover:cursor-pointer hover:bg-slate-400" onClick={(event) => setCourseCount((prev) => prev + 1)}>+</div>
      </div>
      <button onClick={addToCart} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
        <span className="font-moraba relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          افزودن به سبد خرید{" "}
        </span>
      </button>
    </div>
  );
}

export default AddToShoppingCart;
