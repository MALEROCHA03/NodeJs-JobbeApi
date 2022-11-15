const fastify = require('fastify')(
    {
        logger: true
    }
);
require('./utils/mongoose')
const routes = require('./routes/jobs.routes');

const jobsRoutes = require("./routes/jobs.routes")
fastify.get('/', (request, reply) => {
    reply.send({hello: 'world'})
});

jobsRoutes.forEach((routes) => {
  fastify.route(routes);
})

const start = async () => {
    await fastify.listen(3000);
    fastify.log.info(`server started on port ${fastify.server.address().port}`)
};

start();

