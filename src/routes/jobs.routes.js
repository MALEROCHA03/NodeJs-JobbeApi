const { default: fastify } = require("fastify")

const routes = [

{
    url: '/jobs',
    method: 'GET',
    handler: (request, reply) =>{
        reply.send('Jobs')
    }
},
{
    url: '/job/:jobId',
    method: 'GET',
    handler: (request, reply) =>{
        reply.send('Single Jobs')
    }
},
{
    url: '/jobs',
    method: 'POST',
    handler: (request, reply) =>{
        reply.send('creating Jobs')
    }
},
{
    url: '/jobs/:jobId',
    method: 'DELETE',
    handler: (request, reply) =>{
        reply.send('Deleting a Job')
    }
},
{
    url: '/jobs/:jobId',
    method: 'PUT',
    handler: (request, reply) =>{
        reply.send('Updating a Job')
    }
}
]

module.exports = routes;


