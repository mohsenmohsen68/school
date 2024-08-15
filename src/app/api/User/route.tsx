import userModel from "@/models/users";
import { generateAccessToken, hashedPassword } from "@/utils/auth";
import connectToDB from "@/utils/connectToDB";
import { hashSync } from "bcryptjs";
import { NextApiRequest, NextApiResponse } from "next";
import { role } from "@/utils/Constants";

export async function GET(req:Request){
    connectToDB()
    const myUrl = new URL(req.url)
    const userID = myUrl.searchParams.get('id')
    console.log('userID...', userID)
     if(!userID){
         const userData =await userModel.find({})
         console.log(userData)
         if(userData){
            return Response.json({message:"all the users retrived ..", data:userData}, {status:200})
         }else{
             return Response.json({message:"no users available .."})
         }
     }else{
        const isUserExist = await userModel.findOne({
            $or:[{userName:userID},{ phoneNumber:userID}, {userCode:userID}]
        })
        if(isUserExist){
            return Response.json({message:'کاربر با این نام کاربری با شماره همراه وجود دارد ...',status:200,data:isUserExist})
        }else{
            return Response.json({message:'چنین کاربری وجود ندارد ...',status:404})
        }
     }
    
}

export async function DELETE(req:Request){
    connectToDB()
    const myUrl = new URL(req.url)
    const userID = myUrl.searchParams.get('id')
    // console.log("request, userCode : ", prm)
    const isUserExist = await userModel.findOne({userCode:userID})
    if(!isUserExist){
       return Response.json({message: "چنین کاربری وجود ندارد ...", status:404})
    }else{
      await userModel.findOneAndDelete({userCode:userID})
      return Response.json({message:'کاربر مورد نظر حذف گردید ...',status:200})
    }
    // return Response.json({message : "delete done"});
}

export async function POST(req:Request){
    connectToDB()
    // const data = req.body
    const {
        firstName,
        lastName,
        userCode,
        fathersName,
        school,
        age,
        grade,
        phoneNumber,
        password,
        img,
        userName,
        role
    } =  await req.json()
    
    //validations....
 
    
    const isUserExist = await userModel.findOne({
        $or:[{userName},{ phoneNumber}, {userCode}]
    })
    if(isUserExist){
        return Response.json({message:'کاربر با این نام کاربری با شماره همراه ثبت نام کرده است ...',status:409})
    }
    
    const myHashedPassword = await hashedPassword(password)
    const accessToken = generateAccessToken({userName})
 
console.log("hashed",myHashedPassword,"accesstoken", accessToken)

    const users = await userModel.findOne({})
    const user =await userModel.create({firstName,lastName, userCode, fathersName, school, age, grade, phoneNumber, password: myHashedPassword, img, userName, role: users !== null ? role : "ADMIN"})
    
    return Response.json({message:'کاربر با موفقیت اضافه شد ...',status:200 , headers: {
        "Set-Cookie" : `token=${accessToken}; path=/; httpOnly=true` 
    } })
}
export async function PUT(req:Request){
    connectToDB()
    // const data = req.body
    const {
        firstName,
        lastName,
        userCode,
        fathersName,
        school,
        age,
        grade,
        phoneNumber,
        img,
        userName,
        role
    } =  await req.json()
    
    //validations....
 
    
    const isUserExist = await userModel.findOne({userCode})
    if(!isUserExist){
        return Response.json({message:'کاربر با این نام کاربری یا شماره همراه ثبت نام نکرده است ...',status:409})
    }
    const user =await userModel.findOneAndUpdate({userCode} ,{firstName,lastName, userCode, fathersName, school, age, grade, phoneNumber, img, userName, role})
    return Response.json({message:'کاربر با موفقیت یه روز رسانی شد ...',status:200 })
}