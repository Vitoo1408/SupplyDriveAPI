import jobLogsService from '../services/jobLogsService.js';

const jobLogsController = {
  async getAllLogs(request, reply) {
    try {
      const logs = await jobLogsService.getAllLogs();
      reply.send(logs);
    } catch (error) {
      reply.status(500).send({ error: error.message });
    }
  },

  async getLogById(request, reply) {
    try {
      const { id } = request.params;
      const log = await jobLogsService.getLogById(id);
      reply.send(log);
    } catch (error) {
      reply.status(500).send({ error: error.message });
    }
  },

  async createLog(request, reply) {
    try {
      const logData = request.body;
      const newLog = await jobLogsService.createLog(logData);
      reply.status(201).send(newLog);
    } catch (error) {
      reply.status(500).send({ error: error.message });
    }
  },

  async deleteLog(request, reply) {
    try {
      const { id } = request.params;
      const deletedLog = await jobLogsService.deleteLog(id);
      reply.send(deletedLog);
    } catch (error) {
      reply.status(500).send({ error: error.message });
    }
  },
};

export default jobLogsController;
