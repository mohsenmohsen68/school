import React from "react";
import TeacherBox from "./TeacherBox/TeacherBox";
import AdminBox from "./AdminBox/AdminBox";
import StudentBox from "./StudentBox/StudentBox";

type propsType = {
  cmsType: string;
};

export default function ContentBox(props: propsType) {
  return (
    <div>
      {props.cmsType === "teacher" && (
        <div className='w-full h-full '>
          <TeacherBox />
        </div>
      )}
      {props.cmsType === "student" && (
        <div className='w-full h-full '>
          <StudentBox />
        </div>
      )}
      {props.cmsType === "admin" && (
        <div className='w-full h-full '>
          <AdminBox />
        </div>
      )}
    </div>
  );
}
