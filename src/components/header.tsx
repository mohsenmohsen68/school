import React from 'react'
import Image from 'next/image'
import ToggleIcon from './toggleIcon'


export default function header() {
  return (
    <div className='container dark:bg-slate-500 bg-white flex columns-2 md:columns-3 h-20 justify-between items-center '>
      <div className=' dark:bg-slate-900 bg-white hidden md:flex md:w-[10%] justify-center items-center h-full'>
        <Image src='/img/LOGO.jpg' width={76} height={76} alt='logo img'/>
      </div>
      <div className=' dark:bg-slate-900 bg-white w-[80%] md:w-[70%] flex justify-center items-center h-full'>q</div>
      <div className='relative dark:bg-slate-900 bg-white w-[20%] md:w-[20%] flex justify-center items-center h-full'>
        <ToggleIcon/>
      </div>
    </div>
  )
}
