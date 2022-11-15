const Jobs = require('../models/jobs.models');




const getJobs = async (request, reply) => {
    const jobs = await Jobs.find()
    return jobs;
}

const getJob = async (request, reply) => {
    const job = await Jobs.findById(request.params.id)
    return reply.code(200).send(job)
}

const createJob = async (request, reply) => {
    const newJob = new Jobs(request.body);
    console.log(newJob);

    await newJob.save();
    reply.send('creating Jobs', newJob)
}

const deleteJob = async (request, reply) => {
    await Jobs.findByIdAndDelete(request.params.id)
    reply.code(204).send();
}

const updateJob = async (request, reply) => {
    try {
        const job = await Jobs.findByIdAndUpdate(req.params.id, req.body, {
          new: true,
          runValidators: true,
        });
    
        reply.code(200).send(job);
      } catch (err) {
        throw boom.boomify(err);
      }
    };
  

module.exports = {
    getJobs,
    getJob,
    createJob,
    deleteJob,
    updateJob

}