const User = require("../models/User");
const nodemailer = require('nodemailer')

const createUser = async (req, reply) => {
  const { name } = req.body;
  const user = new User({
    name,
  });
  user.save();

  reply.send(user);
};

const getUser = async (req, reply) => {
  const users = await User.find();

  reply.send(users);
};

const updateUser = async (req, reply) => {
  const { id } = req.params;
  const { ...name } = req.body;
  const user = await User.findByIdAndUpdate(id, name, { new: true });

  reply.send(user);
};

const deleteUser = async (req, reply) => {
  const { id } = req.params;
  const user = await User.findByIdAndDelete(id);

  reply.send(`user with id ${id} has been deleted`);
};

const sendMail = async (req, reply) => {
  const { message } = req.body.message;
  const { recipient } = req.body.recipient;
  const {subject} = req.body.subject

  const nodemailer = require("nodemailer");

  // To send mail
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SENDER,
      pass: process.env.SENDER_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  let mailOptions = {
    from: process.env.HOST,
    to: "tyxolo@forexnews.bg",
    subject: subject,
    text: message,
  };

  transporter.sendMail(mailOptions, function (err, success) {
    if (err) {
      console.log(err);
    } else {
      console.log("email sent successfully");
    }
  });


  reply.send(`email sent successfully`);
};

module.exports = { createUser, getUser, updateUser, deleteUser, sendMail };
