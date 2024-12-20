import jobsModel from '../models/jobsModel.js';
import logModel from '../models/logModel.js';

const jobsService = {
    async getAllJobs() {
        try {
            await logModel.createLog('GET_ALL', 'UserTypes', 'SUCCESS');
            return await jobsModel.getAllJobs();

        } catch (error) {
            await logModel.createLog('GET_ALL', 'UserTypes', 'FAILURE');
            throw new Error('Failed to fetch jobs');
        }
    },

    async getJobById(jobId) {
        try {
            const job = await jobsModel.getJobById(jobId);
            await logModel.createLog('GET_BY_ID', 'UserTypes', 'SUCCESS');
            if (!job) {
                await logModel.createLog('GET_BY_ID', 'UserTypes', 'FAILURE');
                throw new Error('Job not found');
            }
            return job;
        } catch (error) {
            await logModel.createLog('GET_BY_ID', 'UserTypes', 'FAILURE');
            throw new Error('Failed to fetch job');
        }
    },

    async createJob(jobData) {
        try {
            await logModel.createLog('CREATE', 'UserTypes', 'SUCCESS');
            return await jobsModel.createJob(jobData);
        } catch (error) {
            await logModel.createLog('CREATE', 'UserTypes', 'FAILURE');
            throw new Error('Failed to create job');
        }
    },

    async updateJob(jobId, jobData) {
        try {
            const updatedJob = await jobsModel.updateJob(jobId, jobData);
            if (!updatedJob) {
                await logModel.createLog('UPDATE', 'UserTypes', 'FAILURE');
                throw new Error('Job not found or no changes made');
            }
            await logModel.createLog('UPDATE', 'UserTypes', 'SUCCESS');
            return updatedJob;
        } catch (error) {
            await logModel.createLog('UPDATE', 'UserTypes', 'FAILURE');
            throw new Error('Failed to update job');
        }
    },

    async deleteJob(jobId) {
        try {
            const deletedJob = await jobsModel.deleteJob(jobId);
            if (!deletedJob) {
                await logModel.createLog('DELETE', 'UserTypes', 'FAILURE');
                throw new Error('Job not found');
            }
            await logModel.createLog('DELETE', 'UserTypes', 'SUCCESS');
            return deletedJob;
        } catch (error) {
            await logModel.createLog('DELETE', 'UserTypes', 'FAILURE');
            throw new Error('Failed to delete job');
        }
    },
};

export default jobsService;
