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
