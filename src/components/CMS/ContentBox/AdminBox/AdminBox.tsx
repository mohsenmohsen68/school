import React from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from './../../../../Redux/Store'
import ListUsers from '@/components/AdminContentBox/GetUsers/ListUsers'

export default function AdminBox() {

const useAppSelector = useSelector.withTypes<RootState>()

const action = useAppSelector(state=>state.menuOptions)
console.log("action : ", action)
  return (
    <div>
{/* user menu */}
      {action === "LIST_USER" && (
          <div>
            <ListUsers/>
          </div>
      )}
      {action === "ADD_USER" && (
          <div>
            add user
          </div>
      )}
      {action === "REMOVE_USER" && (
          <div>
            remove user
          </div>
      )}
      {action === "EDIT_USER" && (
          <div>
            edit user
          </div>
      )}

      {/* article menu */}
      {action === "ADD_ARTICLE" && (
          <div>
            add article
          </div>
      )}
      {action === "REMOVE_ARTICLE" && (
          <div>
            remove article
          </div>
      )}
      {action === "EDIT_ARTICLE" && (
          <div>
            edit article
          </div>
      )}
{/* comment menu */}
{action === "LIST_COMMENT" && (
          <div>
           list comment
          </div>
      )}
      {action === "VALIDATE_COMMENT" && (
          <div>
            validate comment
          </div>
      )}

      {/* post menu */}
      {action === "ADD_POST" && (
          <div>
           Add post
          </div>
      )}
      {action === "REMOVE_POST" && (
          <div>
            remove post
          </div>
      )}
      {action === "EDIT_POST" && (
          <div>
            edit post
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
    </div>
  )
}
