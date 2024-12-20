import sql from './db.js';

const locationsModel = {
  async getAllLocations() {
    return await sql`SELECT * FROM Locations`;
  },

  async getLocationById(locationId) {
    return await sql`SELECT * FROM Locations WHERE location_id = ${locationId}`;
  },

  async createLocation(locationData) {
    const { description } = locationData;
    return await sql`
      INSERT INTO Locations (description)
      VALUES (${description})
      RETURNING *
    `;
  },

  async updateLocation(locationId, locationData) {
    const { description } = locationData;
    return await sql`
      UPDATE Locations
      SET description = ${description}
      WHERE location_id = ${locationId}
      RETURNING *
    `;
  },

  async deleteLocation(locationId) {
    return await sql`DELETE FROM Locations WHERE location_id = ${locationId} RETURNING *`;
  },
};

export default locationsModel;
