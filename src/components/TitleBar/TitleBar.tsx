import React from "react";

type Props = {
  TitleName: string;
  desc: string;
};

const TitleBar = (props: Props): JSX.Element => {
  return (
    <div className='flex justify-center'>
      <div className=' container w-full h-fit px-9  my-9 '>
        <div className=' flex  '>
          <div className='bg-red-400 w-4 h-4 ml-4  '></div>
          <div className='font-moraba-demiBold'>{props.TitleName}</div>
        </div>
        <div className=' font-moraba-medium px-7'> {props.desc} </div>
      </div>
    </div>
  );
};

export default TitleBar;
