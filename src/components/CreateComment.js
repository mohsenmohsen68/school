"use client";
import React, { useEffect, useState } from "react";
import StarRate from "./StarRate";
import { useDispatch } from "react-redux";
import { AddANewComment } from "@/redux/comments/Comments";
import toast, { Toaster } from "react-hot-toast";

export default function CreateComment({ courseID, userID, articleID }) {
  const [rating, setRating] = useState(5);
  const [userName, setUserName] = useState("");
  const [commentTitle,setCommentTitle] = useState("")
  const [body, setBody] = useState("");
  const dispatch = useDispatch();
  console.log("useruseruser : ", userID);
  const handleRating = (rate) => {
    setRating(rate);
    console.log(rate);
  };

  useEffect(() => {
    if (userID) {
      fetch("/api/auth/me", {
        method: "POST",
        "Content-Type": "application/json",
        body: JSON.stringify({ _id: userID })
      })
        .then((res) => res.json())
        .then((data) => {
          setUserName(data.data.userName);
          console.log("user username ...",data.data.userName)
        });
    }
  }, []);

  const addCommentHandler = async () => {
    const publishedDate = Date.now();
    const commentBody = {
      commentTitle,
      commentBody: body,
      score: rating,
      commentDate: publishedDate,
      commentToBeShown: false,
      answers: "",
      user: userID,
      course: courseID,
    };
    if (body.trim() === "" || commentTitle.trim() === "") {
      return toast.error(
        <div className='font-dana text-sm'>نظر یا عنوان پیام نمیتواند خالی باشد ...</div>,
        {
          duration: 4000,
          position: "top-center"
        }
      );
    } else {
      const res = await dispatch(AddANewComment(commentBody));
      console.log("res : ", res)
      if (res.payload.status === 201) {
        setBody("");
        setCommentTitle("")
        return toast.success(
          <div className='font-dana text-sm'>نظر شما با موفقیت ثبت شد ...</div>,
          {
            duration: 4000,
            position: "top-center"
          }
        );
      } else {
        return toast.error(
          <div className='font-dana text-sm'>
            در ثبت نظر شما مشکلی به وجود آمده است ...
          </div>,
          {
            duration: 4000,
            position: "top-center"
          }
        );
      }
    }
  };

  return (
    <div className='flex flex-col w-full font-dana h-fit pr-8 gap-2 '>
      <div className='text-lg font-dana'>دیدگاه خود را بنویسید ...</div>
      <p className='font-dana'>
        نشانی ایمیل شما منتشر نخواهد شد، قسمت های مورد نیاز با * نشانه گذاری شده
        اند
      </p>

      <StarRate rate={5} handleRating={handleRating} />
      
      <input
        type='text'
        value={commentTitle}
        className='border p-2 mt-1'
        placeholder="عنوان پیام *"
        onChange={(e) => setCommentTitle(e.target.value)}
      />
      
      <textarea
        name='comment'
        id='comment'
        placeholder="نظر خود را وارد کنید *"
        className='border p-2 mt-1'
        cols='10'
        rows='10'
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <div className='flex'>
        <p className='font-dana'>نام کاربری</p>
        <span className='text-red-400'>*</span>
      </div>
      <input
        type='text'
        value={userName}
        className='border p-2'
        onChange={(e) => setUserName(e.target.value)}
        disabled
      />

      <button
        disabled={userID ?false : true}
        onClick={addCommentHandler}
        className='p-2 text-white font-dana text-lg mt-2 w-40 bg-green-500 rounded-xl hover:bg-green-400'
      >
        ثبت نظر{" "}
      </button>

      <Toaster
        toastOptions={{
          success: {
            style: {
              background: "green",
              color: "white"
            }
          },
          error: {
            style: {
              background: "red",
              color: "white"
            }
          }
        }}
      />
    </div>
  );
}
