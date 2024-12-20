import sql from './db.js';

const jobTypesModel = {
  async getAllJobTypes() {
    return await sql`SELECT * FROM JobTypes`;
  },

  async getJobTypeById(jobTypeId) {
    return await sql`SELECT * FROM JobTypes WHERE job_type_id = ${jobTypeId}`;
  },

  async createJobType(jobTypeData) {
    const { description } = jobTypeData;

    return await sql`
      INSERT INTO JobTypes (description)
      VALUES (${description})
      RETURNING *
    `;
  },

  async updateJobType(jobTypeId, jobTypeData) {
    const { description } = jobTypeData;

    return await sql`
      UPDATE JobTypes
      SET description = ${description}
      WHERE job_type_id = ${jobTypeId}
      RETURNING *
    `;
  },

  async deleteJobType(jobTypeId) {
    return await sql`DELETE FROM JobTypes WHERE job_type_id = ${jobTypeId} RETURNING *`;
  },
};

export default jobTypesModel;
