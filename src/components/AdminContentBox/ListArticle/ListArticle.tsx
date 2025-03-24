"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteArticle, getArticlesFromServer } from "@/Redux/articles/Articles";
import { AppDispatch, RootState } from "@/Redux/Store";
import Box from "@mui/material/Box";
import { GridColDef, DataGrid } from "@mui/x-data-grid";
import { v4 as uuidv4 } from "uuid";
import { faIR } from "@mui/x-data-grid/locales";
import Swal from "sweetalert2";
import UpdateArticleEditor from './../../UpdateArticleEditor/UpdateArticleEditor'
import ArticlePreviewHandler from "@/components/ArticlePreviewHandler/ArticlePreviewHandler";

export default function ListArticles() {
  const dispatch = useDispatch<AppDispatch>();
  const articles = useSelector<RootState>((state) => state.articles);
  const [showUpdateArticle,setShowUpdateArticle] = useState(false)
  const [showPreviewArticle,setShowPreviewArticle] = useState(false)
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

  const removeHandler =async (params) => {
    console.log('articleID ::: ',params.row.articleID)

    Swal.fire({
      toast: true,
      customClass:{
       title: "font-moraba",
       // actions: style.action,
       confirmButton: "font-moraba",
       cancelButton: "font-moraba",
      },
      position: "bottom-end",
      title:' آیا از حذف مقاله اطمینان دارید ؟ ',
      icon:'warning',
      showConfirmButton:true,
      confirmButtonText:'بلی',
      confirmButtonColor: 'orange',
      showCancelButton:true,
      cancelButtonText:"خیر",
      cancelButtonColor: 'blue'

    }).then(result => {
      // the user confirms to remove the selected article ...
       if(result.isConfirmed === true){
          dispatch(deleteArticle(params.row.articleID)).then(result => {
            console.log('remove article result : ',result)
            if(result.payload.status === 200){
              Toast.fire({
                icon: "success",
                customClass:{
                  title: "font-moraba",
                 },
                title: "مقاله با موفقیت حذف شد ..."
              });
              dispatch(getArticlesFromServer("/api/articles"));
              
  
            }else if(result.payload.status === 404){
              Toast.fire({
                icon: "error",
                customClass:{
                  title: "font-moraba",
                 },
                title: "مقاله ای با این کد وجود ندارد ..."
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

  const updateDone = ()=>{
    setShowUpdateArticle(false);
  }
  const editHandler = async( params ) => {
    console.log('params' , params.row)
    setRowData(params.row)
    setShowUpdateArticle(true);
    setShowPreviewArticle(false) 

  };
  const infoHandler = async( params ) => {
    console.log('params' , params.row)
    setRowData(params.row)
    setShowPreviewArticle(true)
    setShowUpdateArticle(false);  
  };

  const columns: GridColDef[] = [
    {
      field: "title",
      headerName: "عنوان مقاله",
      headerClassName:
        "bg-slate-200 dark:bg-slate-700 dark:text-white font-moraba",
      cellClassName:
        "font-dana justify-center item-center text-center dark:text-white",
      headerAlign: "center",
      width: 300
    },
    {
      field: "writer",
      headerName: "نویسنده",
      headerClassName:
        "bg-slate-200 dark:bg-slate-700 dark:text-white font-moraba",
      cellClassName:
        "font-dana justify-center item-center text-center dark:text-white",
      headerAlign: "center",
      width: 200
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
      field: "cluster",
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

  const rows = [...articles];
  // console.log('rows' , rows)
  // const usersData;
  useEffect(() => {
    dispatch(getArticlesFromServer("/api/articles"));
  }, []);
  // console.log("user data: ", usersData)
  return (
    <div className=' '>
      
      { !showUpdateArticle && !showPreviewArticle && (<Box
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


     {showUpdateArticle && !showPreviewArticle && <UpdateArticleEditor rowData={rowData} onUpdate={updateDone} />}

     {showPreviewArticle && !showUpdateArticle && <ArticlePreviewHandler data={rowData} />}
    </div>
  );
}

