import commentModel from "@/models/comment";
import courseModel from "@/models/course";
import connectToDB from "@/utils/connectToDB";

export async function GET() {
  connectToDB();
  try {
    const comment = await commentModel
      .find({})
      .populate("user", "firstName lastName").populate("course", "teacher ");
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
  const iscommentExist = await commentModel.findOne({ _id: commentID });
  if (!iscommentExist) {
    return Response.json({
      message: "چنین پیغامی وجود ندارد ...",
      status: 404
    });
  } else {
    await commentModel.findOneAndDelete({ _id: commentID });
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
  // console.log("req", req);
  const {
    commentTitle,
    commentBody,
    score,
    commentDate,
    commentToBeShown,
    answers,
    user,
    course
  } = await req.json();

  console.log("ct", commentTitle);

  try {
    const comment = await commentModel.create({
      commentTitle,
      commentBody,
      score,
      commentDate,
      commentToBeShown,
      answers,
      user,
      course
    });

    await courseModel.findOneAndUpdate(
      { _id: course },
      {
        $push: {
          comments: comment._id
        }
      }
    );

    return Response.json({
      message: "نظر با موفقیت ثبت شد ...",
      status: 201
    });
  } catch (err) {
    return Response.json({
      message: err,
      status: 500
    });
  }
}

export async function PUT(req: Request) {
  connectToDB();
  // const data = req.body
  const {
    id,
    commentBody,
    commentDate,
    commentToBeShown,
    answers,
    commentTitle,
    user,
    score,
    course
  } = await req.json();

  console.log("jjj",id,
    commentBody,
    commentDate,
    commentToBeShown,
    answers,
    commentTitle,
    user,
    score,
    course)
  //validations....

  const iscommentExist = await commentModel.findOne({ _id: id });
  if (!iscommentExist) {
    return Response.json({
      message: "پیامی با این شماره وجود ندارد ...",
      status: 409
    });
  }
  const comment = await commentModel.findOneAndUpdate(
    { _id: id },
    {
      commentBody,
      commentDate,
      commentToBeShown,
      answers,
      commentTitle,
      user,
      score,
      course
    }
  );
  return Response.json({
    message: "پیام با موفقیت یه روز رسانی شد ...",
    status: 200
  });
}
