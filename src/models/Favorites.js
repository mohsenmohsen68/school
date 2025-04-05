const mongoose = require("mongoose")
require('./course')
require('./users')

const schema = new mongoose.Schema({
    course: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "Course"
    },
    user: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "User"

    }
},
    {
        timestamps: true,
    })


const favoriteModel = mongoose.models.Favorite || mongoose.model("Favorite", schema)
export default favoriteModel