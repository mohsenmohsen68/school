import connectToDB from "@/utils/connectToDB";
import courseModel from "@/models/course";

export async function GET(){
    connectToDB()
    try{
       const courses = await courseModel.find({})
       console.log('courses', courses)
    }catch(err){

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