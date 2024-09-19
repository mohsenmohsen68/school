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
import { deletePost, getPostsFromServer } from "@/Redux/posts/Posts";
import PostPreviewHandler from "@/components/PostPreviewHandler/PostPreviewHandler";
import UpdatePostEditor from "@/components/UpdatePostEditor/UpdatePostEditor";

export default function ListArticles() {
  const dispatch = useDispatch<AppDispatch>();
  const posts = useSelector<RootState>((state) => state.posts);
  const [showUpdatePost,setShowUpdatePost] = useState(false)
  const [showPreviewPost,setShowPreviewPost] = useState(false)
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
    
    Swal.fire({
      toast: true,
      customClass:{
       title: "font-moraba",
       // actions: style.action,
       confirmButton: "font-moraba",
       cancelButton: "font-moraba",
      },
      position: "bottom-end",
      title:' آیا از حذف پست اطمینان دارید ؟ ',
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
         dispatch(deletePost(params.row.postID)).then(result => {
          if(result.payload.status === 200){
            Toast.fire({
              icon: "success",
              customClass:{
                title: "font-moraba",
               },
              title: "پست با موفقیت حذف شد ..."
            });
            dispatch(getPostsFromServer());
            

          }else if(result.payload.status === 404){
            Toast.fire({
              icon: "error",
              customClass:{
                title: "font-moraba",
               },
              title: "پستی با این کد وجود ندارد ..."
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
    setShowUpdatePost(false);
  }

  const editHandler = (params) => {
    console.log('params' , params.row)
    setRowData(params.row)
    setShowUpdatePost(true);
    setShowPreviewPost(false) 
  };


  const infoHandler = (params) => {
    console.log('params' , params.row)
    setRowData(params.row)
    setShowPreviewPost(true)
    setShowUpdatePost(false); 
  };

  const columns: GridColDef[] = [
    {
      field: "title",
      headerName: "عنوان پست",
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

  const rows = [...posts];
  // console.log('rows' , rows)
  // const usersData;
  useEffect(() => {
    dispatch(getPostsFromServer());
  }, []);
  // console.log("user data: ", usersData)
  return (
    <div className=' '>
     { !showUpdatePost && !showPreviewPost && (<Box
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

      {showUpdatePost && !showPreviewPost && <UpdatePostEditor rowData={rowData} onUpdate={updateDone} />}

      {showPreviewPost && !showUpdatePost && <PostPreviewHandler data={rowData} />}

    </div>
  );
}

