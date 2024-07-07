import React from "react";
import { CiSearch } from "react-icons/ci";
import styles from './PrductsHeader.module.css'

export default function ProductsHeader() {
  return (
    <div className='my-4 h-20 xs:h-10 bg-slate-200 dark:bg-slate-700 px-4 flex flex-col xs:flex-row justify-between rounded-lg '>
     
     <div className={`${styles.box} md:hidden w-full xs:w-1/2 h-full flex justify-center items-center px-2` }>
        <select name="" id="" className="font-moraba ">
            <option value="-1" className="font-moraba">مرتب سازی بر اساس</option>
            <option value="0" className="font-moraba">همه دوره ها</option>
            <option value="1" className="font-moraba">ارزان ترین</option>
            <option value="2" className="font-moraba">گران ترین</option>
            <option value="3" className="font-moraba">پر مخاطب ترین</option>
        </select>
      </div>     
     
      <div className='hidden md:visible w-1/2 md:w-3/5 lg:w-1/2 h-full md:flex justify-evenly items-center child:hover:border-sky-400 dark:child:hover:border-white  '>
        <div className='font-moraba-medium flex h-full items-center dark:hover:border-white'>
          مرتب سازی بر اساس
        </div>
        <div className='font-moraba flex h-full  items-center hover:border-b-2 hover:border-t-2 hover:border-sky-400 dark:hover:border-white'>
          همه دوره ها
        </div>
        <div className='font-moraba flex h-full items-center hover:border-b-2 hover:border-t-2 hover:border-sky-400 dark:hover:border-white'>
          ارزان ترین
        </div>
        <div className='font-moraba flex h-full items-center hover:border-b-2 hover:border-t-2 hover:border-sky-400 dark:hover:border-white'>
          گران ترین
        </div>
        <div className='font-moraba flex h-full items-center hover:border-b-2 hover:border-t-2 hover:border-sky-400 dark:hover:border-white'>
          پر مخاطب ترین
        </div>
      </div>

      <div className='w-full xs:w-1/2 md:w-2/5  lg:w-1/2 flex justify-center items-center h-full py-1'>
        <div className="bg-white rounded-full h-full flex justify-center items-center overflow-hidden" >
          <input
            type='text'
            placeholder='جستوجوی دوره ...'
            className='font-moraba outline-none border-none pr-4 '
          />
          <CiSearch className="ml-2"/>
        </div>
      </div>

     
    </div>
  );
}
