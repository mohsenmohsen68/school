"use client";
import React from "react";
import CircularProgress from '@mui/joy/CircularProgress';
import { useCountUp } from 'use-count-up';


import CountUp from 'react-countup';

export default function CountDown() {

    const { value: value1} = useCountUp({
        isCounting: true,
        duration: 4,
        start: 0,
        end: 100, 
      });
    const { value: value2 } = useCountUp({
        isCounting: true,
        duration: 4,
        start: 0,
        end: 100, 
      });


  return (
    
      <div className=' container grid grid-cols-2 md:grid-cols-4 text-sm md:text-lg items-center p-4 shadow-md my-4 bg-slate-200 dark:bg-slate-700 text-black dark:text-white'>
        <div className="flex flex-col items-center">
            <div className="font-dana-medium"> دانش آموزان عضو </div>
        <CircularProgress size="lg" thickness={2}  determinate value={value1}>
        <CountUp start={0} end={27494} duration={4} className="text-black dark:text-white"/>
        </CircularProgress>
        </div>
        <div className="flex flex-col items-center">
            <div className="font-dana-medium"> طرح های ثبت شده </div>
        <CircularProgress size="lg" thickness={2} determinate value={value1} >
        <CountUp start={0} end={92}  duration={4} className="text-black dark:text-white" />
        </CircularProgress>
        </div>
        <div className="flex flex-col items-center">
            <div className="font-dana-medium"> اعضای سایت </div>
        <CircularProgress size="lg" thickness={2} determinate value={value1} >
        <CountUp start={0} end={492} duration={4} className="text-black dark:text-white" />
        </CircularProgress>
        </div>
        <div className="flex flex-col items-center">
            <div className="font-dana-medium"> دوره های در حال اجرا </div>
        <CircularProgress size="lg" thickness={2} determinate value={value1} >
        <CountUp start={0} end={49} duration={4} className="text-black dark:text-white"/>
        </CircularProgress>
        </div>
      </div>
  );
}
