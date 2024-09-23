"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/Redux/Store";
import Box from "@mui/material/Box";
import { GridColDef, DataGrid } from "@mui/x-data-grid";
import { v4 as uuidv4 } from "uuid";
import { faIR } from "@mui/x-data-grid/locales";
import Swal from "sweetalert2";
import { RxCross2 } from "react-icons/rx";
import { deleteComment, getCommentsFromServer, updateComment } from "@/Redux/comments/Comments";
import UpdateCommentEditor from "@/components/UpdateCommentEditor/UpdateCommentEditor";
import { selectOption } from "@/Redux/CMS/CMSRoutes";
import { MdOutlineCheck } from "react-icons/md";

export default function ListComment() {
  const dispatch = useDispatch<AppDispatch>();
  const comments = useSelector<RootState>((state) => state.comments);
  const [showUpdateComment,setShowUpdateComment] = useState(false)
  const [isValidComment,setIsValidComment] = useState(false)
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
      title:' آیا از حذف پیام اطمینان دارید ؟ ',
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
        dispatch(deleteComment(params.row.commentID)).then(result => {
          console.log('remove comment result : ',result)
          if(result.payload.status === 200){
            Toast.fire({
              icon: "success",
              customClass:{
                title: "font-moraba",
               },
              title: "پیام با موفقیت حذف شد ..."
            });
            dispatch(getCommentsFromServer());
            

          }else if(result.payload.status === 404){
            Toast.fire({
              icon: "error",
              customClass:{
                title: "font-moraba",
               },
              title: "پیامی با این کد وجود ندارد ..."
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
    setShowUpdateComment(false);
  }
  const editHandler = async( params ) => {
    console.log('params' , params.row)
    setRowData(params.row)
    setShowUpdateComment(true); 

  };

  const renderStatus = ()=>{
    return (
      <div>

      </div>
    );
  }

  const validationHandler = async( params ) => {
   setIsValidComment(prev => !prev)
    const body = {
      commentID:  params.row.commentID,
      commentTitle:  params.row.commentTitle,
      commentBody:  params.row.body,
      commentDate:  params.row.commentDate,
      commentAuthor:  params.row.commentAuthor,
      commentToBeShown: !params.row.commentToBeShown,
      answers:  params.row.answers
    };
    console.log(" ----  bodddddddddy ---", body);
    const result = await dispatch(updateComment(body));
    console.log("result of adding article :", result.payload);
    if (result.payload.status === 200)  {
      Toast.fire({
        toast: true,
        customClass: {
          title: "font-moraba",
          htmlContainer: "bg-slate-200 dark:bg-slate-700"
        },
        position: "bottom-end",
        title: "  عملیات انجام گردید ... ",
        icon: "success"
      });
      dispatch(selectOption("LIST_COMMENT"));
    } else {
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
    dispatch(getCommentsFromServer())
  };


  const columns: GridColDef[] = [
    {
      field: "commentTitle",
      headerName: "موضوع پیام",
      headerClassName:
        "bg-slate-200 dark:bg-slate-700 dark:text-white font-moraba",
      cellClassName:
        "font-dana justify-center item-center text-center dark:text-white",
      headerAlign: "center",
      width: 200
    },
    {
      field: "commentBody",
      headerName: "متن پیام",
      headerClassName:
        "bg-slate-200 dark:bg-slate-700 dark:text-white font-moraba",
      cellClassName:
        "font-dana justify-center item-center text-center dark:text-white",
      headerAlign: "center",
      width: 200
    },
   
    {
      field: "commentDate",
      headerName: "تاریخ انتشار",
      headerClassName:
        "bg-slate-200 dark:bg-slate-700 dark:text-white font-moraba",
      cellClassName:
        "font-dana justify-center item-center text-center dark:text-white",
      headerAlign: "center",
      width: 100
    },
    {
      field: "commentToBeShown",
      headerName: "تایید شده",
      headerClassName:
        "bg-slate-200 dark:bg-slate-700 dark:text-white font-moraba",
      cellClassName:
        "font-dana flex justify-center items-center text-center dark:text-white",
        renderCell: (params)=>{
           return (
            <div className={`${params.row.commentToBeShown ? "bg-green-500": "bg-red-500"} w-7 h-7 flex justify-center items-center rounded-full`} >
            {params.row.commentToBeShown ? <MdOutlineCheck/>:<RxCross2/>}
            </div>
           )
        },
      headerAlign: "center",
      width: 100
    },
 
    {
      field: "commentAuthor",
      headerName: " نویسنده",
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
                validationHandler(params);
              }}
              className = {`${params.row.commentToBeShown && 'bg-orange-500' } ${!params.row.commentToBeShown  && 'bg-green-500' }  font-dana rounded-lg h-9 flex justify-center items-center mr-2 p-1`}
            >
             {params.row.commentToBeShown && " عدم تایید"}
             {!params.row.commentToBeShown &&" تایید" }
            </button>
          </>
        );
      }
    }
  ];

  const rows = [...comments];
  console.log('rows' , rows)
  // const usersData;
  useEffect(() => {
    dispatch(getCommentsFromServer("/api/comment"));
  }, []);
  // console.log("user data: ", usersData)
  return (
    <div className=' '>
      { !showUpdateComment && (<Box
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

      {showUpdateComment && <UpdateCommentEditor rowData={rowData} onUpdate={updateDone} />}

     
   
    </div>
  );
}

