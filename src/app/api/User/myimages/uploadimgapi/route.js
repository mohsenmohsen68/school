import userModel from "./../../../../../models/users"
import connectToDB from "@/utils/connectToDB"

export async function PUT(req) {
  connectToDB
  const { userID, img } = await req.json();
  console.log("usercodee", userID, "imagee", img)

  const user = await userModel.findOneAndUpdate({ _id:userID }, {
    img
  });
  return Response.json({
    message: "user updated successfully",
    status: 200
  });
}