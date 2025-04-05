import BreadCrumb from "@/components/BreadCrumb";
import React from "react";
import connectToDB from "@/utils/connectToDB";
import {getMe} from "@/utils/getMe";
import articlesModel from "@/models/article";
import ArticlePreviewHandler from "@/components/ArticlePreviewHandler/ArticlePreviewHandler";


export default async function page({ params }) {
    connectToDB();
    console.log("params : ", params)
    const user = await getMe()
    const id = params.article;
    console.log("idddd : ", id)
    const userID = user?._id
    const myArticle = await articlesModel.findOne({ _id: id });
    console.log("mmm", myArticle)
    const allArticles = await articlesModel.find({})

    return (
        <div className='mt-2'>
            <BreadCrumb titles={"مقالات"} />
            <div className="mt-1 mx-1 p-2">
                <ArticlePreviewHandler data={myArticle.articleBody} sentFromCMS={false} />
            </div>
        </div>
    );
}

