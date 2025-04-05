'use client'
import React, {useState} from 'react'
import SideBarIcon from '../sideBarIcon/SideBarIcon'
import { FaUsers } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa6";
import { GrArticle } from "react-icons/gr";
import { BsFileEarmarkPost } from "react-icons/bs";
import { FaChalkboardTeacher } from "react-icons/fa";
import { AiOutlineCluster } from "react-icons/ai";
import { IoSettingsSharp } from "react-icons/io5";
import { RiLogoutCircleLine } from "react-icons/ri";
import Swal from 'sweetalert2';

type CMSType = {
    cmsType:string,
}

export default function CmsSidebar(props: CMSType):JSX.Element {
    const [showUsers, setShowUsers] = useState<boolean>(false);
    const [showCourses, setShowCourses] = useState<boolean>(false);
    const [showArticles, setShowArticles] = useState<boolean>(false);
    const [showComments, setShowComments] = useState<boolean>(false);
    const [showPosts, setShowPosts] = useState<boolean>(false);
    const [manageClusters, setManageClusters] = useState<boolean>(false);
    const [showSetting, setShowSetting] = useState<boolean>(false);

    const logoutHandler = () => {
        Swal.fire({
          showCancelButton: true,
          buttonsStyling: false,
          icon: "warning",
          customClass: {
            popup:
              "!relative !transform !overflow-hidden !rounded-lg !bg-white !text-left !shadow-xl !transition-all sm:!my-8 sm:!w-full sm:!max-w-lg !p-0 !grid-cols-none",
            icon: "!m-0 !mx-auto !flex !h-12 !w-12 !flex-shrink-0 !items-center !justify-center !rounded-full !border-0 !bg-red-100 sm:!h-10 sm:!w-10 !mt-5 sm!mt-6 sm:!ml-6 !col-start-1 !col-end-3 sm:!col-end-2",
            title:
              "!p-0 !pt-3 !text-center sm:!text-left !text-base !font-semibold !leading-6 !text-gray-900 !pl-4 !pr-4 sm:!pr-6 sm:!pl-0 sm:!pt-6 sm:!ml-4 !col-start-1 sm:!col-start-2 !col-end-3",
            htmlContainer:
              "!mt-2 sm:!mt-0 !m-0 !text-center sm:!text-left !text-sm !text-gray-500 !pl-4 sm:!pl-0 !pr-4 !pb-4 sm:!pr-6 sm:!pb-4 sm:!ml-4 !col-start-1 sm:!col-start-2 !col-end-3",
            actions:
              "!bg-gray-50 !px-4 !py-3 sm:!flex sm:!flex-row-reverse sm:!px-6 !w-full !justify-start !mt-0 !col-start-1 !col-end-3",
            confirmButton:
              "inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto",
            cancelButton:
              "mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
          },
          title: "خروج از حساب کاربری",
          text: "مطمعن هستید؟",
          confirmButtonText: "خروج",
          cancelButtonText: "انصراف"
        }).then(async (result) => {
          if (result.isConfirmed) {
            const res = await fetch("/api/auth/signout", {
              method: "POST"
            });
            if (res.status === 200) {
              Swal.fire({
                buttonsStyling: false,
                icon: "success",
                customClass: {
                  popup:
                    "!relative !transform !overflow-hidden !rounded-lg !bg-white !text-left !shadow-xl !transition-all sm:!my-8 sm:!w-full sm:!max-w-lg !p-0 !grid-cols-none",
                  icon: "!m-0 !mx-auto !flex !h-12 !w-12 !flex-shrink-0 !items-center !justify-center !rounded-full !border-0 !bg-red-100 sm:!h-10 sm:!w-10 !mt-5 sm!mt-6 sm:!ml-6 !col-start-1 !col-end-3 sm:!col-end-2",
                  title:
                    "!p-0 !pt-3 !text-center sm:!text-left !text-base !font-semibold !leading-6 !text-gray-900 !pl-4 !pr-4 sm:!pr-6 sm:!pl-0 sm:!pt-6 sm:!ml-4 !col-start-1 sm:!col-start-2 !col-end-3",
                  htmlContainer:
                    "!mt-2 sm:!mt-0 !m-0 !text-center sm:!text-left !text-sm !text-gray-500 !pl-4 sm:!pl-0 !pr-4 !pb-4 sm:!pr-6 sm:!pb-4 sm:!ml-4 !col-start-1 sm:!col-start-2 !col-end-3",
                  actions:
                    "!bg-gray-50 !px-4 !py-3 sm:!flex sm:!flex-row-reverse sm:!px-6 !w-full !justify-start !mt-0 !col-start-1 !col-end-3",
                  confirmButton:
                    "inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto",
                  cancelButton:
                    "mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                },
                title: "با موفقیت خارج شدید...",
                timer:2000,
              });
              location.replace('/')
            }
          } else {
          }
        });
      };

const clearWindows=()=>{
    setShowUsers(false);
    setShowArticles(false);
    setShowCourses(false);
    setShowPosts(false);
    setShowComments(false);
    setManageClusters(false);
    setShowSetting(false);

}

  return (
    <div
    id='sidebar'
    className='h-full w-20 bg-slate-200 dark:bg-slate-700 flex flex-col overflow-hidden justify-start items-center child:text-3xl child:my-2'
  >
        {props.cmsType === 'teacher' && (<>
            <SideBarIcon title='clusters' cmsType={props.cmsType} icon={<AiOutlineCluster/>} showSubMenu={manageClusters} onHandleEvent = {()=>{clearWindows(); setManageClusters(!manageClusters); }}  />
            <SideBarIcon title='articles' cmsType={props.cmsType} icon={<GrArticle/>} showSubMenu={showArticles} onHandleEvent = {()=>{clearWindows(); setShowArticles(!showArticles) ; }}/>
            <SideBarIcon title='courses' cmsType={props.cmsType} icon={<FaChalkboardTeacher/>} showSubMenu={showCourses} onHandleEvent = {()=>{clearWindows(); setShowCourses(!showCourses); }}/>
            <SideBarIcon title='comments' cmsType={props.cmsType} icon={<FaRegCommentDots/>} showSubMenu={showComments} onHandleEvent = {()=>{clearWindows(); setShowComments(!showComments); }}/>
            <SideBarIcon title='setting' cmsType={props.cmsType} icon={<IoSettingsSharp/>} showSubMenu={showPosts} onHandleEvent = {()=>{clearWindows(); setShowPosts(!showPosts); }}/>
            <RiLogoutCircleLine  onClick={()=>logoutHandler()}/>
        </>)}
        {props.cmsType === 'admin' && (<>
            <SideBarIcon title='clusters' cmsType={props.cmsType} icon={<AiOutlineCluster/>} showSubMenu={manageClusters} onHandleEvent = {()=>{clearWindows(); setManageClusters(!manageClusters); }}  />
            <SideBarIcon title='users' cmsType={props.cmsType} icon={<FaUsers/>} showSubMenu={showUsers} onHandleEvent = {()=>{clearWindows(); setShowUsers(!showUsers); }} />
            <SideBarIcon title='articles' cmsType={props.cmsType} icon={<GrArticle/>} showSubMenu={showArticles} onHandleEvent = {()=>{clearWindows(); setShowArticles(!showArticles) ; }}/>
            <SideBarIcon title='comments' cmsType={props.cmsType} icon={<FaRegCommentDots/>} showSubMenu={showComments} onHandleEvent = {()=>{clearWindows(); setShowComments(!showComments); }}/>
            <SideBarIcon title='posts' cmsType={props.cmsType} icon={<BsFileEarmarkPost/>} showSubMenu={showPosts} onHandleEvent = {()=>{clearWindows(); setShowPosts(!showPosts); }}/>
            <SideBarIcon title='courses' cmsType={props.cmsType} icon={<FaChalkboardTeacher/>} showSubMenu={showCourses} onHandleEvent = {()=>{clearWindows(); setShowCourses(!showCourses); }}/>
            <SideBarIcon title='setting' cmsType={props.cmsType} icon={<IoSettingsSharp/>} showSubMenu={showSetting} onHandleEvent = {()=>{clearWindows(); setShowSetting(!showSetting); }}/>
            <RiLogoutCircleLine  onClick={()=>logoutHandler()}/>
           
        </>)}
        {props.cmsType === 'student' && (<>
            <SideBarIcon title='courses' cmsType={props.cmsType} icon={<FaChalkboardTeacher/>} showSubMenu={showCourses} onHandleEvent = {()=>{clearWindows(); setShowCourses(!showCourses); }}/>
            <SideBarIcon title='setting' cmsType={props.cmsType} icon={<IoSettingsSharp/>} showSubMenu={showSetting} onHandleEvent = {()=>{clearWindows(); setShowSetting(!showSetting); }}/>
            <RiLogoutCircleLine  onClick={()=>logoutHandler()}/>
        </>)}
    </div>
  )
}
