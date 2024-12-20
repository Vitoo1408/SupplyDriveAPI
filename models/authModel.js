import sql from './db.js';

const authModel = {
  async getUserByCode(code, license_plate) {
    return await sql`
      SELECT * FROM Users JOIN vehicles on vehicles.license_plate = ${license_plate} WHERE users.code = ${code}
    `;
  },
};

export default authModel;
