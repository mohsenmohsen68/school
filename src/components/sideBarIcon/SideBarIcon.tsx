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

type Props = {
  icon: JSX.Element;
  title: string;
  showSubMenu:boolean,
  onHandleEvent:()=>void,
  cmsType:string,
};

export default function SideBarIcon(props: Props): JSX.Element {
 



 return (
    <div>
      <div onClick={props.onHandleEvent} className=''>
        {props.icon}
      </div>


     {/* TEACHER ICONS */}
      {props.cmsType === 'teacher' && (<>

      {props.showSubMenu && props.title === 'users' && <div className="flex flex-col justify-center items-center my-1">
        <PiUserList className="font-light text-lg my-1"/>
        <TiUserAddOutline className="font-light text-lg my-1"/>
        <HiOutlineUserRemove  className="font-light text-lg my-1 "/>
        < LiaUserEditSolid className="font-light text-lg my-1"/>
        </div>}

      {props.showSubMenu && props.title === 'articles' && <div className="flex flex-col justify-center items-center my-1">
        <TbArticle className="font-light text-lg my-1"/>
        <TbArticleOff className="font-light text-lg my-1"/>
        <EditNoteIcon className="font-light text-lg my-1"/>
        </div>}

      {props.showSubMenu && props.title === 'courses' && <div className="flex flex-col justify-center items-center my-1">
        <SiGoogleclassroom className="font-light text-lg my-1"/>
        <RiDeleteBin2Line className="font-light text-lg my-1"/>
        <GrUpdate className="font-light text-lg my-1"/>
        </div>}

      {props.showSubMenu && props.title === 'posts' && <div className="flex flex-col justify-center items-center my-1">
        <MdOutlinePlaylistAdd className="font-light text-lg my-1"/>
        <CgPlayListRemove  className="font-light text-lg my-1"/>
        <EditNoteIcon className="font-light text-lg my-1"/>
         </div>}

      {props.showSubMenu && props.title === 'comments' && <div className="flex flex-col justify-center items-center my-1">
        <BiCommentDetail  className="font-light text-lg my-1"/>
        <BiCommentCheck className="font-light text-lg my-1"/>
        </div>}
        
      </>)}


      {/* ADMIN ICONS */}
      {props.cmsType === 'admin' && (<>

      {props.showSubMenu && props.title === 'users' && <div className="flex flex-col justify-center items-center my-1">
        <PiUserList className="font-light text-lg my-1"/>
        <TiUserAddOutline className="font-light text-lg my-1"/>
        <HiOutlineUserRemove  className="font-light text-lg my-1 "/>
        < LiaUserEditSolid className="font-light text-lg my-1"/>
        </div>}

      {props.showSubMenu && props.title === 'articles' && <div className="flex flex-col justify-center items-center my-1">
        <TbArticle className="font-light text-lg my-1"/>
        <TbArticleOff className="font-light text-lg my-1"/>
        <EditNoteIcon className="font-light text-lg my-1"/>
        </div>}

      {props.showSubMenu && props.title === 'courses' && <div className="flex flex-col justify-center items-center my-1">
        <SiGoogleclassroom className="font-light text-lg my-1"/>
        <RiDeleteBin2Line className="font-light text-lg my-1"/>
        <GrUpdate className="font-light text-lg my-1"/>
        </div>}

      {props.showSubMenu && props.title === 'posts' && <div className="flex flex-col justify-center items-center my-1">
        <MdOutlinePlaylistAdd className="font-light text-lg my-1"/>
        <CgPlayListRemove  className="font-light text-lg my-1"/>
        <EditNoteIcon className="font-light text-lg my-1"/>
         </div>}

      {props.showSubMenu && props.title === 'comments' && <div className="flex flex-col justify-center items-center my-1">
        <BiCommentDetail  className="font-light text-lg my-1"/>
        <BiCommentCheck className="font-light text-lg my-1"/>
        </div>}

      </>)}

      {/* STUDENT ICONS */}
      {props.cmsType === 'student' && (<>

     

      {props.showSubMenu && props.title === 'articles' && <div className="flex flex-col justify-center items-center my-1">
        <TbArticle className="font-light text-lg my-1"/>
        <TfiWrite className="font-light text-lg my-1"/>
        </div>}

      {props.showSubMenu && props.title === 'courses' && <div className="flex flex-col justify-center items-center my-1">
        <CiViewList className="font-light text-lg my-1"/>
        </div>}



      </>)}
      
    </div>
  );
}
