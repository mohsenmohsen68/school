'use client'
import Article from "@/components/Article/Article";
//import Footer from "@/components/footer/Footer";

import React, { useState } from "react";
import Header from "@/components/header/header";
import dynamic from "next/dynamic";
import ProductsHeader from "@/components/ProductsHeader/ProductsHeader";
import Pagination from '@mui/material/Pagination';
import { v4 as uuidv4  } from 'uuid';
import ArrowBackIos from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { PaginationItem } from "@mui/material";

const Footer = dynamic(() => import("@/components/footer/Footer"), {
  ssr: false
});

export default function Page() {


  
const [pageNum, setPageNum] = useState<number>(1)
const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
  setPageNum(value);
};


  const elements:React.ReactElement[] = [
    <Article title='آینده هوش مصنوعی + چالش ها و مشکلات' img="/img/articles/ai.webp" writerName='هادی ' writerLastName="حسینی" rate={4} views={204} desc="وقتی اسم بازی و مسابقه میاد بچه‌ها کنجکاویشون تحریک میشه و سوالات زیادی براشون به وجود میاد که باعث یادگیری بهتر و پرورش کنجکاویشون میشه." datePublished={new Date()} key={uuidv4()}/>,
    <Article title='آینده هوش مصنوعی + چالش ها و مشکلات' img="/img/articles/ai.webp" writerName='هادی ' writerLastName="حسینی" rate={4} views={204} desc="وقتی اسم بازی و مسابقه میاد بچه‌ها کنجکاویشون تحریک میشه و سوالات زیادی براشون به وجود میاد که باعث یادگیری بهتر و پرورش کنجکاویشون میشه." datePublished={new Date()} key={uuidv4()}/>,
    <Article title='آینده هوش مصنوعی + چالش ها و مشکلات' img="/img/articles/ai.webp" writerName='هادی ' writerLastName="حسینی" rate={4} views={204} desc="وقتی اسم بازی و مسابقه میاد بچه‌ها کنجکاویشون تحریک میشه و سوالات زیادی براشون به وجود میاد که باعث یادگیری بهتر و پرورش کنجکاویشون میشه." datePublished={new Date()} key={uuidv4()}/>,
    <Article title='آینده هوش مصنوعی + چالش ها و مشکلات' img="/img/articles/ai.webp" writerName='هادی ' writerLastName="حسینی" rate={4} views={204} desc="وقتی اسم بازی و مسابقه میاد بچه‌ها کنجکاویشون تحریک میشه و سوالات زیادی براشون به وجود میاد که باعث یادگیری بهتر و پرورش کنجکاویشون میشه." datePublished={new Date()} key={uuidv4()}/>,
    <Article title='آینده هوش مصنوعی + چالش ها و مشکلات' img="/img/articles/ai.webp" writerName='هادی ' writerLastName="حسینی" rate={4} views={204} desc="وقتی اسم بازی و مسابقه میاد بچه‌ها کنجکاویشون تحریک میشه و سوالات زیادی براشون به وجود میاد که باعث یادگیری بهتر و پرورش کنجکاویشون میشه." datePublished={new Date()} key={uuidv4()}/>,
    <Article title='آینده هوش مصنوعی + چالش ها و مشکلات' img="/img/articles/ai.webp" writerName='هادی ' writerLastName="حسینی" rate={4} views={204} desc="وقتی اسم بازی و مسابقه میاد بچه‌ها کنجکاویشون تحریک میشه و سوالات زیادی براشون به وجود میاد که باعث یادگیری بهتر و پرورش کنجکاویشون میشه." datePublished={new Date()} key={uuidv4()}/>,
    <Article title='آینده هوش مصنوعی + چالش ها و مشکلات' img="/img/articles/ai.webp" writerName='هادی ' writerLastName="حسینی" rate={4} views={204} desc="وقتی اسم بازی و مسابقه میاد بچه‌ها کنجکاویشون تحریک میشه و سوالات زیادی براشون به وجود میاد که باعث یادگیری بهتر و پرورش کنجکاویشون میشه." datePublished={new Date()} key={uuidv4()}/>,
    <Article title='آینده هوش مصنوعی + چالش ها و مشکلات' img="/img/articles/ai.webp" writerName='هادی ' writerLastName="حسینی" rate={4} views={204} desc="وقتی اسم بازی و مسابقه میاد بچه‌ها کنجکاویشون تحریک میشه و سوالات زیادی براشون به وجود میاد که باعث یادگیری بهتر و پرورش کنجکاویشون میشه." datePublished={new Date()} key={uuidv4()}/>,
    <Article title='آینده هوش مصنوعی + چالش ها و مشکلات' img="/img/articles/ai.webp" writerName='هادی ' writerLastName="حسینی" rate={4} views={204} desc="وقتی اسم بازی و مسابقه میاد بچه‌ها کنجکاویشون تحریک میشه و سوالات زیادی براشون به وجود میاد که باعث یادگیری بهتر و پرورش کنجکاویشون میشه." datePublished={new Date()} key={uuidv4()}/>,
    <Article title='آینده هوش مصنوعی + چالش ها و مشکلات' img="/img/articles/ai.webp" writerName='هادی ' writerLastName="حسینی" rate={4} views={204} desc="وقتی اسم بازی و مسابقه میاد بچه‌ها کنجکاویشون تحریک میشه و سوالات زیادی براشون به وجود میاد که باعث یادگیری بهتر و پرورش کنجکاویشون میشه." datePublished={new Date()} key={uuidv4()}/>,
    <Article title='آینده هوش مصنوعی + چالش ها و مشکلات' img="/img/articles/ai.webp" writerName='هادی ' writerLastName="حسینی" rate={4} views={204} desc="وقتی اسم بازی و مسابقه میاد بچه‌ها کنجکاویشون تحریک میشه و سوالات زیادی براشون به وجود میاد که باعث یادگیری بهتر و پرورش کنجکاویشون میشه." datePublished={new Date()} key={uuidv4()}/>,
    <Article title='آینده هوش مصنوعی + چالش ها و مشکلات' img="/img/articles/ai.webp" writerName='هادی ' writerLastName="حسینی" rate={4} views={204} desc="وقتی اسم بازی و مسابقه میاد بچه‌ها کنجکاویشون تحریک میشه و سوالات زیادی براشون به وجود میاد که باعث یادگیری بهتر و پرورش کنجکاویشون میشه." datePublished={new Date()} key={uuidv4()}/>,
    <Article title='آینده هوش مصنوعی + چالش ها و مشکلات' img="/img/articles/ai.webp" writerName='هادی ' writerLastName="حسینی" rate={4} views={204} desc="وقتی اسم بازی و مسابقه میاد بچه‌ها کنجکاویشون تحریک میشه و سوالات زیادی براشون به وجود میاد که باعث یادگیری بهتر و پرورش کنجکاویشون میشه." datePublished={new Date()} key={uuidv4()}/>,
    <Article title='آینده هوش مصنوعی + چالش ها و مشکلات' img="/img/articles/ai.webp" writerName='هادی ' writerLastName="حسینی" rate={4} views={204} desc="وقتی اسم بازی و مسابقه میاد بچه‌ها کنجکاویشون تحریک میشه و سوالات زیادی براشون به وجود میاد که باعث یادگیری بهتر و پرورش کنجکاویشون میشه." datePublished={new Date()} key={uuidv4()}/>,
    <Article title='آینده هوش مصنوعی + چالش ها و مشکلات' img="/img/articles/ai.webp" writerName='هادی ' writerLastName="حسینی" rate={4} views={204} desc="وقتی اسم بازی و مسابقه میاد بچه‌ها کنجکاویشون تحریک میشه و سوالات زیادی براشون به وجود میاد که باعث یادگیری بهتر و پرورش کنجکاویشون میشه." datePublished={new Date()} key={uuidv4()}/>,
    <Article title='آینده هوش مصنوعی + چالش ها و مشکلات' img="/img/articles/ai.webp" writerName='هادی ' writerLastName="حسینی" rate={4} views={204} desc="وقتی اسم بازی و مسابقه میاد بچه‌ها کنجکاویشون تحریک میشه و سوالات زیادی براشون به وجود میاد که باعث یادگیری بهتر و پرورش کنجکاویشون میشه." datePublished={new Date()} key={uuidv4()}/>,
    <Article title='آینده هوش مصنوعی + چالش ها و مشکلات' img="/img/articles/ai.webp" writerName='هادی ' writerLastName="حسینی" rate={4} views={204} desc="وقتی اسم بازی و مسابقه میاد بچه‌ها کنجکاویشون تحریک میشه و سوالات زیادی براشون به وجود میاد که باعث یادگیری بهتر و پرورش کنجکاویشون میشه." datePublished={new Date()} key={uuidv4()}/>,
    <Article title='آینده هوش مصنوعی + چالش ها و مشکلات' img="/img/articles/ai.webp" writerName='هادی ' writerLastName="حسینی" rate={4} views={204} desc="وقتی اسم بازی و مسابقه میاد بچه‌ها کنجکاویشون تحریک میشه و سوالات زیادی براشون به وجود میاد که باعث یادگیری بهتر و پرورش کنجکاویشون میشه." datePublished={new Date()} key={uuidv4()}/>,
    <Article title='آینده هوش مصنوعی + چالش ها و مشکلات' img="/img/articles/ai.webp" writerName='هادی ' writerLastName="حسینی" rate={4} views={204} desc="وقتی اسم بازی و مسابقه میاد بچه‌ها کنجکاویشون تحریک میشه و سوالات زیادی براشون به وجود میاد که باعث یادگیری بهتر و پرورش کنجکاویشون میشه." datePublished={new Date()} key={uuidv4()}/>,
    <Article title='آینده هوش مصنوعی + چالش ها و مشکلات' img="/img/articles/ai.webp" writerName='هادی ' writerLastName="حسینی" rate={4} views={204} desc="وقتی اسم بازی و مسابقه میاد بچه‌ها کنجکاویشون تحریک میشه و سوالات زیادی براشون به وجود میاد که باعث یادگیری بهتر و پرورش کنجکاویشون میشه." datePublished={new Date()} key={uuidv4()}/>,
    <Article title='آینده هوش مصنوعی + چالش ها و مشکلات' img="/img/articles/ai.webp" writerName='هادی ' writerLastName="حسینی" rate={4} views={204} desc="وقتی اسم بازی و مسابقه میاد بچه‌ها کنجکاویشون تحریک میشه و سوالات زیادی براشون به وجود میاد که باعث یادگیری بهتر و پرورش کنجکاویشون میشه." datePublished={new Date()} key={uuidv4()}/>,
    <Article title='آینده هوش مصنوعی + چالش ها و مشکلات' img="/img/articles/ai.webp" writerName='هادی ' writerLastName="حسینی" rate={4} views={204} desc="وقتی اسم بازی و مسابقه میاد بچه‌ها کنجکاویشون تحریک میشه و سوالات زیادی براشون به وجود میاد که باعث یادگیری بهتر و پرورش کنجکاویشون میشه." datePublished={new Date()} key={uuidv4()}/>,
    <Article title='آینده هوش مصنوعی + چالش ها و مشکلات' img="/img/articles/ai.webp" writerName='هادی ' writerLastName="حسینی" rate={4} views={204} desc="وقتی اسم بازی و مسابقه میاد بچه‌ها کنجکاویشون تحریک میشه و سوالات زیادی براشون به وجود میاد که باعث یادگیری بهتر و پرورش کنجکاویشون میشه." datePublished={new Date()} key={uuidv4()}/>,
    <Article title='آینده هوش مصنوعی + چالش ها و مشکلات' img="/img/articles/ai.webp" writerName='هادی ' writerLastName="حسینی" rate={4} views={204} desc="وقتی اسم بازی و مسابقه میاد بچه‌ها کنجکاویشون تحریک میشه و سوالات زیادی براشون به وجود میاد که باعث یادگیری بهتر و پرورش کنجکاویشون میشه." datePublished={new Date()} key={uuidv4()}/>,
    <Article title='آینده هوش مصنوعی + چالش ها و مشکلات' img="/img/articles/ai.webp" writerName='هادی ' writerLastName="حسینی" rate={4} views={204} desc="وقتی اسم بازی و مسابقه میاد بچه‌ها کنجکاویشون تحریک میشه و سوالات زیادی براشون به وجود میاد که باعث یادگیری بهتر و پرورش کنجکاویشون میشه." datePublished={new Date()} key={uuidv4()}/>,
    <Article title='آینده هوش مصنوعی + چالش ها و مشکلات' img="/img/articles/ai.webp" writerName='هادی ' writerLastName="حسینی" rate={4} views={204} desc="وقتی اسم بازی و مسابقه میاد بچه‌ها کنجکاویشون تحریک میشه و سوالات زیادی براشون به وجود میاد که باعث یادگیری بهتر و پرورش کنجکاویشون میشه." datePublished={new Date()} key={uuidv4()}/>,
    <Article title='آینده هوش مصنوعی + چالش ها و مشکلات' img="/img/articles/ai.webp" writerName='هادی ' writerLastName="حسینی" rate={4} views={204} desc="وقتی اسم بازی و مسابقه میاد بچه‌ها کنجکاویشون تحریک میشه و سوالات زیادی براشون به وجود میاد که باعث یادگیری بهتر و پرورش کنجکاویشون میشه." datePublished={new Date()} key={uuidv4()}/>,
    <Article title='آینده هوش مصنوعی + چالش ها و مشکلات' img="/img/articles/ai.webp" writerName='هادی ' writerLastName="حسینی" rate={4} views={204} desc="وقتی اسم بازی و مسابقه میاد بچه‌ها کنجکاویشون تحریک میشه و سوالات زیادی براشون به وجود میاد که باعث یادگیری بهتر و پرورش کنجکاویشون میشه." datePublished={new Date()} key={uuidv4()}/>,
    <Article title='آینده هوش مصنوعی + چالش ها و مشکلات' img="/img/articles/ai.webp" writerName='هادی ' writerLastName="حسینی" rate={4} views={204} desc="وقتی اسم بازی و مسابقه میاد بچه‌ها کنجکاویشون تحریک میشه و سوالات زیادی براشون به وجود میاد که باعث یادگیری بهتر و پرورش کنجکاویشون میشه." datePublished={new Date()} key={uuidv4()}/>,
    <Article title='آینده هوش مصنوعی + چالش ها و مشکلات' img="/img/articles/ai.webp" writerName='هادی ' writerLastName="حسینی" rate={4} views={204} desc="وقتی اسم بازی و مسابقه میاد بچه‌ها کنجکاویشون تحریک میشه و سوالات زیادی براشون به وجود میاد که باعث یادگیری بهتر و پرورش کنجکاویشون میشه." datePublished={new Date()} key={uuidv4()}/>,
    <Article title='آینده هوش مصنوعی + چالش ها و مشکلات' img="/img/articles/ai.webp" writerName='هادی ' writerLastName="حسینی" rate={4} views={204} desc="وقتی اسم بازی و مسابقه میاد بچه‌ها کنجکاویشون تحریک میشه و سوالات زیادی براشون به وجود میاد که باعث یادگیری بهتر و پرورش کنجکاویشون میشه." datePublished={new Date()} key={uuidv4()}/>,
    <Article title='آینده هوش مصنوعی + چالش ها و مشکلات' img="/img/articles/ai.webp" writerName='هادی ' writerLastName="حسینی" rate={4} views={204} desc="وقتی اسم بازی و مسابقه میاد بچه‌ها کنجکاویشون تحریک میشه و سوالات زیادی براشون به وجود میاد که باعث یادگیری بهتر و پرورش کنجکاویشون میشه." datePublished={new Date()} key={uuidv4()}/>,
    <Article title='آینده هوش مصنوعی + چالش ها و مشکلات' img="/img/articles/ai.webp" writerName='هادی ' writerLastName="حسینی" rate={4} views={204} desc="وقتی اسم بازی و مسابقه میاد بچه‌ها کنجکاویشون تحریک میشه و سوالات زیادی براشون به وجود میاد که باعث یادگیری بهتر و پرورش کنجکاویشون میشه." datePublished={new Date()} key={uuidv4()}/>,
    <Article title='آینده هوش مصنوعی + چالش ها و مشکلات' img="/img/articles/ai.webp" writerName='هادی ' writerLastName="حسینی" rate={4} views={204} desc="وقتی اسم بازی و مسابقه میاد بچه‌ها کنجکاویشون تحریک میشه و سوالات زیادی براشون به وجود میاد که باعث یادگیری بهتر و پرورش کنجکاویشون میشه." datePublished={new Date()} key={uuidv4()}/>,
    <Article title='آینده هوش مصنوعی + چالش ها و مشکلات' img="/img/articles/ai.webp" writerName='هادی ' writerLastName="حسینی" rate={4} views={204} desc="وقتی اسم بازی و مسابقه میاد بچه‌ها کنجکاویشون تحریک میشه و سوالات زیادی براشون به وجود میاد که باعث یادگیری بهتر و پرورش کنجکاویشون میشه." datePublished={new Date()} key={uuidv4()}/>,
    <Article title='آینده هوش مصنوعی + چالش ها و مشکلات' img="/img/articles/ai.webp" writerName='هادی ' writerLastName="حسینی" rate={4} views={204} desc="وقتی اسم بازی و مسابقه میاد بچه‌ها کنجکاویشون تحریک میشه و سوالات زیادی براشون به وجود میاد که باعث یادگیری بهتر و پرورش کنجکاویشون میشه." datePublished={new Date()} key={uuidv4()}/>,
    <Article title='آینده هوش مصنوعی + چالش ها و مشکلات' img="/img/articles/ai.webp" writerName='هادی ' writerLastName="حسینی" rate={4} views={204} desc="وقتی اسم بازی و مسابقه میاد بچه‌ها کنجکاویشون تحریک میشه و سوالات زیادی براشون به وجود میاد که باعث یادگیری بهتر و پرورش کنجکاویشون میشه." datePublished={new Date()} key={uuidv4()}/>,
    <Article title='آینده هوش مصنوعی + چالش ها و مشکلات' img="/img/articles/ai.webp" writerName='هادی ' writerLastName="حسینی" rate={4} views={204} desc="وقتی اسم بازی و مسابقه میاد بچه‌ها کنجکاویشون تحریک میشه و سوالات زیادی براشون به وجود میاد که باعث یادگیری بهتر و پرورش کنجکاویشون میشه." datePublished={new Date()} key={uuidv4()}/>,
    <Article title='آینده هوش مصنوعی + چالش ها و مشکلات' img="/img/articles/ai.webp" writerName='هادی ' writerLastName="حسینی" rate={4} views={204} desc="وقتی اسم بازی و مسابقه میاد بچه‌ها کنجکاویشون تحریک میشه و سوالات زیادی براشون به وجود میاد که باعث یادگیری بهتر و پرورش کنجکاویشون میشه." datePublished={new Date()} key={uuidv4()}/>,
    <Article title='آینده هوش مصنوعی + چالش ها و مشکلات' img="/img/articles/ai.webp" writerName='هادی ' writerLastName="حسینی" rate={4} views={204} desc="وقتی اسم بازی و مسابقه میاد بچه‌ها کنجکاویشون تحریک میشه و سوالات زیادی براشون به وجود میاد که باعث یادگیری بهتر و پرورش کنجکاویشون میشه." datePublished={new Date()} key={uuidv4()}/>,
    <Article title='آینده هوش مصنوعی + چالش ها و مشکلات' img="/img/articles/ai.webp" writerName='هادی ' writerLastName="حسینی" rate={4} views={204} desc="وقتی اسم بازی و مسابقه میاد بچه‌ها کنجکاویشون تحریک میشه و سوالات زیادی براشون به وجود میاد که باعث یادگیری بهتر و پرورش کنجکاویشون میشه." datePublished={new Date()} key={uuidv4()}/>,
    <Article title='آینده هوش مصنوعی + چالش ها و مشکلات' img="/img/articles/ai.webp" writerName='هادی ' writerLastName="حسینی" rate={4} views={204} desc="وقتی اسم بازی و مسابقه میاد بچه‌ها کنجکاویشون تحریک میشه و سوالات زیادی براشون به وجود میاد که باعث یادگیری بهتر و پرورش کنجکاویشون میشه." datePublished={new Date()} key={uuidv4()}/>,
    <Article title='آینده هوش مصنوعی + چالش ها و مشکلات' img="/img/articles/ai.webp" writerName='هادی ' writerLastName="حسینی" rate={4} views={204} desc="وقتی اسم بازی و مسابقه میاد بچه‌ها کنجکاویشون تحریک میشه و سوالات زیادی براشون به وجود میاد که باعث یادگیری بهتر و پرورش کنجکاویشون میشه." datePublished={new Date()} key={uuidv4()}/>,
    <Article title='آینده هوش مصنوعی + چالش ها و مشکلات' img="/img/articles/ai.webp" writerName='هادی ' writerLastName="حسینی" rate={4} views={204} desc="وقتی اسم بازی و مسابقه میاد بچه‌ها کنجکاویشون تحریک میشه و سوالات زیادی براشون به وجود میاد که باعث یادگیری بهتر و پرورش کنجکاویشون میشه." datePublished={new Date()} key={uuidv4()}/>,
   ]
  return (
    <div className='bg-slate-50 dark:bg-slate-600 dark:text-white'>
      <div className=' flex justify-center h-full sticky top-0 z-50'>
        <Header />
      </div>
      

      <div>
        <div className='md:container mx-auto '>
          <ProductsHeader />
        </div>

        <div className='md:container mx-auto '>
            <div className="p-4 grid gap-y-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {elements.slice((pageNum-1)*12, ((pageNum-1)*12 + 12 < elements.length? (pageNum-1)*12 + 12 : elements.length )).map((item)=>item)}
            </div>
            <div className='w-full flex justify-center '>

            <Pagination 
            count={Math.floor(elements.length / 12) + 1} 
            page={pageNum} 
            onChange={handleChange}
            renderItem={(item) => (
            <PaginationItem
              components={{ previous: ArrowForwardIosIcon, next: ArrowBackIos }}
              {...item}
            />  
            )}
            />
            </div>

        </div>
      </div>


      <div className='flex justify-center w-full '>
        <Footer />
      </div>
    </div>
  );
}
