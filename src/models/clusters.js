const mongoose = require("mongoose")


const schema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    clusterBody:{
        type:String,
        default:"",
    }

})


const ClustersModel = mongoose.models.Cluster || mongoose.model("Cluster", schema)
export default ClustersModel