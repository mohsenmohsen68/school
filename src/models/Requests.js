const mongoose = require("mongoose");
require("./users");

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  requestBody: {
    type: String,
    required: true
  },
  date: {
    type: String,
    require: true,
  },
  response: {
    type: String
  },
  isChecked: {
    type: Boolean,
    required: true,
    default: false,
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User"
  }
});

const requestModel =
  mongoose.models.Request || mongoose.model("Request", schema);

export default requestModel;
