//server component
import React from "react";
import CommentBox from "./CommentBox";
import connectToDB from "@/utils/connectToDB";
import commentModel from "@/models/comment";

export default function CommentsWrapper({ courseComments }) {
  console.log("hhhhh", courseComments);
  return (
    <div className='w-1/2 md:w-full  max-h-[600px] overflow-y-auto scrollbar-thin font-BYekan scrollbar-thumb-blue-600 scrollbar-thumb-rounded'>
      <div className='text-lg font-dana mb-2'>
        {courseComments.length.toLocaleString("fa-ir")} نظر برای این محصول ثبت
        شده است{" "}
      </div>
      {courseComments.map(async (item) => {
        console.log("comments ... ", item);
        connectToDB();
        const comment = await commentModel
          .find({ _id: item })
          .populate("user");
        console.log("sss", comment);
        return (
          <CommentBox
            key={item}
            commentNumber={courseComments.length}
            commentBody={JSON.parse(JSON.stringify(comment))}
          />
        );
      })}
    </div>
  );
}
