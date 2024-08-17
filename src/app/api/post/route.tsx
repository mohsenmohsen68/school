import connectToDB from "@/utils/connectToDB";
import postModel from "@/models/post";

export async function GET(){
   connectToDB()
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
export async function POST(req:Request){
  connectToDB()
  const {
   postID,
   title,
   author,
   publishedDate,
   img,
   postBody
 } = await req.json();
 console.log("post body : ", postBody)
 try {
   const post = await postModel.create({
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
export async function DELETE(){

}
export async function PUT(){

}