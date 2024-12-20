import sql from './db.js';

const jobLogsModel = {
  async getAllLogs() {
    return await sql`SELECT * FROM JobLogs`;
  },

  async getLogById(logId) {
    return await sql`SELECT * FROM JobLogs WHERE job_log_id = ${logId}`;
  },

  async createLog(logData) {
    const { job_id, operator, user_id, geo_location, start_time, end_time, } = logData;
    return await sql`
      INSERT INTO JobLogs (job_id, operator, creation_date, user_id, geo_location, start_time, end_time)
      VALUES (${job_id}, ${operator}, DEFAULT, ${user_id}, ${geo_location}, ${start_time}, ${end_time})
      RETURNING *
    `;
  },

  async deleteLog(logId) {
    return await sql`DELETE FROM JobLogs WHERE job_log_id = ${logId} RETURNING *`;
  },
};

export default jobLogsModel;
