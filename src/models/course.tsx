import mongoose from "mongoose";

const schema = new mongoose.Schema({
  courseID: {
    type: String,
    require: true
  },
  title: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require: true
  },
  discount: {
    type: Number
  },
  price: {
    type: Number,
    require: true
  },
  status: {
    type: String,
    require: true
  },
  sessionNo: {
    type: Number,
    require: true
  },
  lastUpdate: {
    type: String,
    require: true
  },
  publishedDate: {
    type: String,
    require: true
  },
  preRequisite: {
    type: String,
    require: true
  },
  courseType: {
    type: String,
    require: true
  },
  studentNo: {
    type: Number,
    require: true
  },
  stisfiction: {
    type: Number,
    require: true,
    default: 5
  },
  img: {
    type: String,
    require: true
  },
  courseBody: {
    type: String
  },
  teacher: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    require: true
  },
  teacherName: {
    type: String,
    required: true
  },
  cluster: {
    type: String,
    require: true
  },

  comments: {
    type: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Comment"
      }
    ]
  }
});

const courseModel = mongoose.models.Course || mongoose.model("Course", schema);

export default courseModel;
