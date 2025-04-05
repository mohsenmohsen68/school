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
import {
  deleteComment,
  getCommentsFromServer,
  updateComment
} from "@/Redux/comments/Comments";
import UpdateCommentEditor from "@/components/UpdateCommentEditor/UpdateCommentEditor";
import { selectOption } from "@/Redux/CMS/CMSRoutes";
import { MdOutlineCheck } from "react-icons/md";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4
};

export default function ListComment({ user }) {
  const dispatch = useDispatch<AppDispatch>();
  // const comments = useSelector<RootState>((state) => state.comments);
  const [comments, setComments] = useState([]);
  const [showUpdateComment, setShowUpdateComment] = useState(false);
  const [rowData, setRowData] = useState({});
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [myTitle, setMyTitle] = useState("");
  const [myBody, setMyBody] = useState("");
  const [isValidComment, setIsValidComment] = useState(false);

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
      customClass: {
        title: "font-moraba",
        // actions: style.action,
        confirmButton: "font-moraba",
        cancelButton: "font-moraba"
      },
      position: "bottom-end",
      title: " آیا از حذف پیام اطمینان دارید ؟ ",
      icon: "warning",
      showConfirmButton: true,
      confirmButtonText: "بلی",
      confirmButtonColor: "orange",
      showCancelButton: true,
      cancelButtonText: "خیر",
      cancelButtonColor: "blue"
    }).then(async (result) => {
      // the user confirms to remove the selected user ...
      if (result.isConfirmed === true) {
        const result = await dispatch(deleteComment(params.row._id));
        console.log("remove comment result : ", result);
        if (result.payload.status === 200) {
          Toast.fire({
            icon: "success",
            customClass: {
              title: "font-moraba"
            },
            title: "پیام با موفقیت حذف شد ..."
          });
          const res = await dispatch(getCommentsFromServer());
          let allComments = res.payload.data;
          let thisTeacherComments = allComments.map((item) => {
            console.log("b  ", item);
            if (item.course.teacher === user._id) {
              return item;
            }
          });
          setComments(thisTeacherComments);
        } else if (result.payload.status === 404) {
          Toast.fire({
            icon: "error",
            customClass: {
              title: "font-moraba"
            },
            title: "پیامی با این کد وجود ندارد ..."
          });
        }
      } else {
        console.log("cancel shod ...");
      }
    });
  };

  const updateDone = () => {
    setShowUpdateComment(false);
  };

  const showHandler = (params) => {
    setMyBody(params.row.commentBody);
    setMyTitle(params.row.commentTitle);
    handleOpen();
  };

  const editHandler = async (params) => {
    console.log("params", params.row);
    setRowData(params.row);
    setShowUpdateComment(true);
  };

  const validationHandler = async (params) => {
    setIsValidComment((prev) => !prev);
    const body = {
      id: params.row._id,
      commentTitle: params.row.commentTitle,
      commentBody: params.row.body,
      commentDate: params.row.commentDate,
      user: params.row.user,
      commentToBeShown: !params.row.commentToBeShown,
      answers: params.row.answers,
      score: params.row.score,
      course: params.row.course
    };
    console.log(" ----  bodddddddddy ---", body);
    const result = await dispatch(updateComment(body));
    console.log("result of adding article :", result.payload);
    if (result.payload.status === 200) {
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
      dispatch(selectOption("LIST_TEACHER_COMMENT"));
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
    const res = await dispatch(getCommentsFromServer());
    let allComments = res.payload.data;
    let thisTeacherComments = allComments.map((item) => {
      console.log("b  ", item);
      if (item.course.teacher === user._id) {
        return item;
      }
    });
    setComments(thisTeacherComments);
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
      renderCell: (params) => {
        return (
          <div>
            {new Intl.DateTimeFormat("fa-IR").format(params.row.commentDate)}
          </div>
        );
      },
      headerAlign: "center",
      width: 100
    },
    {
      field: "commentToBeShown",
      headerName: "تایید شده",
      headerClassName:
        "bg-slate-200 dark:bg-slate-700 dark:text-white font-moraba",
      cellClassName:
        "font-dana flex justify-center items-center dark:text-white",
      renderCell: (params) => {
        return (
          <div
            className={`${
              params.row.commentToBeShown ? "bg-green-500" : "bg-red-500"
            } flex justify-center items-center mx-auto w-7 h-7 rounded-full`}
          >
            {params.row.commentToBeShown ? <MdOutlineCheck /> : <RxCross2 />}
          </div>
        );
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
      renderCell: (params) => {
        return (
          <div>
            {params.row.user.firstName} {params.row.user.lastName}
          </div>
        );
      },
      headerAlign: "center",
      width: 150
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
                showHandler(params);
              }}
              className='bg-sky-500 font-dana rounded-lg h-9 flex justify-center items-center mr-2 p-1'
            >
              نمایش
            </button>
            <button
              onClick={(e) => {
                validationHandler(params);
              }}
              className={`${params.row.commentToBeShown && "bg-orange-500"} ${
                !params.row.commentToBeShown && "bg-green-500"
              }  font-dana rounded-lg h-9 flex justify-center items-center mr-2 p-1`}
            >
              {params.row.commentToBeShown && " عدم تایید"}
              {!params.row.commentToBeShown && " تایید"}
            </button>
          </>
        );
      }
    }
  ];

  const rows = [...comments];
  console.log("rows", comments);
  // const usersData;
  useEffect(() => {
    const a = async () => {
      const res = await dispatch(getCommentsFromServer());
      console.log("res : ", res);
      let allComments = res.payload.data;
      let thisTeacherComments = allComments.map((item) => {
        console.log("b  ", item);
        if (item.course.teacher === user._id) {
          return item;
        }
      });
      setComments(thisTeacherComments);
    };
    a();
  }, []);
  // console.log("user data: ", usersData)
  return (
    <div className=' font-dana '>
      {!showUpdateComment && (
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
            className='bg-slate-200 dark:bg-slate-700 font-dana'
            localeText={faIR.components.MuiDataGrid.defaultProps.localeText}
          />
        </Box>
      )}

      {showUpdateComment && (
        <UpdateCommentEditor rowData={rowData} onUpdate={updateDone} />
      )}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography
            id='modal-modal-title'
            variant='h6'
            component='h2'
            className='font-dana'
          >
            {myTitle}
          </Typography>
          <Typography
            id='modal-modal-description'
            sx={{ mt: 2 }}
            className='font-dana'
          >
            {myBody}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
