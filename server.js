const fastify = require("fastify")({ logger: true });
require("dotenv").config();
const mongoose = require("mongoose");
PORT = 8000;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error"));

// const nodemailer = require("nodemailer");

// // To send mail
// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.SENDER,
//     pass: process.env.SENDER_PASSWORD,
//   },
//   tls: {
//     rejectUnauthorized: false,
//   },
// });

// let mailOptions = {
//   from: process.env.HOST,
//   to: req.body.recipient,
//   subject: "testing",
//   text: "new text sent from nodemailer using nodejs",
// };

// transporter.sendMail(mailOptions, function (err, success) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("email sent successfully");
//   }
// });



fastify.register(require("./routes/user"));
const start = async () => {
  try {
    await fastify.listen(PORT);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
