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
    category : {
        type:String,
        isrequire : true,
    },
    publishedDate : {
        type : String,
        require : true,
    },
    author : {
        type : String,
        require : true,
    },
    articleBody:{
        type: String,
    },
    articleID:{
        type : String,
    }

})


const articleModel = mongoose.models.Article|| mongoose.model('Article', schema)

export default articleModel