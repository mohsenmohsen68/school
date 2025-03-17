import userModel from "./../../../../../models/users"
import connectToDB from "@/utils/connectToDB"

export async function PUT(req) {
  connectToDB
  const { userCode, img } = await req.json();
  console.log("usercodee", userCode, "imagee", img)

  const user = await userModel.findOneAndUpdate({ userCode }, {
    img
  });
  return Response.json({
    message: "user updated successfully",
    status: 200
  });
}