import sql from './db.js';

const createLog = {
  async createLog({ action, resources, status }) {

    return await sql`
      INSERT INTO systemlogs (action, resource, response_status)
      VALUES (${action}, ${resources}, ${status})
    `;
  },
};

export default createLog;
