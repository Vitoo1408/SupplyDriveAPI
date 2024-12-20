import jobTypesService from '../services/jobTypesService.js';

const jobTypesController = {
  async getAllJobTypes(request, reply) {
    try {
      const jobTypes = await jobTypesService.getAllJobTypes();
      reply.send(jobTypes);
    } catch (error) {
      reply.status(500).send({ error: error.message });
    }
  },

  async getJobTypeById(request, reply) {
    try {
      const { id } = request.params;
      const jobType = await jobTypesService.getJobTypeById(id);
      reply.send(jobType);
    } catch (error) {
      reply.status(500).send({ error: error.message });
    }
  },

  async createJobType(request, reply) {
    try {
      const jobTypeData = request.body;
      const newJobType = await jobTypesService.createJobType(jobTypeData);
      reply.status(201).send(newJobType);
    } catch (error) {
      reply.status(500).send({ error: error.message });
    }
  },

  async updateJobType(request, reply) {
    try {
      const { id } = request.params;
      const jobTypeData = request.body;
      const updatedJobType = await jobTypesService.updateJobType(id, jobTypeData);
      reply.send(updatedJobType);
    } catch (error) {
      reply.status(500).send({ error: error.message });
    }
  },

  async deleteJobType(request, reply) {
    try {
      const { id } = request.params;
      const deletedJobType = await jobTypesService.deleteJobType(id);
      reply.send(deletedJobType);
    } catch (error) {
      reply.status(500).send({ error: error.message });
    }
  },
};

export default jobTypesController;
