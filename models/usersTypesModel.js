import sql from './db.js';

const usersTypesModel = {
  async getAllUsersTypes() {
    return await sql`SELECT * FROM UsersTypes`;
  },

  async getUserTypeById(usersTypesId) {
    return await sql`SELECT * FROM UsersTypes WHERE users_types_id = ${usersTypesId}`;
  },

  async createUserType(userTypeData) {
    const { user_id, user_type_id } = userTypeData;
    return await sql`
      INSERT INTO UsersTypes (user_id, user_type_id)
      VALUES (${user_id}, ${user_type_id})
      RETURNING *
    `;
  },

  async updateUserType(usersTypesId, userTypeData) {
    const { user_id, user_type_id } = userTypeData;
    return await sql`
      UPDATE UsersTypes
      SET user_id = ${user_id}, user_type_id = ${user_type_id}
      WHERE users_types_id = ${usersTypesId}
      RETURNING *
    `;
  },

  async deleteUserType(usersTypesId) {
    return await sql`DELETE FROM UsersTypes WHERE users_types_id = ${usersTypesId} RETURNING *`;
  },
};

export default usersTypesModel;
