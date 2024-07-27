'use client'
import React,{useState} from 'react'
import { IoIosArrowUp } from "react-icons/io";

export default function ScrollToTop() {
    const [showScrollIcon,setShowScrollIcon] = useState<boolean>(false)

const scrollToTop=()=>{
    window.scrollTo({
        top:0,
        behavior:'smooth'
    })
}

  return (
   
    <div className=' '>
      <IoIosArrowUp onClick={scrollToTop}/>
    </div>
  )
}
