import vehiclesService from '../services/vehiclesService.js';

const VehiclesController = {
  async getAllVehicles(request, reply) {
    try {
      const vehicles = await vehiclesService.getAllVehicles();
      reply.send(vehicles);
    } catch (error) {
      reply.status(500).send({ error: error.message });
    }
  },

  async getVehicleById(request, reply) {
    try {
      const { id } = request.params;
      const vehicle = await vehiclesService.getVehicleById(id);
      if (!vehicle) {
        reply.status(404).send({ error: 'Vehicle not found' });
        return;
      }
      reply.send(vehicle);
    } catch (error) {
      reply.status(500).send({ error: error.message });
    }
  },

  async createVehicle(request, reply) {
    try {
      const vehicle = request.body;
      const newVehicle = await vehiclesService.createVehicle(vehicle);
      reply.status(201).send(newVehicle);
    } catch (error) {
      reply.status(500).send({ error: error.message });
    }
  },

  async updateVehicle(request, reply) {
    try {
      const { id } = request.params;
      const vehicle = request.body;
      const updatedVehicle = await vehiclesService.updateVehicle(id, vehicle);
      if (!updatedVehicle) {
        reply.status(404).send({ error: 'Vehicle not found or no changes made' });
        return;
      }
      reply.send(updatedVehicle);
    } catch (error) {
      reply.status(500).send({ error: error.message });
    }
  },

  async deleteVehicle(request, reply) {
    try {
      const { id } = request.params;
      const deletedVehicle = await vehiclesService.deleteVehicle(id);
      if (!deletedVehicle) {
        reply.status(404).send({ error: 'Vehicle not found' });
        return;
      }
      reply.send(deletedVehicle);
    } catch (error) {
      reply.status(500).send({ error: error.message });
    }
  },
};

export default VehiclesController;
