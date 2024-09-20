import connectToDB from "@/utils/connectToDB";
import postModel from "@/models/post";

export async function GET() {
  connectToDB();
  try {
    const posts = await postModel.find({});
    return Response.json({
      message: "the written posts are sent back to you ...",
      data: posts,
      status: 200
    });
  } catch (err) {
    return Response.json({ message: "something went wrong ...", status: 500 });
  }
}
export async function POST(req: Request) {
  connectToDB();
  const { postID, title, author, publishedDate, img, postBody } =
    await req.json();
  console.log("post body : ", postBody);
  try {
    await postModel.create({
      postID,
      title,
      author,
      publishedDate,
      img,
      postBody
    });
    return Response.json({
      message: " پست با موفقیت ثبت گردید ... ",
      status: 201
    });
  } catch (err) {
    return Response.json({
      message: `مشکلی به وجود آمده است ... ${err}`,
      status: 500
    });
  }
}
export async function DELETE(req: Request) {
  connectToDB();
  const myUrl = new URL(req.url);
  const postID = myUrl.searchParams.get("postID");
  // console.log("request, userCode : ", prm)
  const isPostExist = await postModel.findOne({ postID });
  if (!isPostExist) {
    return Response.json({
      message: "چنین پستی ای وجود ندارد ...",
      status: 404
    });
  } else {
    await postModel.findOneAndDelete({ postID });
    return Response.json({
      message: "پست مورد نظر حذف گردید ...",
      status: 200
    });
  }
}
export async function PUT(req: Request) {
  connectToDB()
  const body = await req.json()
  try{
     await postModel.findOneAndUpdate({postID:body.postID},{
      postID: body.postID,
      title: body.title,
      author: body.author,
      publishedDate: body.publishedDate,
      img: body.img,
      postBody: body.postBody,
     })

     return Response.json({message:'the post updated successfully', status:200})
  }catch(err){
    return Response.json({message:'Oops, something went wrong ...', status:500})
  }
}
