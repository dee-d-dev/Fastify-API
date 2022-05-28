const {
  createUser,
  getUser,
  updateUser,
  deleteUser,
  sendMail
} = require("../controllers/user");



const User = {
  type: "object",
  properties: {
    name: { type: "string" },
  },
};

const createUserOpt = {
  schema: {
    response: {
      200: User,
    },
  },
  handler: createUser,
};
const getUsersOpt = {
  schema: {
    response: {
      200: {
        type: "array",
        User,
      },
    },
  },
  handler: getUser,
};
const updateUsersOpt = {
  schema: {
    response: {
      200: User,
    },
  },
  handler: updateUser,
};
const deleteUsersOpt = {
  schema: {
    response: {
      200: User,
    },
  },
  handler: deleteUser,
};
const sendMailOpt = {
  schema: {
    response: {
      200:{
        type: "string"
      },
    },
  },
  handler: sendMail,
};

function userRoutes(fastify, options, done) {
  //create user
  fastify.post("/users", createUserOpt);

  //get users
  fastify.get("/users", getUsersOpt);

  //update users
  fastify.put("/users/:id", updateUsersOpt);

  //delete users
  fastify.delete("/users/:id", deleteUsersOpt);

  fastify.post("/send", sendMailOpt);

  done();
}

module.exports = userRoutes;
