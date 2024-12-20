import sql from './db.js';

const jobsModel = {
  async getAllJobs() {
    return await sql`SELECT * FROM Jobs`;
  },

  async getJobById(jobId) {
    return await sql`SELECT * FROM Jobs WHERE job_id = ${jobId}`;
  },

  async createJob(jobData) {
    const {
      name,
      assigned_to,
      job_type_id,
      state,
      creator_id,
      transporter_signature,
      receiver_signature,
      preparer_signature,
      atcud,
      location,
      metafields,
      start_location,
      end_location,
    } = jobData;

    return await sql`
      INSERT INTO Jobs (
        name, assigned_to, job_type_id, state, creator_id, transporter_signature,
        receiver_signature, preparer_signature, atcud, location, metafields, start_location, end_location
      )
      VALUES (
        ${name}, ${assigned_to}, ${job_type_id}, ${state}, ${creator_id}, ${transporter_signature},
        ${receiver_signature}, ${preparer_signature}, ${atcud}, ${location}, ${sql.json(metafields)},
        ${start_location}, ${end_location}
      )
      RETURNING *
    `;
  },

  async updateJob(jobId, jobData) {
    const updates = Object.keys(jobData)
      .filter((key) => jobData[key] !== undefined)
      .map((key) => sql`${sql.unsafe(key)} = ${jobData[key]}`);

    if (updates.length === 0) {
      return null; // No updates provided
    }

    return await sql`
      UPDATE Jobs
      SET ${sql.join(updates, sql`, `)}
      WHERE job_id = ${jobId}
      RETURNING *
    `;
  },

  async deleteJob(jobId) {
    return await sql`DELETE FROM Jobs WHERE job_id = ${jobId} RETURNING *`;
  },
};

export default jobsModel;
