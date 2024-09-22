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
  const iscommentExist = await commentModel.findOne({ commentCode: commentID });
  if (!iscommentExist) {
    return Response.json({
      message: "چنین کاربری وجود ندارد ...",
      status: 404
    });
  } else {
    await commentModel.findOneAndDelete({ commentCode: commentID });
    return Response.json({
      message: "کاربر مورد نظر حذف گردید ...",
      status: 200
    });
  }
  // return Response.json({message : "delete done"});
}

export async function POST(req: Request) {
  connectToDB();
  // const data = req.body
  console.log("req",req)
  const {
    commentID,
    commentBody,
    commentTitle,
    commentAuthor,
    commentDate,
    commentToBeShown,
    answers
  } = await req.json();
console.log("hjkjh",
  commentID,
    commentBody,
    commentTitle,
    commentAuthor,
    commentDate,
    commentToBeShown,
    answers
)
  try{
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
            status: 201,
        });
    }
    catch(err){
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
    firstName,
    lastName,
    commentCode,
    fathersName,
    school,
    age,
    grade,
    phoneNumber,
    img,
    commentName,
    role
  } = await req.json();

  //validations....

  const iscommentExist = await commentModel.findOne({ commentCode });
  if (!iscommentExist) {
    return Response.json({
      message: "کاربر با این نام کاربری یا شماره همراه ثبت نام نکرده است ...",
      status: 409
    });
  }
  const comment = await commentModel.findOneAndUpdate(
    { commentCode },
    {
      firstName,
      lastName,
      commentCode,
      fathersName,
      school,
      age,
      grade,
      phoneNumber,
      img,
      commentName,
      role
    }
  );
  return Response.json({
    message: "کاربر با موفقیت یه روز رسانی شد ...",
    status: 200
  });
}
