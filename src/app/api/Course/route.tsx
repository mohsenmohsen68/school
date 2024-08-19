import connectToDB from "@/utils/connectToDB";
import courseModel from "@/models/course";

export async function GET(){
    connectToDB()
    try{
       const courses = await courseModel.find({})
       return Response.json({message:'لیست دوره ها برایتان ارسال گردید.', status:200, data:courses})
    }catch(err){
        return Response.json({message:'مشکلی بوجود آمده است...', status:500})
    }
}
export async function POST(req : Request){
    connectToDB()
    const {
        courseID,
        title,
        description,
        discount,
        price,
        status,
        sessionNo,
        preRequisite,
        lastUpdate,
        courseType,
        studentNo,
        stisfiction,
        img,
        courseBody,
        teacher,
        publishedDate
    } = await req.json() 
    console.log('courseBody : ' , courseBody)


    try{
        await courseModel.create({courseID,
            title,
            description,
            discount,
            price,
            status,
            sessionNo,
            preRequisite,
            lastUpdate,
            courseType,
            studentNo,
            stisfiction,
            publishedDate,
            img,
            courseBody,
            teacher})
        return Response.json({message:'course created successfully ...', status:201})
    }catch(err){
        return Response.json({message:'something went wrong ...', status:500})
    }
   
}
export async function PUT(){

}
export async function DELETE(){

}