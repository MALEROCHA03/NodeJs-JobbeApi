const fastify = require('fastify')();
const jobsController = require('../controllers/jobs.controller')

fastify.decorate("authenticate", async function (request, reply) {
    try {
        await request.jwtVerify()
    } catch (error) {
        reply.send(error);
    }
});

const routes  = [

{
    url: '/jobs',
    method: 'GET',
    onRequest: [fastify.authenticate],
    handler: jobsController.getJobs,
   
},
{
    url: '/job/:id',
    method: 'GET',
    onRequest: [fastify.authenticate],
    handler: jobsController.getJob
},
{
    url: '/jobs',
    method: 'POST',
    onRequest: [fastify.authenticate],
    handler: jobsController.createJob
    
},
{
    url: '/jobs/:id',
    method: 'DELETE',
    onRequest: [fastify.authenticate],
    handler: jobsController.deleteJob
   
},
{
    url: '/jobs/:id',
    method: 'PUT',
    onRequest: [fastify.authenticate],
    handler: jobsController.updateJob
   
}
]

module.exports = routes;


