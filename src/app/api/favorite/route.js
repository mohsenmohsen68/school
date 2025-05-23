import mongoose from "mongoose";
import favoriteModel from "@/models/Favorites";
const { default: connectToDB } = require("@/utils/connectToDB");


export async function POST(req) {
   connectToDB()
   try {
      const { user, course } = await req.json();
      console.log("---> : ", user, course)
      if (!mongoose.isValidObjectId(user) || !mongoose.isValidObjectId(course)) {
         return Response.json({ message: "user or course is invalid ....", status: 422 })
      } else {
         const isFavoriteAdded = await favoriteModel.findOne({ user, course })
         console.log("add", isFavoriteAdded)
         if (isFavoriteAdded) {
            return Response.json({ message: "this favorite had been added already ..", status: 409 })
         } else {
            const favorite = await favoriteModel.create({ user, course })
            return Response.json({ message: "favorites added successfully ..", status: 201 })
         }
      }
   } catch (err) {
      return Response.json({ message: "something went wrong on serer side....", status: 500 })
   }
}
export async function GET(req) {
   connectToDB()
   try {
      const params = new URL(req.url).searchParams
      console.log("params", params)
      const userID = params.get("userID")
      console.log(userID)
      const myFavorits = await favoriteModel.find({ user: userID })
      return Response.json({ message: "ok....", data: myFavorits }, { status: 200 })
   } catch (err) {
      return Response.json({ message: "something went wrong on serer side....", status: 500 })
   }
}

export async function DELETE(req) {
   connectToDB()
   try {
      const { user, course } = await req.json();
      console.log("---> : ", user, course)
      if (!mongoose.isValidObjectId(user) || !mongoose.isValidObjectId(course)) {
         return Response.json({ message: "user or course is invalid ....", status: 422 })
      } else {
         const isFavoriteAdded = await favoriteModel.findOne({ user, course })
         console.log("del", isFavoriteAdded)
         if (!isFavoriteAdded) {
            return Response.json({ message: "there is no such a favorite", status: 409 })
         } else {
            const favorite = await favoriteModel.findOneAndDelete({ user, course })
            return Response.json({ message: "favorites deleted successfully ..", status: 200 })
         }
      }
   } catch (err) {
      return Response.json({ message: "something went wrong on serer side....", status: 500 })
   }
}

