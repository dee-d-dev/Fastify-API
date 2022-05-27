const fastify = require("fastify")({ logger: true });
PORT=6000

const start = async() => {
    try{
        await fastify.listen(PORT)
    }catch(err){
        fastify.log.error(err)
        process.exit(1)
    }
}

start()
