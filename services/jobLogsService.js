import jobLogsModel from '../models/jobLogsModel.js';

const jobLogsService = {
  async getAllLogs() {
    try {
      return await jobLogsModel.getAllLogs();
    } catch (error) {
      throw new Error('Failed to fetch job logs');
    }
  },

  async getLogById(logId) {
    try {
      const log = await jobLogsModel.getLogById(logId);
      if (!log) {
        throw new Error('Job log not found');
      }
      return log;
    } catch (error) {
      throw new Error('Failed to fetch job log');
    }
  },

  async createLog(logData) {
    try {
      return await jobLogsModel.createLog(logData);
    } catch (error) {
      throw new Error('Failed to create job log');
    }
  },

  async deleteLog(logId) {
    try {
      const deletedLog = await jobLogsModel.deleteLog(logId);
      if (!deletedLog) {
        throw new Error('Job log not found');
      }
      return deletedLog;
    } catch (error) {
      throw new Error('Failed to delete job log');
    }
  },
};

export default jobLogsService;
