import postModel from "@/models/post"
import connectToDB from "@/utils/connectToDB"

export async function PUT(req) {
  connectToDB()
  const { postID, img } = await req.json();
  console.log("article id ; ", postID, "imagee", img)

  const post = await postModel.findOneAndUpdate({ postID }, {
    img
  });
  return Response.json({
    message: "user updated successfully",
    status: 200
  });
}