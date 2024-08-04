"use client"
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsersFromServer } from '@/Redux/users/Users'
import { AppDispatch, RootState } from '@/Redux/Store'
import Box from '@mui/material/Box';
import { GridColDef, DataGrid } from '@mui/x-data-grid';
import { v4 as uuidv4 } from 'uuid'



export default function ListUsers() {
const dispatch = useDispatch<AppDispatch>()
const users = useSelector<RootState>(state=>state.users)
console.log("users : ",users)

const columns: GridColDef[] = [
  {
    field: 'firstName',
    headerName:'نام',
    headerClassName: 'bg-slate-200 dark:bg-slate-700 dark:text-white font-moraba',
    cellClassName: 'font-moraba justify-center item-center text-center',
    headerAlign: 'center',
    width: 100,
  },
  {
    field:'lastName',
    headerName: 'نام خانوادگی',
    headerClassName: 'bg-slate-200 dark:bg-slate-700 dark:text-white font-moraba',
    headerAlign: 'center',
    width: 100,
  },
  {
    field:'age',
    headerName: 'سن',
    headerClassName: 'bg-slate-200 dark:bg-slate-700 dark:text-white font-moraba',
    headerAlign: 'center',
    width: 70,
  },
  {
    field:'school',
    headerName: 'مدرسه',
    headerClassName: 'bg-slate-200 dark:bg-slate-700 dark:text-white font-moraba',
    headerAlign: 'center',
    width: 90,
  },
  {
    field:'userCode',
    headerName: 'کد ملی',
    headerClassName: 'bg-slate-200 dark:bg-slate-700 dark:text-white font-moraba',
    headerAlign: 'center',
    width: 120,
  },
  {
    field:'grade',
    headerName: 'پایه',
    headerClassName: 'bg-slate-200 dark:bg-slate-700 dark:text-white font-moraba',
    headerAlign: 'center',
    width: 70,
  },
  {
    field:'phoneNumber',
    headerName: 'شماره تماس',
    headerClassName: 'bg-slate-200 dark:bg-slate-700 dark:text-white font-moraba',
    headerAlign: 'center',
    width: 120,
  },
  { field: 'actions', 
  headerName: 'عملیات',
   width: 400,
   headerClassName: 'bg-slate-200 dark:bg-slate-700 dark:text-white font-moraba',
   cellClassName: 'flex justify-center items-center',
    renderCell: (params) => {
    return (
      <>
      <button
        onClick={(e) => {}} className='bg-red-500 font-dana rounded-lg h-9 flex justify-center items-center mr-2 p-1'
      >
        حذف
      </button>
      <button
        onClick={(e) => {}} className='bg-yellow-500 font-dana rounded-lg h-9 flex justify-center items-center mr-2 p-1'
      >
        بروزرسانی
      </button>
      <button
        onClick={(e) => {}} className='bg-sky-500 font-dana rounded-lg h-9 flex justify-center items-center mr-2 p-1'
      >
        اطلاعات کاربر
      </button>
      </>
      
    );
  } }
];

const rows =[...users];
console.log('rows' , rows)
// const usersData;
    useEffect(()=>{

         dispatch(getUsersFromServer('/api/user')) 

    },[])
// console.log("user data: ", usersData)
  return (
    <div className='p-4'>
      <Box
      sx={{
        height: '85vh',
        width: '100%',
        '& .super-app-theme--header': {
          backgroundColor: 'rgba(255, 7, 0, 0.55)',
        },
      }}
    >
      <DataGrid getRowId={(row) => uuidv4()} rows={rows} columns={columns}  />
    </Box>
    </div>
  )
}
