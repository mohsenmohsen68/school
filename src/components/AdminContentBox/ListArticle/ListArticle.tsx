"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArticlesFromServer } from "@/Redux/articles/Articles";
import { AppDispatch, RootState } from "@/Redux/Store";
import Box from "@mui/material/Box";
import { GridColDef, DataGrid } from "@mui/x-data-grid";
import { v4 as uuidv4 } from "uuid";
import { faIR } from "@mui/x-data-grid/locales";
import Swal from "sweetalert2";

export default function ListArticles() {
  const dispatch = useDispatch<AppDispatch>();
  const articles = useSelector<RootState>((state) => state.articles);
  
  // console.log("users : ",users)

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

  const removeHandler = (params) => {
    console.log('userCode ::: ',params.row.userCode)

    Swal.fire({
      toast: true,
      customClass:{
       title: "font-moraba",
       // actions: style.action,
       confirmButton: "font-moraba",
       cancelButton: "font-moraba",
      },
      position: "bottom-end",
      title:' آیا از حذف کاربر اطمینان دارید ؟ ',
      icon:'warning',
      showConfirmButton:true,
      confirmButtonText:'بلی',
      confirmButtonColor: 'orange',
      showCancelButton:true,
      cancelButtonText:"خیر",
      cancelButtonColor: 'blue'

    }).then(result => {
      // the user confirms to remove the selected user ...
       if(result.isConfirmed === true){
         const Response= fetch(`/api/user?id=${params.row.userCode}`,{
          method:'DELETE',

         }).then(res=>res.json())
         .then(data=>{

          if(data.status === 200){
            
            Toast.fire({
              icon: "success",
              customClass:{
                title: "font-moraba",
               },
              title: "کاربر با موفقیت حذف شد ..."
            });
            dispatch(getUsersFromServer("/api/user"));
            

          }else if(data.status === 404){
            Toast.fire({
              icon: "error",
              customClass:{
                title: "font-moraba",
               },
              title: "کاربری با این کد وجود ندارد ..."
            });
          }
         })

         
       }
       else{
        console.log("cancel shod ...")
       }

       // if(result.isDismissed ) 
    })
    // fetch('/api/user')
  };
  const editHandler = () => {};
  const infoHandler = () => {};

  const columns: GridColDef[] = [
    {
      field: "title",
      headerName: "عنوان مقاله",
      headerClassName:
        "bg-slate-200 dark:bg-slate-700 dark:text-white font-moraba",
      cellClassName:
        "font-dana justify-center item-center text-center dark:text-white",
      headerAlign: "center",
      width: 200
    },
    {
      field: "author",
      headerName: "نویسنده",
      headerClassName:
        "bg-slate-200 dark:bg-slate-700 dark:text-white font-moraba",
      cellClassName:
        "font-dana justify-center item-center text-center dark:text-white",
      headerAlign: "center",
      width: 100
    },
    {
      field: "publishedDate",
      headerName: "تاریخ انتشار",
      headerClassName:
        "bg-slate-200 dark:bg-slate-700 dark:text-white font-moraba",
      cellClassName:
        "font-dana justify-center item-center text-center dark:text-white",
      headerAlign: "center",
      width: 100
    },
    {
      field: "category",
      headerName: "دسته بندی",
      headerClassName:
        "bg-slate-200 dark:bg-slate-700 dark:text-white font-moraba",
      cellClassName:
        "font-dana justify-center item-center text-center dark:text-white",
      headerAlign: "center",
      width: 90
    },
    {
      field: "actions",
      headerName: "عملیات",
      width: 474,
      headerClassName:
        "bg-slate-200 dark:bg-slate-700 dark:text-white font-moraba",
      cellClassName:
        "font-moraba flex justify-center items-center text-center dark:text-white",
      renderCell: (params) => {
        return (
          <>
            <button
              onClick={(e) => {
                removeHandler(params);

              }}
              className='bg-red-500 font-dana rounded-lg h-9 flex justify-center items-center mr-2 p-1'
            >
              حذف
            </button>
            <button
              onClick={(e) => {
                editHandler();
              }}
              className='bg-yellow-500 font-dana rounded-lg h-9 flex justify-center items-center mr-2 p-1'
            >
              بروزرسانی
            </button>
            <button
              onClick={(e) => {
                infoHandler();
              }}
              className='bg-sky-500 font-dana rounded-lg h-9 flex justify-center items-center mr-2 p-1'
            >
              اطلاعات کاربر
            </button>
          </>
        );
      }
    }
  ];

  const rows = [...articles];
  // console.log('rows' , rows)
  // const usersData;
  useEffect(() => {
    dispatch(getArticlesFromServer("/api/articles"));
  }, []);
  // console.log("user data: ", usersData)
  return (
    <div className=' '>
      <Box
        className=''
        sx={{
          height: "85vh",
          width: "100%"
        }}
      >
        <DataGrid
          pagination
          autoPageSize
          getRowId={(row) => uuidv4()}
          rows={rows}
          columns={columns}
          className='bg-slate-200 dark:bg-slate-700'
          localeText={faIR.components.MuiDataGrid.defaultProps.localeText}
        />
      </Box>
    </div>
  );
}

