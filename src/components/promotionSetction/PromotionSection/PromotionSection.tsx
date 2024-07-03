'use client'
import React from "react";
import Image from "next/image";

type prop = {
title:string;
body:string;
img:string;
color:string;
}

const PromotionSection = (props: prop):JSX.Element => {
  return (
    <div className='flex flex-col lg:flex-row justify-center items-center w-full h-fit gap-4 mt-2'>
       <div className="w-1/2 lg:w-1/3 p-4 relative flex justify-center items-center ">
        <Image src={props.img} width={0} height={0} sizes="100vw" className="w-2/3 h-full z-10" alt="learning Image"/>
        <div className={` ${props.color} absolute z-0  w-3/5 h-[99%] -skew-x-4 -skew-y-2 -top-2 right-14`}></div>
      </div>
      <div className="flex flex-col w-full lg:w-2/3 p-4">
        <div className='font-dana-demiBold '>
          {props.title}
        </div>
        <div className="font-dana text-justify p-4 leading-7">
         {props.body}
        </div>
      </div> 
    </div>
  );
}


export default PromotionSection;
