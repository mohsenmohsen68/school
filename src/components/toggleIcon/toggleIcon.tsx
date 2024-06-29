"use client";
import React from "react";
import style from "./toggleIcon.module.css";
import { useTheme } from "next-themes";
import { BsMoonStars } from "react-icons/bs";
import { FaSun } from "react-icons/fa";


export default function ToggleIcon() {
  const { theme, setTheme } = useTheme();
  console.log('theme ...',theme)

 

  return (
    <div className='w-9 h-9 rounded-full flex justify-center items-center bg-black dark:bg-sky-500'>
      {theme === 'light' && (<BsMoonStars className={style.Icon} onClick={()=>setTheme("dark")}/>) }
      {theme === 'dark' && (<FaSun className={style.Icon} onClick={()=>setTheme("light")}/>)}
    </div>
  );
}
