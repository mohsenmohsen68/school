"use client"
import React, { useRef } from 'react'

export default function ScrollIndicator() {
const myScrollIndicator = useRef<HTMLDivElement>(null)
    window.onscroll = function() {myFunction()};

    function myFunction() {
      var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      var scrolled = (winScroll / height) * 100;
      if(myScrollIndicator.current){
          myScrollIndicator.current.style.width = scrolled + "%";
      }
    } 

  return (
    <div className='w-full bg-slate-200 h-1'>

    <div ref={myScrollIndicator} className='bg-green-500 h-full'>
      
    </div>
    </div>
  )
}
