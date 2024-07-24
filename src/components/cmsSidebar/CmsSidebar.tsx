'use client'
import React, {useState} from 'react'
import SideBarIcon from '../sideBarIcon/SideBarIcon'
import { FaUsers } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa6";
import { GrArticle } from "react-icons/gr";
import { BsFileEarmarkPost } from "react-icons/bs";
import { FaChalkboardTeacher } from "react-icons/fa";

type CMSType = {
    cmsType:string
}

export default function CmsSidebar(props: CMSType):JSX.Element {
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
        {props.cmsType === 'teacher' && (<>
            <SideBarIcon title='users' cmsType={props.cmsType} icon={<FaUsers/>} showSubMenu={showUsers} onHandleEvent = {()=>{clearWindows(); setShowUsers(!showUsers); }} />
            <SideBarIcon title='articles' cmsType={props.cmsType} icon={<GrArticle/>} showSubMenu={showArticles} onHandleEvent = {()=>{clearWindows(); setShowArticles(!showArticles) ; }}/>
            <SideBarIcon title='comments' cmsType={props.cmsType} icon={<FaRegCommentDots/>} showSubMenu={showComments} onHandleEvent = {()=>{clearWindows(); setShowComments(!showComments); }}/>
            <SideBarIcon title='posts' cmsType={props.cmsType} icon={<BsFileEarmarkPost/>} showSubMenu={showPosts} onHandleEvent = {()=>{clearWindows(); setShowPosts(!showPosts); }}/>
            <SideBarIcon title='courses' cmsType={props.cmsType} icon={<FaChalkboardTeacher/>} showSubMenu={showCourses} onHandleEvent = {()=>{clearWindows(); setShowCourses(!showCourses); }}/>
        </>)}
        {props.cmsType === 'admin' && (<>
            <SideBarIcon title='users' cmsType={props.cmsType} icon={<FaUsers/>} showSubMenu={showUsers} onHandleEvent = {()=>{clearWindows(); setShowUsers(!showUsers); }} />
            <SideBarIcon title='articles' cmsType={props.cmsType} icon={<GrArticle/>} showSubMenu={showArticles} onHandleEvent = {()=>{clearWindows(); setShowArticles(!showArticles) ; }}/>
            <SideBarIcon title='comments' cmsType={props.cmsType} icon={<FaRegCommentDots/>} showSubMenu={showComments} onHandleEvent = {()=>{clearWindows(); setShowComments(!showComments); }}/>
            <SideBarIcon title='posts' cmsType={props.cmsType} icon={<BsFileEarmarkPost/>} showSubMenu={showPosts} onHandleEvent = {()=>{clearWindows(); setShowPosts(!showPosts); }}/>
            <SideBarIcon title='courses' cmsType={props.cmsType} icon={<FaChalkboardTeacher/>} showSubMenu={showCourses} onHandleEvent = {()=>{clearWindows(); setShowCourses(!showCourses); }}/>
        </>)}
        {props.cmsType === 'student' && (<>
            <SideBarIcon title='articles' cmsType={props.cmsType} icon={<GrArticle/>} showSubMenu={showArticles} onHandleEvent = {()=>{clearWindows(); setShowArticles(!showArticles) ; }}/>
            <SideBarIcon title='courses' cmsType={props.cmsType} icon={<FaChalkboardTeacher/>} showSubMenu={showCourses} onHandleEvent = {()=>{clearWindows(); setShowCourses(!showCourses); }}/>
        </>)}
    </div>
  )
}
