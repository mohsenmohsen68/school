
import mongoose from 'mongoose'
require('./course')

const schema = new mongoose.Schema({
    commentTitle : {
        type : String,
        require : true,
    },
    commentBody : {
        type : String,
        require : true,
    },
    score:{
       type:Number,
       default:5,
    },
    commentDate: {
        type : String,
        require: true,
    },
    commentToBeShown : {
        type : Boolean,
        require : true,
    },
    answers : {
        type : String,
    },
    user:{
        type:mongoose.Types.ObjectId,
        ref:"User",
        require : true,
    },
    course:{
        type:mongoose.Types.ObjectId,
        ref:"Course",
        default: "",
    }
})

const commentModel = mongoose.models.Comment || mongoose.model("Comment",schema)
export default commentModel