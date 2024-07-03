import React from "react";

type Props = {
  TitleName: string;
  desc: string;
  color: "red" | "green" | "blue" | "yellow";
};

const TitleBar = (props: Props): JSX.Element => {
  let titleColor: string;
  if (props.color === "red") {
    titleColor = "bg-red-500";
  } else if (props.color === "green") {
    titleColor = "bg-green-500";
  } else if (props.color === "yellow") {
    titleColor = "bg-yellow-500";
  } else if (props.color === "blue") {
    titleColor = "bg-sky-500";
  } else {
    titleColor = "bg-gray-400";
  }
  console.log(titleColor)
  return (
    <div className='flex justify-center'>
      <div className=' md:container w-full h-fit px-9  my-9 '>
        <div className=' flex  '>
          <div className={`${titleColor} w-4 h-4 ml-4  `}></div>
          <div className='font-moraba-demiBold'>{props.TitleName}</div>
        </div>
        <div className=' font-moraba-medium px-7'> {props.desc} </div>
      </div>
    </div>
  );
};

export default TitleBar;
