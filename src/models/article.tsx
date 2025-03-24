import mongoose from 'mongoose'

const schema = new mongoose.Schema({
    title: {
        type : String,
        require : true,

    },
    keyWords:{
        type : String,
        require : true,
    },
    img : {
        type: String,

    },
    cluster : {
        type:String,
        require : true,
    },
    publishedDate : {
        type : String,
        require : true,
    },
    articleBody:{
        type: String,
    },
    articleID:{
        type : String,
    },
    comments:{
        type:[{
            type: mongoose.Types.ObjectId,
            ref: "Comment"
        }]
    },
    author:{
        type:mongoose.Types.ObjectId,
        ref:"User",
        require: true,
    },
    writer:{
        type:String,
        require: true,
    },
    rate:{
        type:Number,
        default:5,
    },
    desc:{
        type:String,
        require:true,
    }

})


const articleModel = mongoose.models.Article|| mongoose.model('Article', schema)

export default articleModel