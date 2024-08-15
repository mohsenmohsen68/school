import connectToDB from './../../../utils/connectToDB'
import articleModel from './../../../models/article'
export async function GET(){
   connectToDB()
   try{
       const articles = await articleModel.find({})
       return Response.json({message : "the written articles are sent back to you ...", data: articles, status: 200})
   }catch(err){
       return Response.json({message : "something went wrong ...", status: 500})
   }
}

export async function POST(req){
    connectToDB()
    const {body} = await req.json()
    console.log(body)


    return Response.json({message: "article uploaded successfully ...", status: 201})
}