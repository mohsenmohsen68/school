'use client'
import React, {useState} from 'react'
import SideBarIcon from '../sideBarIcon/SideBarIcon'
import { FaUsers } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa6";
import { GrArticle } from "react-icons/gr";
import { BsFileEarmarkPost } from "react-icons/bs";
import { FaChalkboardTeacher } from "react-icons/fa";

export default function CmsSidebar() {
    const [showUsers, setShowUsers] = useState<boolean>(false);
    const [showCourses, setShowCourses] = useState<boolean>(false);
    const [showArticles, setShowArticles] = useState<boolean>(false);
    const [showComments, setShowComments] = useState<boolean>(false);
    const [showPosts, setShowPosts] = useState<boolean>(false);

const clearWindows=()=>{
    setShowUsers(false);
    setShowArticles(false);
    setShowCourses(false);
    setShowPosts(false);
    setShowComments(false);
}

  return (
    <div
    id='sidebar'
    className='h-dvh w-20 bg-slate-200 dark:bg-slate-700 flex flex-col overflow-hidden justify-start items-center child:text-3xl child:my-2'
  >
       <SideBarIcon title='users' icon={<FaUsers/>} showSubMenu={showUsers} onHandleEvent = {()=>{clearWindows(); setShowUsers(!showUsers); }} />
        <SideBarIcon title='articles' icon={<GrArticle/>} showSubMenu={showArticles} onHandleEvent = {()=>{clearWindows(); setShowArticles(!showArticles) ; }}/>
        <SideBarIcon title='comments' icon={<FaRegCommentDots/>} showSubMenu={showComments} onHandleEvent = {()=>{clearWindows(); setShowComments(!showComments); }}/>
        <SideBarIcon title='posts' icon={<BsFileEarmarkPost/>} showSubMenu={showPosts} onHandleEvent = {()=>{clearWindows(); setShowPosts(!showPosts); }}/>
        <SideBarIcon title='courses' icon={<FaChalkboardTeacher/>} showSubMenu={showCourses} onHandleEvent = {()=>{clearWindows(); setShowCourses(!showCourses); }}/>
    </div>
  )
}
