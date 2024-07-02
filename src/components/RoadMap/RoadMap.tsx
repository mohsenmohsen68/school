import React from "react";

type prop = {
  icon: JSX.Element;
  title: string;
  coursesNumber: string;
  color: string;
};

export default function RoadMap(props: prop): JSX.Element {
  let boxColor: string ;
  console.log('hhhh',props.color)
  if (props.color === "red") {
    boxColor = "bg-gradient-to-r from-red-500 to-pink-700";
  }
    else if(props.color === "yellow") {
      boxColor = "bg-gradient-to-r from-amber-400 to-yellow-500";
    }
    else if(props.color === "blue") {
        boxColor = "bg-gradient-to-r from-sky-500 to-violet-500";
      }
      else if(props.color === "green") {
        boxColor = "bg-gradient-to-r from-green-500 to-lime-600";
      }
      else{
        boxColor = "bg-gradient-to-r from-pink-500 to-violet-600";
      }
      
   
  console.log('hhhh',boxColor)
 
  return (
    <div className='w-40 h-40 rounded-2xl overflow-hidden bg-slate-300 shadow-md'>
      <div className={`flex flex-col items-center ${boxColor} justify-evenly p-4 w-full h-full `}>
        <div className='text-4xl'>{props.icon}</div>

        <h2 className='font-moraba-demiBold'>{props.title}</h2>
        <h4 className='font-moraba'>{props.coursesNumber} ساعت</h4>
      </div>
    </div>
  );
}
