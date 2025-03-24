
import connectToDB from "@/utils/connectToDB"
import {comparePasswords, hashedPassword} from "@/utils/auth"
import userModel from "./../../../../../models/users"

export async function PUT(req) {
  connectToDB();
  const { id, lastPass, newPass1, newPass2 } = await req.json();
  console.log(id, lastPass, newPass1, newPass2);
  const isValidPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/g.test(newPass1)
console.log("g", isValidPassword)
  if (!isValidPassword) {
    return Response.json({
      message: "the new password is invalid. ",
      status: 409
    });
  }

  const user = await userModel.findOne({ _id: id });
  console.log("user", user);
  const isCorrectPassword = await comparePasswords(lastPass, user.password);
  console.log("kkkkk :::: ", isCorrectPassword);
  if (!isCorrectPassword) {
    return Response.json({
      message: "the password is wrong",
      status: 422
    });
  }

  if(newPass1 !== newPass2){
    return Response.json({
        message: "the passwords are not equal",
        status: 422
      });
  }

  const newPassword = await hashedPassword(newPass1);
console.log("hashed pass : ", newPassword)
  await userModel.findOneAndUpdate({ _id: id }, { password: newPassword });

  return Response.json({
    message: "رمز کاربر با موفقیت تغییر کرد...",
    status: 200
  });
}
