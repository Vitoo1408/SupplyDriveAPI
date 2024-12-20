import jobTypesModel from '../models/jobTypesModel.js';
import logModel from '../models/logModel.js';

const jobTypesService = {
  async getAllJobTypes() {
    try {
      const jobTypes = await jobTypesModel.getAllJobTypes();
      await logModel.createLog({
        action: 'READ_ALL_JOB_TYPES',
        resources: 'JobTypes',
        status: 'SUCCESS',
      });
      return jobTypes;
    } catch (error) {
      await logModel.createLog({
        action: 'READ_ALL_JOB_TYPES',
        resources: 'JobTypes',
        status: 'FAILED',
      });
      throw new Error('Failed to fetch job types');
    }
  },

  async getJobTypeById(jobTypeId) {
    try {
      const jobType = await jobTypesModel.getJobTypeById(jobTypeId);
      if (!jobType) {
        throw new Error('Job type not found');
      }
      await logModel.createLog({
        action: 'READ_JOB_TYPE',
        resources: `JobTypes/${jobTypeId}`,
        status: 'SUCCESS',
      });
      return jobType;
    } catch (error) {
      await logModel.createLog({
        action: 'READ_JOB_TYPE',
        resources: `JobTypes/${jobTypeId}`,
        status: 'FAILED',
      });
      throw new Error('Failed to fetch job type');
    }
  },

  async createJobType(jobTypeData) {
    try {
      const newJobType = await jobTypesModel.createJobType(jobTypeData);
      await logModel.createLog({
        action: 'CREATE_JOB_TYPE',
        resources: `JobTypes/${newJobType.job_type_id}`,
        status: 'SUCCESS',
      });
      return newJobType;
    } catch (error) {
      await logModel.createLog({
        action: 'CREATE_JOB_TYPE',
        resources: 'JobTypes',
        status: 'FAILED',
      });
      throw new Error('Failed to create job type');
    }
  },

  async updateJobType(jobTypeId, jobTypeData) {
    try {
      const updatedJobType = await jobTypesModel.updateJobType(jobTypeId, jobTypeData);
      if (!updatedJobType) {
        throw new Error('Job type not found or no changes made');
      }
      await logModel.createLog({
        action: 'UPDATE_JOB_TYPE',
        resources: `JobTypes/${jobTypeId}`,
        status: 'SUCCESS',
      });
      return updatedJobType;
    } catch (error) {
      await logModel.createLog({
        action: 'UPDATE_JOB_TYPE',
        resources: `JobTypes/${jobTypeId}`,
        status: 'FAILED',
      });
      throw new Error('Failed to update job type');
    }
  },

  async deleteJobType(jobTypeId) {
    try {
      const deletedJobType = await jobTypesModel.deleteJobType(jobTypeId);
      if (!deletedJobType) {
        throw new Error('Job type not found');
      }
      await logModel.createLog({
        action: 'DELETE_JOB_TYPE',
        resources: `JobTypes/${jobTypeId}`,
        status: 'SUCCESS',
      });
      return deletedJobType;
    } catch (error) {
      await logModel.createLog({
        action: 'DELETE_JOB_TYPE',
        resources: `JobTypes/${jobTypeId}`,
        status: 'FAILED',
      });
      throw new Error('Failed to delete job type');
    }
  },
};

export default jobTypesService;
