const mongoose = require("mongoose");
const { Schema } = mongoose;

const user_schema = new Schema({
  name: {
    type: String,
  },
});

const User = mongoose.model("user", user_schema);

module.exports = User;
