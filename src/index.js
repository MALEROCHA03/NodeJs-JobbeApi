const fastify = require('fastify')();
require('./utils/mongoose')
fastify.register(require('@fastify/jwt'), {
    secret: 'mysecret'
})

const jobsRoutes = require("./routes/jobs.routes")

fastify.get('/generateToken/:id', (request, reply) => {
    const data = {
        name: request.params.id
    }
    const token = fastify.jwt.sign(data);
    reply.send({ token });
});

jobsRoutes.forEach((routes) => {

    fastify.route(routes);
})

const start = async () => {
    await fastify.listen(3000);
    fastify.log.info(`server started on port ${fastify.server.address().port}`)
};

start();
