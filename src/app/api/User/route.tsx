import userModel from "@/models/users";
import connectToDB from "@/utils/connectToDB";
import { NextApiRequest, NextApiResponse } from "next";

export async function GET(){
    connectToDB()
    const userData =await userModel.find({})
    if(userData){
       return Response.json({message:"all the users retrived ..", data:userData}, {status:200})
    }else{
        return Response.json({message:"no users available .."})
    }
    
}
// export async function POST(req:NextApiRequest, res:NextApiResponse ){
//     connectToDB()
//     const userData = req.body
//     const user =await userModel.create(userData)
//     if(user){
//        return res.status(201).json({"message":"new user added to data base ...."})
//     }else{
//         return res.status(409).json({"message": "client side error due to invalid data ..."})
//     }
// }