import jobsService from '../services/jobsService.js';

const jobsController = {
  async getAllJobs(request, reply) {
    try {
      const jobs = await jobsService.getAllJobs();
      reply.send(jobs);
    } catch (error) {
      reply.status(500).send({ error: error.message });
    }
  },

  async getJobById(request, reply) {
    try {
      const { id } = request.params;
      const job = await jobsService.getJobById(id);
      reply.send(job);
    } catch (error) {
      reply.status(500).send({ error: error.message });
    }
  },

  async createJob(request, reply) {
    try {
      const jobData = request.body;
      const newJob = await jobsService.createJob(jobData);
      reply.status(201).send(newJob);
    } catch (error) {
      reply.status(500).send({ error: error.message });
    }
  },

  async updateJob(request, reply) {
    try {
      const { id } = request.params;
      const jobData = request.body;
      const updatedJob = await jobsService.updateJob(id, jobData);
      reply.send(updatedJob);
    } catch (error) {
      reply.status(500).send({ error: error.message });
    }
  },

  async deleteJob(request, reply) {
    try {
      const { id } = request.params;
      const deletedJob = await jobsService.deleteJob(id);
      reply.send(deletedJob);
    } catch (error) {
      reply.status(500).send({ error: error.message });
    }
  },
};

export default jobsController;
