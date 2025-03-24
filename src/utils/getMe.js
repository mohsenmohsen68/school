
import { cookies } from "next/headers";
import connectToDB from "./connectToDB"
import {verifyToken} from "./auth"
import userModel from "@/models/users";

const getMe = async()=>{
  connectToDB()
    let user = null;
    const token = cookies().get("token")
    console.log("token", token)
    if (token) {
      const tokenPayLoad =await verifyToken(token.value)
      console.log("token pauload :", tokenPayLoad)
      if (tokenPayLoad) {
        user = await userModel.findOne({ userName: tokenPayLoad.userName });
      } 
    }

    if(user){
      return user
    }else{
      return null
    }

}
export {getMe}