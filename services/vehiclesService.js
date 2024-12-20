import vehiclesModel from '../models/vehiclesModel.js';
import logModel from '../models/logModel.js';

const VehiclesService = {
  async getAllVehicles() {
    try {
      const vehicles = await vehiclesModel.getAllVehicles();
      await logModel.createLog('GET_ALL', 'Vehicles', 'SUCCESS');
      return vehicles;
    } catch (error) {
      await logModel.createLog('GET_ALL', 'Vehicles', 'FAILURE');
      throw error;
    }
  },

  async getVehicleById(vehicleId) {
    try {
      const vehicle = await vehiclesModel.getVehicleById(vehicleId);
      await logModel.createLog('GET_BY_ID', 'Vehicles', 'SUCCESS');
      return vehicle;
    } catch (error) {
      await logModel.createLog('GET_BY_ID', 'Vehicles', 'FAILURE');
      throw error;
    }
  },

  async createVehicle(vehicle) {
    try {
      const newVehicle = await vehiclesModel.createVehicle(vehicle);
      await logModel.createLog('CREATE', 'Vehicles', 'SUCCESS');
      return newVehicle;
    } catch (error) {
      await logModel.createLog('CREATE', 'Vehicles', 'FAILURE');
      throw error;
    }
  },

  async updateVehicle(vehicleId, vehicle) {
    try {
      const updatedVehicle = await vehiclesModel.updateVehicle(vehicleId, vehicle);
      await logModel.createLog('UPDATE', 'Vehicles', 'SUCCESS');
      return updatedVehicle;
    } catch (error) {
      await logModel.createLog('UPDATE', 'Vehicles', 'FAILURE');
      throw error;
    }
  },

  async deleteVehicle(vehicleId) {
    try {
      const deletedVehicle = await vehiclesModel.deleteVehicle(vehicleId);
      await logModel.createLog('DELETE', 'Vehicles', 'SUCCESS');
      return deletedVehicle;
    } catch (error) {
      await logModel.createLog('DELETE', 'Vehicles', 'FAILURE');
      throw error;
    }
  },
};
export default VehiclesService;
