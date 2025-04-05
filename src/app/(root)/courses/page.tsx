'use client'
import React, { useEffect, useState } from "react";
import Header from "@/components/header/header";
import dynamic from "next/dynamic";
import ProductsHeader from "@/components/ProductsHeader/ProductsHeader";
import Course from "@/components/Course/Course";
import Pagination from '@mui/material/Pagination';
import { v4 as uuidv4  } from 'uuid';
import ArrowBackIos from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { PaginationItem } from "@mui/material";
import { useDispatch } from "react-redux";
import { getCoursesFromServer } from "@/Redux/courses/Courses";


const Footer = dynamic(() => import("@/components/footer/Footer"), {
  ssr: false
});

export default function Page() {
const [courses, setCourses] = useState([])
const dispatch = useDispatch()

useEffect(()=>{
  const a =async ()=>{

    const result =await dispatch(getCoursesFromServer())
    // console.log("jjjjj",result.payload.data)
    setCourses(result.payload.data)
  }

  a()
},[])


const [pageNum, setPageNum] = useState<number>(1)
const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
  setPageNum(value);
};


  const elements:React.ReactElement[] = []
  console.log("my courses : ", courses)
  courses.map(item=>elements.push(<Course id={item._id} title={item.title} img={item.img} teacherName={item.teacher.lastName} teacherLastName={item.teacher.firstName} rate={item.stisfiction} studentsNumber={item.studentNo} desc={item.desc} price={item.price} discount={item.discount} key={item._id}/>,))   
  return (
    <div className='bg-slate-50 dark:bg-slate-600 dark:text-white'>
 
      <div>
        <div className='md:container mx-auto '>
          <ProductsHeader />
        </div>

        <div className='md:container mx-auto '>
            <div className="p-4 grid gap-y-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {elements.slice((pageNum-1)*12, ((pageNum-1)*12 + 12 < elements.length? (pageNum-1)*12 + 12 : elements.length )).map((item)=>item)}
            </div>
            <div className='w-full flex justify-center '>

            <Pagination 
            count={Math.floor(elements.length / 12) + 1} 
            page={pageNum} 
            onChange={handleChange}
            renderItem={(item) => (
            <PaginationItem
              components={{ previous: ArrowForwardIosIcon, next: ArrowBackIos }}
              {...item}
            />  
            )}
            />
            </div>

        </div>
      </div>

      {/* <div className='md:container mx-auto '>
        <Footer />
      </div> */}
    </div>
  );
}
