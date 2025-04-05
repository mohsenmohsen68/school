import React from "react";
import ArticlePagination from "@/components/ArticlePagination/ArticlePagination"
import { getMe } from "@/utils/getMe";
import articleModel from "@/models/article";
import Article from "@/components/Article/Article";


 async function Page() {

  const user = await getMe();
  console.log("user : ", user);

  // const courses = await courseModel.find({}).populate("teacher", "firstName lastName");
  const articles = await articleModel.find({}).populate("author", "firstName lastName");
  console.log("artivles", articles)



  
  return (
    <div className='bg-slate-50 dark:bg-slate-600 dark:text-white'>
      <ArticlePagination articles={JSON.parse(JSON.stringify(articles))}/>
    </div>
  );
}

export default Page
