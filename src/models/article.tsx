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
    publishDate : {
        type : String,
        require : true,
    },
    author : {
        type : String,
        require : true,
    }

})


const articleModel = mongoose.models.Articles|| mongoose.model('Article', schema)

export default articleModel