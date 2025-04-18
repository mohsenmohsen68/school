"use client"
import React from 'react'
import { useSelector } from 'react-redux'
import type {  RootState } from './../../../../Redux/Store'
import StudentSetting from "@/components/StudentContentBox/StudentSetting/StudentSetting"

export default function StudentBox({user}) {

const useAppSelector = useSelector.withTypes<RootState>()

const action = useAppSelector(state=>state.menuOptions)
console.log("action : ", action)
  return (
    <div>
{/* user menu */}
      {/* {action === "EDIT_PROFILE" && (
          <div>
            edit profile
          </div>
      )} */}

      {/* article menu */}
      {/* {action === "ADD_ARTICLE" && (
          <div>
            add article
          </div>
      )}
      {action === "EDIT_ARTICLE" && (
          <div>
            edit article
          </div>
      )} */}


           {/* course menu */}
      {action === "VIEW_COURSE" && (
          <div>
            view course
          </div>
      )}

      {/* setting Menu */}
      {action === "STUDENT_SETTING" && (
          <div>
            <StudentSetting user={JSON.parse(JSON.stringify(user))}/>
          </div>
      )}
    </div>
  )
}
