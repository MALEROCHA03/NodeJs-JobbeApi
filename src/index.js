const fastify = require('fastify')(
    {
        logger: true
    }
);

fastify.get('/', (request, reply) => {
    reply.send({hello: 'world'})
}) 
const start = async () => {
    await fastify.listen(3000);
    fastify.log.info(`server started on port ${fastify.server.address().port}`)
};

start();

