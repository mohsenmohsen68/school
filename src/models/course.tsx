import mongoose from 'mongoose'

const schema = new mongoose.Schema({
    courseID:{
        type:String,
        require: true,
    },
    title: {
       type : String,
       require: true
    },
    description:{
        type : String,
        require: true
    },
    discount:{
        type : Number,
    },
    price:{
        type : Number,
        require: true
    },
    status:{
       type: String,
       require : true,
    },
    sessionNo:{
        type: Number,
        require : true,
    },
    lastUpdate:{
        type: String,
        require : true,
    },
    preRequisite:{
        type : String,
        require: true
    },
    courseType:{
        type : String,
        require: true
    },
    studentNo:{
        type : Number,
        require: true
    },
    stisfiction:{
        type : Number,
        require: true
    },
    img:{
        type : String,
        require: true
    },
    courseBody:{
        type : String,
    },
    teacher:{
        type : String,
        require: true
    }

})



const courseModel = mongoose.models.Course || mongoose.model('Course',schema) ;

export default courseModel