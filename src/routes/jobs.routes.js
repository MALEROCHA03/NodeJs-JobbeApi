const { default: fastify } = require("fastify")
const jobsController = require('../controllers/jobs.controller')
const routes = [

{
    url: '/jobs',
    method: 'GET',
    handler: jobsController.getJobs
   
},
{
    url: '/job/:id',
    method: 'GET',
    handler: jobsController.getJob
},
{
    url: '/jobs',
    method: 'POST',
    handler: jobsController.createJob
    
},
{
    url: '/jobs/:id',
    method: 'DELETE',
    handler: jobsController.deleteJob
   
},
{
    url: '/jobs/:id',
    method: 'PUT',
    handler: jobsController.updateJob
   
}
]

module.exports = routes;


