"use client"
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from './../../../../Redux/Store'
import TeacherEditsCluster from "@/components/TeacherContentBox/TeacherEditsCluster"
import TeacherPreviewCluster from "@/components/TeacherContentBox/TeacherPreviewCluster"
import AddTeacherArticle from "@/components/TeacherContentBox/AddTeacherArticle/AddTeacherArticle"
import ListTeacherArticle from "@/components/TeacherContentBox/ListTeacherArticle/ListTeacherArticle"
import AddTeacherCourse from '@/components/TeacherContentBox/AddTeacherCourse/AddTeacherCourse'
import ListTeacherCourses from '@/components/TeacherContentBox/ListTeacherCourse/ListTeacherCourse'
import ListTeacherComment from "@/components/TeacherContentBox/ListTeacherComment/ListTeacherComment"
import TeacherSetting from "@/components/TeacherContentBox/TeacherSetting/TeacherSetting"


export default function TeacherBox({user}) {

  const [clusterHtml,setClusterHtml] = useState("")
   
  useEffect(() => {
      const res = fetch("/api/clusters").then(res => res.json()).then(result => {
          const mycluster = result.data.find(item => item.title === user.cluster)
          console.log("mycluster : ", mycluster)
          {mycluster.clusterBody.length > 0 ? setClusterHtml(mycluster.clusterBody) : setClusterHtml("<p>  من ویرایشگر خوشه ی علمی شما هستم ... </p>")}
        }) 
}, [])


const useAppSelector = useSelector.withTypes<RootState>()

const action = useAppSelector(state=>state.menuOptions)
console.log("action : ", action)
  return (
    <div>
      {/* cluster actions */}
      {action === "MANAGE_CLUSTERS" && (
          <div>
            <TeacherEditsCluster cluster={user.cluster} clusterHtml={clusterHtml}/>
          </div>
      )}
      {action === "PREVIEW_CLUSTER" && (
          <div>
            <TeacherPreviewCluster cluster={user.cluster} sentFromCMS={true}/>
          </div>
      )}
      {/* article menu */}
      {action === "LIST_TEACHER_ARTICLE" && (
          <div>
            <ListTeacherArticle user={JSON.parse(JSON.stringify(user))}/>
          </div>
      )}
      {action === "ADD_TEACHER_ARTICLE" && (
          <div>
          <AddTeacherArticle user={JSON.parse(JSON.stringify(user))}/>
          </div>
      )}
      {action === "LIST_TEACHER_COURSE" && (
          <div>
          <ListTeacherCourses user={JSON.parse(JSON.stringify(user))}/>
          </div>
      )}
      {action === "ADD_TEACHER_COURSE" && (
          <div>
          <AddTeacherCourse user={JSON.parse(JSON.stringify(user))}/>
          </div>
      )}
      {action === "LIST_TEACHER_COMMENT" && (
          <div>
          <ListTeacherComment user={JSON.parse(JSON.stringify(user))}/>
          </div>
      )}
      {action === "TEACHER_SETTING" && (
          <div>
          <TeacherSetting user={JSON.parse(JSON.stringify(user))}/>
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
      </div>
    </div>
  )
}
