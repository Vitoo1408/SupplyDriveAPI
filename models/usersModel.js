import sql from './db.js';

const usersModel = {
  async getAllUsers() {
    return await sql`SELECT * FROM Users`;
  },

  async getUserById(userId) {
    return await sql`SELECT * FROM Users WHERE user_id = ${userId}`;
  },

  async createUser(userData) {
    const { name, code } = userData;
    return await sql`
      INSERT INTO Users (name, code)
      VALUES (${name}, ${code})
      RETURNING *
    `;
  },

  async updateUser(userId, userData) {
    const { name, code } = userData;
    return await sql`
      UPDATE Users
      SET name = ${name}, code = ${code}
      WHERE user_id = ${userId}
      RETURNING *
    `;
  },

  async deleteUser(userId) {
    return await sql`DELETE FROM Users WHERE user_id = ${userId} RETURNING *`;
  },
};

export default usersModel;
