const mongoose = require("mongoose");
const { Schema } = mongoose;

const mail_schema = new Schema({
  recipient: {
    type: String,
  },
  subject: {
    type: String,
  },
  message: {
    type: String,
  },
});

const Mail = mongoose.model("mail", mail_schema);

module.exports = Mail;
