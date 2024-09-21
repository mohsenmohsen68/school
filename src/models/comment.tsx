import { List } from 'ckeditor5'
import mongoose from 'mongoose'


const schema = new mongoose.Schema({
    commentID:{
        type : String,
        require : true,
    },
    commentBody : {
        type : String,
        require : true,
    },
    commentAuthor : {
        type :String,
        require : true,
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
        type : List,
    }
})

const commentModel = mongoose.models.Comment || mongoose.model("Comment",schema)
export default commentModel