'use client'
import React,{useState} from "react";
import { IoBookOutline } from "react-icons/io5";
import { GiSpiderWeb } from "react-icons/gi";
import { PiSealCheckThin } from "react-icons/pi";
import { LiaCertificateSolid } from "react-icons/lia";
import { PiSuitcaseSimpleThin } from "react-icons/pi";
import Community from "./Comunity/Comunity";
import GuideToJob from "./GuideToJob/GuideToJob";
import Talent from "./Talant/Talent";
import Learning from "./Learning/Learning";

export default function Promotion() {
    const [skill, setSkill] = useState(true);
    const [community, setCommunity] = useState(false);
    const [guide, setGuide] = useState(false);
    const [talent, setTalent] = useState(false);


    
const handleSkill = ()=>{
    setCommunity(false);
    setGuide(false);
    setTalent(false);
    setSkill(true)
}
const handleTalent = ()=>{
    setSkill(false);
    setCommunity(false);
    setGuide(false);
    setTalent(true)
}
const handleGuide = ()=>{
    setSkill(false);
    setCommunity(false);
    setGuide(true);
    setTalent(false);
}
const handleCommunity = ()=>{
    setSkill(false);
    setCommunity(true);
    setGuide(false);
    setTalent(false);
   
}

  return (
    <div className='flex flex-col justify-center items-center shadow-md  dark:bg-slate-700 bg-slate-200 w-full h-fit my-4 p-0 overflow-hidden'>
      <div className='flex justify-evenly container'>
        <div onClick={()=>handleSkill()}  className={`p-4 ${skill && 'text-sky-500'} hover:text-sky-500 border-2 dark:border-slate-700 border-slate-200 hover:border-b-sky-500 dark:hover:border-b-sky-500 hover:border-b-2`}>
          <div className='flex flex-col gap-4 items-center justify-center'>
            <IoBookOutline className='text-4xl' />
            <div className='lg:font-dana-medium font-dana hidden md:block'>
              آموزش مهارت محور
            </div>
          </div>
        </div>
        <div onClick={()=>handleCommunity()}  className={`p-4 ${community && 'text-sky-500'} hover:text-sky-500 border-2 dark:border-slate-700 border-slate-200 hover:border-b-sky-500 dark:hover:border-b-sky-500 hover:border-b-2`}>
          <div className='flex flex-col gap-4 items-center justify-center '>
            <GiSpiderWeb className='text-4xl' />
            <div className=' lg:font-dana-medium font-dana hidden md:block'>
              جامعه فعال برنامه نویسان
            </div>
          </div>
        </div>
        

        <div onClick={()=>handleTalent()}  className={`p-4 ${talent && 'text-sky-500'} hover:text-sky-500 border-2 dark:border-slate-700 border-slate-200 hover:border-b-sky-500 dark:hover:border-b-sky-500 hover:border-b-2`}>
          <div className='flex flex-col gap-4 items-center justify-center'>
            <LiaCertificateSolid className='text-4xl' />
            <div className='lg:font-dana-medium font-dana hidden md:block'>
              استعداد یابی و ارزیابی
            </div>
          </div>
        </div>
        <div onClick={()=>handleGuide()} className={`p-4 ${guide && 'text-sky-500'} hover:text-sky-500 border-2 dark:border-slate-700 border-slate-200 hover:border-b-sky-500 dark:hover:border-b-sky-500 hover:border-b-2`}>
          <div className='flex flex-col gap-4 items-center justify-center'>
            <PiSuitcaseSimpleThin className='text-4xl' />
            <div className='lg:font-dana-medium font-dana hidden md:block'>
              هدایت به بازار کار
            </div>
          </div>
        </div>
      </div>
      <div>
        <div></div>
        <div></div>
      </div>
      {community && <Community/>}
      {guide && <GuideToJob/>}
      {talent && <Talent/>}
      {skill && <Learning />}
    </div>
  );
}
