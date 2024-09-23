import commentModel from "@/models/comment";
import connectToDB from "@/utils/connectToDB";

export async function GET() {
  connectToDB();
  try {
    const comment = await commentModel.find({});
    return Response.json({
      message: "the written comment are sent back to you ...",
      data: comment,
      status: 200
    });
  } catch (err) {
    return Response.json({ message: "something went wrong ...", status: 500 });
  }
}

export async function DELETE(req: Request) {
  connectToDB();
  const myUrl = new URL(req.url);
  const commentID = myUrl.searchParams.get("id");
  // console.log("request, commentCode : ", prm)
  const iscommentExist = await commentModel.findOne({ commentID: commentID });
  if (!iscommentExist) {
    return Response.json({
      message: "چنین پیغامی وجود ندارد ...",
      status: 404
    });
  } else {
    await commentModel.findOneAndDelete({ commentID: commentID });
    return Response.json({
      message: "پیام مورد نظر حذف گردید ...",
      status: 200
    });
  }
  // return Response.json({message : "delete done"});
}

export async function POST(req: Request) {
  connectToDB();
  // const data = req.body
  console.log("req", req);
  const {
    commentID,
    commentBody,
    commentTitle,
    commentAuthor,
    commentDate,
    commentToBeShown,
    answers
  } = await req.json();
  console.log(
    "hjkjh",
    commentID,
    commentBody,
    commentTitle,
    commentAuthor,
    commentDate,
    commentToBeShown,
    answers
  );
  try {
    const comment = await commentModel.create({
      commentID,
      commentBody,
      commentTitle,
      commentAuthor,
      commentDate,
      commentToBeShown,
      answers
    });

    return Response.json({
      message: "نظر با موفقیت ثبت شد ...",
      status: 201
    });
  } catch (err) {
    return Response.json({
      message: "مشکلی در سمت سرور به وجود آمده است ...",
      status: 500
    });
  }
}

export async function PUT(req: Request) {
  connectToDB();
  // const data = req.body
  const {
    commentID,
    commentBody,
    commentTitle,
    commentAuthor,
    commentDate,
    commentToBeShown,
    answers
  } = await req.json();

  //validations....

  const iscommentExist = await commentModel.findOne({ commentID });
  if (!iscommentExist) {
    return Response.json({
      message: "پیامی با این شماره وجود ندارد ...",
      status: 409
    });
  }
  const comment = await commentModel.findOneAndUpdate(
    { commentID },
    {
      commentID,
      commentBody,
      commentTitle,
      commentAuthor,
      commentDate,
      commentToBeShown,
      answers
    }
  );
  return Response.json({
    message: "پیام با موفقیت یه روز رسانی شد ...",
    status: 200
  });
}
