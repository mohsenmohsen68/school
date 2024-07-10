import mongoose from 'mongoose'

const schema = new mongoose.Schema({
    firstName:{
        type:String,
        minlength:4
    },
    lastName:{
        type:String,
        minlength:4
    },
    userCode:{
        type:String,
        require:true,
        length:10,
    },
    fathersName:{
        type:String,
        minlength:4,
    },
    school:{
        type:String,
    },
    age:{
        type:Number,
    },
    grade:{
        type:String,
    },
    phoneNumber:{
        type:String,
        length:11,
    },
    password:{
        type:String,
        required:true,
    },
    img:{
        type:String,
    },
    userName:{
        type:String,
        required:true,
    }  
})

const model =  mongoose.model('User',schema) || mongoose.models.User
export default model;