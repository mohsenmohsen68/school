"use client"
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsersFromServer } from '@/Redux/users/Users'
import { AppDispatch, RootState } from '@/Redux/Store'


export default function ListUsers() {
const dispatch = useDispatch<AppDispatch>()
const users = useSelector<RootState>(state=>state.users)
console.log("users : ",users)
// const usersData;
    useEffect(()=>{

         dispatch(getUsersFromServer('/api/user')) 

    },[])
// console.log("user data: ", usersData)
  return (
    <div>
      List USsssers
    </div>
  )
}
