"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { TiUserAddOutline } from "react-icons/ti";
import { HiOutlineUserRemove } from "react-icons/hi";
import { LiaUserEditSolid } from "react-icons/lia";
import { PiUserList } from "react-icons/pi";
import { SiGoogleclassroom } from "react-icons/si";
import { RiDeleteBin2Line } from "react-icons/ri";
import { GrUpdate } from "react-icons/gr";
import { BiCommentDetail } from "react-icons/bi";
import { BiCommentCheck } from "react-icons/bi";
import { CgPlayListRemove } from "react-icons/cg";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { TbArticleOff } from "react-icons/tb";
import { TbArticle } from "react-icons/tb";
import { CiViewList } from "react-icons/ci";
import { TfiWrite } from "react-icons/tfi";
import EditNoteIcon from '@mui/icons-material/EditNote';
import { TbChalkboard } from "react-icons/tb";
import { TbChalkboardOff } from "react-icons/tb";
import { LuClipboardEdit } from "react-icons/lu";
import { selectOption } from "@/Redux/CMS/CMSRoutes";
import { useDispatch } from "react-redux";
import { ImProfile } from "react-icons/im";
import { VscAccount } from "react-icons/vsc";



type Props = {
  icon: JSX.Element;
  title: string;
  showSubMenu:boolean,
  onHandleEvent:()=>void,
  cmsType:string,
};

export default function SideBarIcon(props: Props): JSX.Element {
 

const dispatch = useDispatch()

 return (
    <div>
      <div onClick={props.onHandleEvent} className=''>
        {props.icon}
      </div>


     {/* TEACHER ICONS */}
      {props.cmsType === 'teacher' && (<>

      {/* {props.showSubMenu && props.title === 'users' &&  */}

      {props.showSubMenu && props.title === 'articles' && <div className="flex flex-col justify-center items-center my-1">
        <TbArticle className="font-light text-lg my-1" onClick={()=>dispatch(selectOption("ADD_ARTICLE"))}/>
        <TbArticleOff className="font-light text-lg my-1" onClick={()=>dispatch(selectOption("REMOVE_ARTICLE"))}/>
        <EditNoteIcon className="font-light text-lg my-1" onClick={()=>dispatch(selectOption("EDIT_ARTICLE"))}/>
        </div>}

      {props.showSubMenu && props.title === 'courses' && <div className="flex flex-col justify-center items-center my-1">
        <TbChalkboard className="font-light text-lg my-1" onClick={()=>dispatch(selectOption("ADD_COURSE"))}/>
        <TbChalkboardOff  className="font-light text-lg my-1" onClick={()=>dispatch(selectOption("REMOVE_COURSE"))}/>
        < LuClipboardEdit className="font-light text-lg my-1" onClick={()=>dispatch(selectOption("EDIT_COURSE"))}/>
        </div>}

      {props.showSubMenu && props.title === 'posts' && <div className="flex flex-col justify-center items-center my-1">
        <MdOutlinePlaylistAdd className="font-light text-lg my-1" onClick={()=>dispatch(selectOption("ADD_POST"))}/>
        <CgPlayListRemove  className="font-light text-lg my-1" onClick={()=>dispatch(selectOption("REMOVE_POST"))}/>
        <EditNoteIcon className="font-light text-lg my-1" onClick={()=>dispatch(selectOption("EDIT_POST"))}/>
         </div>}

      {props.showSubMenu && props.title === 'comments' && <div className="flex flex-col justify-center items-center my-1">
        <BiCommentDetail  className="font-light text-lg my-1" onClick={()=>dispatch(selectOption("LIST_COMMENT"))}/>
        <BiCommentCheck className="font-light text-lg my-1" onClick={()=>dispatch(selectOption("VALIDATE_COMMENT"))}/>
        </div>}
        
      </>)}


      {/* ADMIN ICONS */}
      {props.cmsType === 'admin' && (<>

      {props.showSubMenu && props.title === 'users' && <div className="flex flex-col justify-center items-center my-1">
        <PiUserList className="font-light text-lg my-1" onClick={()=>dispatch(selectOption("LIST_USER"))}/>
        <TiUserAddOutline className="font-light text-lg my-1" onClick={()=>dispatch(selectOption("ADD_USER"))}/>
        <HiOutlineUserRemove  className="font-light text-lg my-1 " onClick={()=>dispatch(selectOption("REMOVE_USER"))}/>
        < LiaUserEditSolid className="font-light text-lg my-1" onClick={()=>dispatch(selectOption("EDIT_USER"))}/>
        </div>}

      {props.showSubMenu && props.title === 'articles' && <div className="flex flex-col justify-center items-center my-1">
        <TbArticle className="font-light text-lg my-1" onClick={()=>dispatch(selectOption("ADD_ARTICLE"))}/>
        <TbArticleOff className="font-light text-lg my-1" onClick={()=>dispatch(selectOption("REMOVE_ARTICLE"))}/>
        <EditNoteIcon className="font-light text-lg my-1" onClick={()=>dispatch(selectOption("EDIT_ARTICLE"))}/>
        </div>}

      {props.showSubMenu && props.title === 'courses' && <div className="flex flex-col justify-center items-center my-1">
        <SiGoogleclassroom className="font-light text-lg my-1" onClick={()=>dispatch(selectOption("ADD_COURSE"))}/>
        <RiDeleteBin2Line className="font-light text-lg my-1" onClick={()=>dispatch(selectOption("REMOVE_COURSE"))}/>
        <GrUpdate className="font-light text-lg my-1" onClick={()=>dispatch(selectOption("EDIT_COURSE"))}/>
        </div>}

      {props.showSubMenu && props.title === 'posts' && <div className="flex flex-col justify-center items-center my-1">
        <MdOutlinePlaylistAdd className="font-light text-lg my-1" onClick={()=>dispatch(selectOption("ADD_POST"))}/>
        <CgPlayListRemove  className="font-light text-lg my-1" onClick={()=>dispatch(selectOption("REMOVE_POST"))}/>
        <EditNoteIcon className="font-light text-lg my-1" onClick={()=>dispatch(selectOption("EDIT_POST"))}/>
         </div>}

      {props.showSubMenu && props.title === 'comments' && <div className="flex flex-col justify-center items-center my-1">
        <BiCommentDetail  className="font-light text-lg my-1" onClick={()=>dispatch(selectOption("LIST_COMMENT"))}/>
        <BiCommentCheck className="font-light text-lg my-1" onClick={()=>dispatch(selectOption("VALIDATE_COMMENT"))}/>
        </div>}

      </>)}

      {/* STUDENT ICONS */}
      {props.cmsType === 'student' && (<>

     

      {props.showSubMenu && props.title === 'users' && <div className="flex flex-col justify-center items-center my-1">
        < VscAccount className="font-light text-lg my-1"  onClick={()=>dispatch(selectOption("EDIT_PROFILE"))}/>
        </div>}

      {props.showSubMenu && props.title === 'articles' && <div className="flex flex-col justify-center items-center my-1">
        <TbArticle className="font-light text-lg my-1"  onClick={()=>dispatch(selectOption("ADD_ARTICLE"))}/>
        <TfiWrite className="font-light text-lg my-1"  onClick={()=>dispatch(selectOption("EDIT_ARTICLE"))}/>
        </div>}

      {props.showSubMenu && props.title === 'courses' && <div className="flex flex-col justify-center items-center my-1">
        <CiViewList className="font-light text-lg my-1"  onClick={()=>dispatch(selectOption("VIEW_COURSE"))}/>
        </div>}



      </>)}
      
    </div>
  );
}
