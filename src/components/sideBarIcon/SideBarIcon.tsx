"use client";
import React, { useEffect, useState } from "react";
import { TiUserAddOutline } from "react-icons/ti";
import { HiOutlineUserRemove } from "react-icons/hi";
import { LiaUserEditSolid } from "react-icons/lia";
import { PiUserList } from "react-icons/pi";
import { SiGoogleclassroom } from "react-icons/si";
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
import { VscAccount } from "react-icons/vsc";
import { PiListPlus } from "react-icons/pi";
import { FaRegSquarePlus } from "react-icons/fa6";
import { IoIosAddCircleOutline } from "react-icons/io";
import { RiUserSettingsLine } from "react-icons/ri";
import { LuMailQuestion } from "react-icons/lu";
import { FaRegEdit } from "react-icons/fa";
import { LuView } from "react-icons/lu";

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

        {props.showSubMenu && props.title === 'clusters' && <div className="flex flex-col justify-center items-center my-1">
        <FaRegEdit className="font-light text-lg my-1 " onClick={()=>dispatch(selectOption("MANAGE_CLUSTERS"))}/>
        <LuView className="font-light text-lg my-1 " onClick={()=>dispatch(selectOption("PREVIEW_CLUSTER"))}/>
        </div>}

      {props.showSubMenu && props.title === 'articles' && <div className="flex flex-col justify-center items-center my-1">
      <TbArticle className="font-light text-lg my-1" onClick={()=>dispatch(selectOption("LIST_TEACHER_ARTICLE"))}/>
        <PiListPlus className="font-light text-lg my-1" onClick={()=>dispatch(selectOption("ADD_TEACHER_ARTICLE"))}/>
        
        </div>}

      {props.showSubMenu && props.title === 'courses' && <div className="flex flex-col justify-center items-center my-1">
      <SiGoogleclassroom className="font-light text-lg my-1" onClick={()=>dispatch(selectOption("LIST_TEACHER_COURSE"))}/>
        <FaRegSquarePlus className="font-light text-lg my-1" onClick={()=>dispatch(selectOption("ADD_TEACHER_COURSE"))}/>
       
        </div>}

      

      {props.showSubMenu && props.title === 'comments' && <div className="flex flex-col justify-center items-center my-1">
      <BiCommentDetail  className="font-light text-lg my-1" onClick={()=>dispatch(selectOption("LIST_TEACHER_COMMENT"))}/>
      </div>}

        {props.showSubMenu && props.title === 'setting' && <div className="flex flex-col justify-center items-center my-1">
        <RiUserSettingsLine className="font-light text-lg my-1" onClick={()=>dispatch(selectOption("TEACHER_SETTING"))}/>
        </div>}
        
      </>)}


      {/* ADMIN ICONS */}
      {props.cmsType === 'admin' && (<>

      {props.showSubMenu && props.title === 'users' && <div className="flex flex-col justify-center items-center my-1">
        <PiUserList className="font-light text-lg my-1" onClick={()=>dispatch(selectOption("LIST_USER"))}/>
        <TiUserAddOutline className="font-light text-lg my-1" onClick={()=>dispatch(selectOption("ADD_USER"))}/>
        <HiOutlineUserRemove  className="font-light text-lg my-1 " onClick={()=>dispatch(selectOption("REMOVE_USER"))}/>
        <LiaUserEditSolid className="font-light text-lg my-1" onClick={()=>dispatch(selectOption("EDIT_USER"))}/>
        </div>}
      {props.showSubMenu && props.title === 'clusters' && <div className="flex flex-col justify-center items-center my-1">
        <IoIosAddCircleOutline className="font-light text-lg my-1 " onClick={()=>dispatch(selectOption("MANAGE_CLUSTERS"))}/>
        </div>}

      {props.showSubMenu && props.title === 'articles' && <div className="flex flex-col justify-center items-center my-1">
        <TbArticle className="font-light text-lg my-1" onClick={()=>dispatch(selectOption("LIST_ARTICLE"))}/>
        <PiListPlus className="font-light text-lg my-1" onClick={()=>dispatch(selectOption("ADD_ARTICLE"))}/>
        </div>}

      {props.showSubMenu && props.title === 'courses' && <div className="flex flex-col justify-center items-center my-1">
        <SiGoogleclassroom className="font-light text-lg my-1" onClick={()=>dispatch(selectOption("LIST_COURSE"))}/>
        <FaRegSquarePlus className="font-light text-lg my-1" onClick={()=>dispatch(selectOption("ADD_COURSE"))}/>
        </div>}
      {props.showSubMenu && props.title === 'setting' && <div className="flex flex-col justify-center items-center my-1">
        <RiUserSettingsLine className="font-light text-lg my-1" onClick={()=>dispatch(selectOption("ADMIN_SETTING"))}/>
        </div>}

      {props.showSubMenu && props.title === 'posts' && <div className="flex flex-col justify-center items-center my-1">
        <TbArticle  className="font-light text-lg my-1" onClick={()=>dispatch(selectOption("LIST_POST"))}/>
        <PiListPlus className="font-light text-lg my-1" onClick={()=>dispatch(selectOption("ADD_POST"))}/>
         </div>}

      {props.showSubMenu && props.title === 'comments' && <div className="flex flex-col justify-center items-center my-1">
        <BiCommentDetail  className="font-light text-lg my-1" onClick={()=>dispatch(selectOption("LIST_COMMENT"))}/>
        <LuMailQuestion className="font-light text-lg my-1" onClick={()=>dispatch(selectOption("LIST_TICKET"))}/>
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

        {props.showSubMenu && props.title === 'setting' && <div className="flex flex-col justify-center items-center my-1">
        <RiUserSettingsLine className="font-light text-lg my-1" onClick={()=>dispatch(selectOption("STUDENT_SETTING"))}/>
        </div>}


      </>)}
      
    </div>
  );
}
