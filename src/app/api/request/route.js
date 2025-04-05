import connectToDB from "@/utils/connectToDB";
import requestModel from "@/models/Requests";

export async function POST(req) {
  try {
    connectToDB();
    const { title, requestBody, user } = await req.json();
    console.log(title, requestBody, user);
    const date = Date.now();
    const request = await requestModel.create({
      title,
      requestBody,
      response: "",
      isChecked: false,
      date,
      user
    });
    return Response.json({
      message: "request added successfully",
      status: 201
    });
  } catch (err) {
    return Response.json({ message: err }, { status: 500 });
  }
}
export async function DELETE(req) {
  try {
    connectToDB();
    const { id } = await req.json();
    console.log("iddd : ", id)
    await requestModel.findOneAndDelete({ _id: id });
    return Response.json({
      message: "request added successfully",
      status: 200
    });

  } catch (err) {
    return Response.json({ message: err }, { status: 500 });
  }
}
export async function PUT(req) {
  try {
    connectToDB();
    const { title, requestBody, response, user, isChecked, id } = await req.json();
    console.log(title, requestBody, user, isChecked, response);
    const request = await requestModel.findOneAndUpdate({ _id: id }, {
      title,
      requestBody,
      response,
      isChecked,
      user
    });
    if (request) {
      return Response.json({
        message: "request updated successfully",
        status: 200
      });
    } else {
      return Response.json({
        message: "there is no such a ticket",
        status: 400
      });
    }
  } catch (err) {
    return Response.json({ message: err }, { status: 500 });
  }
}
export async function GET() {
  try {
    connectToDB();
    const request = await requestModel.find({}).populate("user", " firstName lastName");
    return Response.json({
      message: "requests returned",
      data: request,
    },{status: 200});
  } catch (err) {
    return Response.json({ message: err }, { status: 500 });
  }
}
