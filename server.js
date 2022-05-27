const fastify = require("fastify")({ logger: true });
require("dotenv").config();
const mongoose = require("mongoose");
PORT = 8000;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

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
