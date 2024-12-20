import sql from './db.js';

const VehiclesModel = {
  async getAllVehicles() {
    return await sql`SELECT * FROM Vehicles`;
  },

  async getVehicleById(vehicleId) {
    return await sql`SELECT * FROM Vehicles WHERE vehicle_id = ${vehicleId}`;
  },

  async createVehicle(vehicle) {
    const { vehicle_id, type, license_plate } = vehicle;
    return await sql`
      INSERT INTO Vehicles (vehicle_id, type, license_plate)
      VALUES (${vehicle_id}, ${type}, ${license_plate})
      RETURNING *
    `;
  },

  async updateVehicle(vehicleId, vehicle) {
    const { type, license_plate } = vehicle;
    return await sql`
      UPDATE Vehicles
      SET type = ${type}, license_plate = ${license_plate}
      WHERE vehicle_id = ${vehicleId}
      RETURNING *
    `;
  },

  async deleteVehicle(vehicleId) {
    return await sql`DELETE FROM Vehicles WHERE vehicle_id = ${vehicleId} RETURNING *`;
  },
};
export default VehiclesModel;
