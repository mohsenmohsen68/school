import mongoose from "mongoose";

const schema = new mongoose.Schema({
    title: {
        type : String,
        require : true,

    },
    img : {
        type: String,
        require : true,
    },
    publishedDate : {
        type : String,
        require : true,
    },
    author : {
        type : String,
        require : true,
    },
    postBody:{
        type: String,
    },
    postID:{
        type : String,
    }

})

const postModel =  mongoose.models.Post || mongoose.model('Post', schema) ;

export default postModel;