// const nodemailer = require("nodemailer");

// // To send mail

// exports.SendMail = (message, recipient) => {
//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: process.env.HOST,
//       pass: process.env.HOST_PASSWORD,
//     },
//     tls: {
//       rejectUnauthorized: false,
//     },
//   });

//   let mailOptions = {
//     from: process.env.HOST,
//     to: ,
//     subject: "testing",
//     text: "new text sent from nodemailer using nodejs",
//   };

//   transporter.sendMail(mailOptions, function (err, success) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("email sent successfully");
//     }
//   });
// };
