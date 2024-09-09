import connectToDB from "../../../utils/connectToDB";
import articleModel from "../../../models/article";


export async function GET() {
  connectToDB();
  try {
    const articles = await articleModel.find({});
    return Response.json({
      message: "the written articles are sent back to you ...",
      data: articles,
      status: 200
    });
  } catch (err) {
    return Response.json({ message: "something went wrong ...", status: 500 });
  }
}

export async function POST(req: Request) {
  connectToDB();
  //console.log("req : ", await req.json());
  const {
    articleID,
    title,
    category,
    keyWords,
    author,
    publishedDate,
    img,
    articleBody
  } = await req.json();
  console.log('article body : ', articleID,
  title,
  category,
  keyWords,
  author,
  publishedDate,
  img,
  articleBody)
  try {
    const article = await articleModel.create({
      articleID,
      title,
      category,
      keyWords,
      author,
      publishedDate,
      img,
      articleBody
    });
    return Response.json({
      message: " مقاله با موفقیت ثبت گردید ... ",
      status: 201
    });
  } catch (err) {
    return Response.json({
      message: `مشکلی به وجود آمده است ... ${err}`,
      status: 500
    });
  }
}

export async function DELETE(req:Request){
  connectToDB()
  const myUrl = new URL(req.url)
  const articleID = myUrl.searchParams.get('articleID')
  // console.log("request, userCode : ", prm)
  const isUserExist = await articleModel.findOne({articleID})
  if(!isUserExist){
     return Response.json({message: "چنین مقاله ای وجود ندارد ...", status:404})
  }else{
    await articleModel.findOneAndDelete({articleID})
    return Response.json({message:'مقاله مورد نظر حذف گردید ...',status:200})
  }
}

export async function PUT(req:Request){
  connectToDB()
  const body = await req.json()
  try{
     await articleModel.findOneAndUpdate({articleID:body.articleID},{
      articleID: body.articleID,
      keyWords: body.keyWords,
      title : body.title,
      category : body.category,
      author : body.author,
      publishedDate : body.publishedDate,
      img : body.img,
      articleBody : body.articleBody
     })

     return Response.json({message:'the article updated successfully', status:200})
  }catch(err){
    return Response.json({message:'Oops, something went wrong ...', status:500})
  }
}
