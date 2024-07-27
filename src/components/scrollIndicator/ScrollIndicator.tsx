"use client"
import React, { useEffect, useRef } from 'react'

export default function ScrollIndicator() {
const myScrollIndicator = useRef<HTMLDivElement>(null)

useEffect(()=>{
    function myFunction() {
      var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      var scrolled = (winScroll / height) * 100;
      if(myScrollIndicator.current){
            myScrollIndicator.current.style.width = scrolled + "%";
        }
      } 
      if(myScrollIndicator.current){
        myScrollIndicator.current.style.width = 0 + "%";
    }
    window.addEventListener('scroll',myFunction);

    // return window.removeEventListener('scroll',myFunction)

},[])
    // window.onscroll = function() {myFunction()};


  return (
    <div className='w-full bg-slate-200 h-[2px] '>

    <div ref={myScrollIndicator} className='bg-green-500 h-full'>
      
    </div>
    </div>
  )
}
