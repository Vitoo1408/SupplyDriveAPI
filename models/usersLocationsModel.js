import sql from './db.js';

const usersLocationsModel = {
  async getAllUsersLocations() {
    return await sql`SELECT * FROM UsersLocations`;
  },

  async getUserLocationById(usersLocationsId) {
    return await sql`SELECT * FROM UsersLocations WHERE users_locations_id = ${usersLocationsId}`;
  },

  async createUserLocation(userLocationData) {
    const { user_id, location_id } = userLocationData;
    return await sql`
      INSERT INTO UsersLocations (user_id, location_id)
      VALUES (${user_id}, ${location_id})
      RETURNING *
    `;
  },

  async updateUserLocation(usersLocationsId, userLocationData) {
    const { user_id, location_id } = userLocationData;
    return await sql`
      UPDATE UsersLocations
      SET user_id = ${user_id}, location_id = ${location_id}
      WHERE users_locations_id = ${usersLocationsId}
      RETURNING *
    `;
  },

  async deleteUserLocation(usersLocationsId) {
    return await sql`DELETE FROM UsersLocations WHERE users_locations_id = ${usersLocationsId} RETURNING *`;
  },
};

export default usersLocationsModel;
