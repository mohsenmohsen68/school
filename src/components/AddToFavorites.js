"use client"
import { createANewFavorite, deleteFavorite } from '@/redux/favorites/Favorites';
import React, { useState } from 'react'
import toast, { Toaster } from "react-hot-toast";
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";
import { useDispatch } from 'react-redux';

function AddToFavorites({ userID, courseID, isThisCousreThisUsersFavorites }) {
  console.log('user and products on client :  ', userID, courseID, isThisCousreThisUsersFavorites)
  const [heartfill, setHeartFill] = useState(isThisCousreThisUsersFavorites);

  const dispatch = useDispatch()

  const deleteFavoriteList = async (userID, courseID) => {
    console.log('delete is called :')
    setHeartFill(false)
    const res = await dispatch(deleteFavorite({ user: userID, course: courseID }))
    console.log("redux response : ", res)
    if (res.payload.status === 200) {
      return toast.success(
        <div className='font-BYekan text-sm'>
          این محصول با موفقیت از لیست علاقه مندی ها حذف شد ...
        </div>,
        {
          duration: 4000,
          position: "top-center"
        }
      );
    } else {
      return toast.error(
        <div className='font-BYekan text-sm'>
          این محصول در لیست علاقه مندی ها وجود ندارد...
        </div>,
        {
          duration: 4000,
          position: "top-center"
        }
      );
    }
  }

  const addToFavoriteList = async (userID, courseID) => {
    console.log('add is called :')
    setHeartFill(true)
    const res = await dispatch(createANewFavorite({ user: userID, course: courseID }))
    console.log("redux response : ", res)
    if (res.payload.status === 201) {
      return toast.success(
        <div className='font-BYekan text-sm'>
          این محصول با موفقیت به لیست علاقه مندی ها اضافه شد ...
        </div>,
        {
          duration: 4000,
          position: "top-center"
        }
      );
    } else {
      return toast.error(
        <div className='font-BYekan text-sm'>
          این محصول در لیست علاقه مندی ها وجود دارد...
        </div>,
        {
          duration: 4000,
          position: "top-center"
        }
      );
    }
  }

  return (
    <>
      {heartfill ? (
        <GoHeartFill onClick={() => deleteFavoriteList(userID, courseID)} className=" text-red-600 text-2xl " />
      ) : (
        <GoHeart onClick={() => addToFavoriteList(userID, courseID)} className=" text-gray-500 text-2xl " />
      )}
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
    </>
  )
}

export default AddToFavorites
