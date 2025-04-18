import React from "react";
import TeacherBox from "./TeacherBox/TeacherBox";
import AdminBox from "./AdminBox/AdminBox";
import StudentBox from "./StudentBox/StudentBox";

type propsType = {
  cmsType: string;
};

export default async function ContentBox(props: propsType) {

  return (
    <div>
      {props.cmsType === "teacher" && (
        <div className='w-full h-full '>
          <TeacherBox user={JSON.parse(JSON.stringify(props.user))}/>
        </div>
      )}
      {props.cmsType === "student" && (
        <div className='w-full h-full '>
          <StudentBox  user={JSON.parse(JSON.stringify(props.user))}/>
        </div>
      )}
      {props.cmsType === "admin" && (
        <div className='w-full h-full '>
          <AdminBox user={JSON.parse(JSON.stringify(props.user))} />
        </div>
      )}
    </div>
  );
}
