import clusterModel from "@/models/clusters";
import connectToDB from "@/utils/connectToDB";

export async function GET() {
    connectToDB();
    try {
        const clusters = await clusterModel.find({});
        return Response.json({
            message: "the written comment are sent back to you ...",
            data: clusters,
            status: 200
        });
    } catch (err) {
        return Response.json({ message: "something went wrong ...", status: 500 });
    }
}

export async function DELETE(req) {
    connectToDB();
    const myUrl = new URL(req.url);
    const clusterID = myUrl.searchParams.get("id");
    // console.log("request, commentCode : ", prm)
    const isClusterExist = await clusterModel.findOne({ _id: clusterID });
    if (!isClusterExist) {
        return Response.json({
            message: "چنین خوشه ای وجود ندارد ...",
            status: 404
        });
    } else {
        await clusterModel.findOneAndDelete({ _id: clusterID });
        return Response.json({
            message: "خوشه مورد نظر حذف گردید ...",
            status: 200
        });
    }
    // return Response.json({message : "delete done"});
}

export async function POST(req) {
    connectToDB();
    // const data = req.body
    console.log("req", req);
    const {title } = await req.json();
   console.log("title : ", title)
    try {
        const comment = await clusterModel.create({
            title,
            clusterBody:'',
        });

        return Response.json({
            message: "خوشه با موفقیت ثبت شد ...",
            status: 201
        });
    } catch (err) {
        return Response.json({
            message: "مشکلی در سمت سرور به وجود آمده است ...",
            status: 500
        });
    }
}
export async function PUT(req) {
    connectToDB();
    // const data = req.body
    console.log("req", req);
    const {title, clusterBody } = await req.json();
   console.log("title : ", title, "clusterBody ", clusterBody)
    try {
        const cluster = await clusterModel.find({
            title
        });

        if(!cluster){
            return Response.json({
                message: "چنین خوشه ای وجود ندارد ...",
                status: 400
            });  
        }
        await clusterModel.findOneAndUpdate({title},{clusterBody})
        return Response.json({
            message: "خوشه با موفقیت ویرایش  شد ...",
            status: 200
        });
    } catch (err) {
        return Response.json({
            message: "مشکلی در سمت سرور به وجود آمده است ...",
            status: 500
        });
    }
}


