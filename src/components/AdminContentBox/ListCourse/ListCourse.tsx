"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArticlesFromServer } from "@/Redux/articles/Articles";
import { AppDispatch, RootState } from "@/Redux/Store";
import Box from "@mui/material/Box";
import { GridColDef, DataGrid } from "@mui/x-data-grid";
import { v4 as uuidv4 } from "uuid";
import { faIR } from "@mui/x-data-grid/locales";
import Swal from "sweetalert2";
import { deleteCourse, getCoursesFromServer } from "@/Redux/courses/Courses";
import CoursePreviewHandler from '@/components/CoursePreviewHandler/CoursePreviewHandler'
import UpdateCourseEditor from "@/components/UpdateCourseEditor/UpdateCourseEditor";

export default function ListCourses() {
  const dispatch = useDispatch<AppDispatch>();
  const courses = useSelector<RootState>((state) => state.courses);
  const [showUpdateCourse,setShowUpdateCourse] = useState(false)
  const [showPreviewCourse,setShowPreviewCourse] = useState(false)
  const [rowData,setRowData] = useState({})
  
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
    console.log('userCode ::: ',params.row.courseID)

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
        dispatch(deleteCourse(params.row.courseID)).then(result => {
          console.log('remove course result : ',result)
          if(result.payload.status === 200){
            Toast.fire({
              icon: "success",
              customClass:{
                title: "font-moraba",
               },
              title: "دوره با موفقیت حذف شد ..."
            });
            dispatch(getCoursesFromServer());
            

          }else if(result.payload.status === 404){
            Toast.fire({
              icon: "error",
              customClass:{
                title: "font-moraba",
               },
              title: "دوره ای با این کد وجود ندارد ..."
            });
          }
         })         
     }
     else{
      console.log("cancel shod ...")
     }
    })
  };


  const updateDone = ()=>{
    setShowUpdateCourse(false);
  }
  const editHandler = async( params ) => {
    console.log('params' , params.row)
    setRowData(params.row)
    setShowUpdateCourse(true);
    setShowPreviewCourse(false) 

  };
  const infoHandler = async( params ) => {
    console.log('params' , params.row)
    setRowData(params.row)
    setShowPreviewCourse(true)
    setShowUpdateCourse(false);  
  };


  const columns: GridColDef[] = [
    {
      field: "title",
      headerName: "عنوان دوره",
      headerClassName:
        "bg-slate-200 dark:bg-slate-700 dark:text-white font-moraba",
      cellClassName:
        "font-dana justify-center item-center text-center dark:text-white",
      headerAlign: "center",
      width: 200
    },
    {
      field: "teacher",
      headerName: "مدرس ",
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
      field: "price",
      headerName: " قیمت",
      headerClassName:
        "bg-slate-200 dark:bg-slate-700 dark:text-white font-moraba",
      cellClassName:
        "font-dana justify-center item-center text-center dark:text-white",
      headerAlign: "center",
      width: 90
    },
    {
      field: "discount",
      headerName: " تخفیف",
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
                editHandler(params);
              }}
              className='bg-yellow-500 font-dana rounded-lg h-9 flex justify-center items-center mr-2 p-1'
            >
              بروزرسانی
            </button>
            <button
              onClick={(e) => {
                infoHandler(params);
              }}
              className='bg-sky-500 font-dana rounded-lg h-9 flex justify-center items-center mr-2 p-1'
            >
              پیش نمایش
            </button>
          </>
        );
      }
    }
  ];

  const rows = [...courses];
  console.log('rows' , rows)
  // const usersData;
  useEffect(() => {
    dispatch(getCoursesFromServer("/api/course"));
  }, []);
  // console.log("user data: ", usersData)
  return (
    <div className=' '>
      { !showUpdateCourse && !showPreviewCourse && (<Box
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
      </Box>)}

      {showUpdateCourse && !showPreviewCourse && <UpdateCourseEditor rowData={rowData} onUpdate={updateDone} />}

     {showPreviewCourse && !showUpdateCourse && <CoursePreviewHandler data={rowData} />}
   
    </div>
  );
}

