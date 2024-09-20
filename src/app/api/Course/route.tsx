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
export async function PUT(req : Request){
    connectToDB()
  const body = await req.json()
  try{
     await courseModel.findOneAndUpdate({courseID:body.courseID},{
        courseID : body.courseID,
        title : body.title,
        description : body.description,
        discount : body.discount,
        price : body.price,
        status : body.status,
        sessionNo : body.sessionNo,
        preRequisite : body.preRequisite,
        lastUpdate : body.lastUpdate,
        courseType : body.courseType,
        studentNo : body.studentNo,
        stisfiction : body.stisfiction,
        img : body.img,
        courseBody : body.courseBody,
        teacher : body.teacher,
     })

     return Response.json({message:'the course updated successfully', status:200})
  }catch(err){
    return Response.json({message:'Oops, something went wrong ...', status:500})
  }
}


export async function DELETE(req:Request){
    connectToDB()
    const myUrl = new URL(req.url)
    const courseID = myUrl.searchParams.get('courseID')
    // console.log("request, userCode : ", prm)
    const isCourseExist = await courseModel.findOne({courseID})
    if(!isCourseExist){
       return Response.json({message: "چنین دوره ای وجود ندارد ...", status:404})
    }else{
      await courseModel.findOneAndDelete({courseID})
      return Response.json({message:'دوره مورد نظر حذف گردید ...',status:200})
    }
}