import articleModel from "@/models/article"
import connectToDB from "@/utils/connectToDB"

export async function PUT(req) {
  connectToDB()
  const { articleID, img } = await req.json();
  console.log("article id ; ", articleID, "imagee", img)

  const article = await articleModel.findOneAndUpdate({ articleID }, {
    img
  });
  return Response.json({
    message: "user updated successfully",
    status: 200
  });
}