import userModel from "@/models/users";
import { verifyToken } from "@/utils/auth";
import connectToDB from "@/utils/connectToDB";
import { cookies } from "next/headers";


export async function GET( req : Request){
    
    connectToDB()
    let user = null;
    const token = cookies().get('token')
    if(!token){
        return Response.json({message:'the user is invalid ..'}, { status:422})
    }
    const tokenPayLoad =await verifyToken(token.value)
    console.log("tpl ",tokenPayLoad)
    if (tokenPayLoad) {
      user = await userModel.findOne({ userName: tokenPayLoad.userName });
      return Response.json({message:"the user is valid ..",data:user},{status:200})
    }
}