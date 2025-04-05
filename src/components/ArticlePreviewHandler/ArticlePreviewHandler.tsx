"use client";
import React from "react";
import Parser from "html-react-parser";
import "./../../app/globals.css";
import { selectOption } from "@/Redux/CMS/CMSRoutes";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

export default function ArticlePreviewHandler(props) {
  const router = useRouter();
  const dispatch = useDispatch();
  console.log("article body preview : ", props.data);
  return (
    //<div className='w-full border rounded-md font-dana' dangerouslySetInnerHTML={{ __html: props.data.articleBody}} />

    <div className='flex w-full mx-2 '>
        <div className='w-4/5 py-4 px-2 border rounded-md font-dana p-4 ck-content '>
          {Parser(props.data)}
        <button
          className='rounded-md bg-green-600 hover:bg-green-400 p-2 mt-2 text-xl font-moraba w-full'
          onClick={() => {
            props.sentFromCMS ? dispatch(selectOption("")) : router.back(); ;
            
          }}
        >
          بازگشت
        </button>
        </div>
      <div className="w-1/5 mr-1"></div>
    </div>
  );
}
