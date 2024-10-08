"use client";
import { AddANewComment } from "@/Redux/comments/Comments";
import React, { useState } from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { VscCommentDiscussion } from "react-icons/vsc";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
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

export default function Comment() {
  const [commentTitle, setCommentTitle] = useState("");
  const [commentBody, setCommentBody] = useState("");

  const dispatch = useDispatch();

  const clickHandler = async() => {
    if (commentBody === "") {
      Toast.fire({
        toast: true,
        customClass: {
          title: "font-moraba",
          htmlContainer: "bg-slate-200 dark:bg-slate-700"
        },
        position: "bottom-end",
        title: "  پیغام نباید خالی باشد ...",
        icon: "error"
      });
    } else {
      const d = new Date();
      let year = d.getFullYear();
      let month = d.getMonth();
      let day = d.getDay();
      const pdate = new Date(year, month, day);
      const commentDate = new Intl.DateTimeFormat("fa-IR").format(pdate);
      const commentID = uuid();

      const body = {
        commentID : commentID,
        commentBody : commentBody,
        commentTitle: commentTitle,
        commentAuthor : "mohsen",
        commentDate : commentDate,
        commentToBeShown : false,
        answers : ["sd","sdf","sdfsvd"], 
      };

      const result = await dispatch(AddANewComment(body))
      console.log('result',result)
      if(result.payload.status === 201){
        Toast.fire({
          toast: true,
          customClass: {
            title: "font-moraba",
            htmlContainer: "bg-slate-200 dark:bg-slate-700"
          },
          position: "bottom-end",
          title: " نظر شما با موفقیت ثبت گردید ...",
          icon: "success"
        }); 
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
  };

  return (
    <div className='w-full h-fit pt-4 bg-slate-200 dark:bg-slate-700 my-4 p-4'>
      <div className='flex gap-3 my-1'>
        <VscCommentDiscussion className='text-4xl text-red-500 ' />
        <div className='font-dana-demiBold'>نظرات</div>
      </div>
      <div className='flex gap-3 my-1'>
        <div>
          <FaRegCircleUser className='text-4xl text-sky-500 ' />
        </div>
        <div className='font-dana-demiBold flex flex-col'>
          <div className='font-dana-medium'>نام کاربری</div>
          <div className='font-dana text-xs'>ثبت نظر جدید </div>
        </div>
      </div>

      <div className='flex flex-col gap-2 w-full lg:w-2/3'>
        <div>
          <input
            type='text'
            placeholder='موضوع نظر'
            value={commentTitle}
            onChange={(e) =>setCommentTitle(e.target.value)}
            className='font-dana p-2 text-sm w-full outline-none'
          />
        </div>

        <div>
          <textarea
            name=''
            id=''
            cols={30}
            rows={10}
            value={commentBody}
            onChange={(e) =>setCommentBody(e.target.value) }
            placeholder='نظر خود را وارد کنید ...'
            className='font-dana text-sm p-2 w-full outline-none '
          />
        </div>

        <div className='flex self-end w-40 font-dana text-sm '>
          <button
            className='ml-2 bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded'
            onClick={() => {
              setCommentBody("");
              setCommentTitle("");
            }}
          >
            {" "}
            انصراف
          </button>
          <button
            className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'
            onClick={clickHandler}
          >
            {" "}
            ثبت
          </button>
        </div>
      </div>
    </div>
  );
}
