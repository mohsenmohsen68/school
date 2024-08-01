import mongoose from 'mongoose'

const schema = new mongoose.Schema({
    firstName:{
        type:String,
        minlength:3,
    },
    lastName:{
        type:String,
        minlength:3,
    },
    userCode:{
        type:String,
        require:true,
        length:10,
    },
    fathersName:{
        type:String,
        minlength:3,
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
    } ,
    role:{
        type:String,
        required:true,
        default:"STUDENT"
    } ,
    refreshToken:{
        type:String,
    }
})

const userModel =    mongoose.models.User || mongoose.model('User',schema) 
export default userModel;