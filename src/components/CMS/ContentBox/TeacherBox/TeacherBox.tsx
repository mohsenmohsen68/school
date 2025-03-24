"use client"
import React from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from './../../../../Redux/Store'

export default function TeacherBox() {

const useAppSelector = useSelector.withTypes<RootState>()

const action = useAppSelector(state=>state.menuOptions)
console.log("action : ", action)
  return (
    <div>

      {/* article menu */}
      {action === "ADD_ARTICLE" && (
          <div>
            add article
          </div>
      )}
      {action === "REMOVE_ARTICLE" && (
          <div>
           article list
          </div>
      )}
      

      {/* comment menu */}
      {action === "LIST_COMMENT" && (
          <div>
           list comment
          </div>
      )}

      {/* course menu */}
      {action === "ADD_COURSE" && (
          <div>
           Add course
          </div>
      )}
      {action === "REMOVE_COURSE" && (
          <div>
            remove course
          </div>
      )}
      {action === "EDIT_COURSE" && (
          <div>
            edit course
          </div>
      )}

      {/* setting profiles */}
      <div>
        setting profile
      </div>
    </div>
  )
}
