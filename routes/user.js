const {
  createUser,
  getUser,
  updateUser,
  deleteUser,
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

function userRoutes(fastify, options, done) {
  //create user
  fastify.post("/users", createUserOpt);

  //get users
  fastify.get("/users", getUsersOpt);

  //update users
  fastify.put("/users/:id", updateUsersOpt);

  //delete users
  fastify.delete("/users/:id", deleteUsersOpt);

  done();
}

module.exports = userRoutes;
