import locationsService from '../services/locationsService.js';

const locationsController = {
  async getAllLocations(request, reply) {
    try {
      const locations = await locationsService.getAllLocations();
      reply.send(locations);
    } catch (error) {
      reply.status(500).send({ error: error.message });
    }
  },

  async getLocationById(request, reply) {
    try {
      const { id } = request.params;
      const location = await locationsService.getLocationById(id);
      reply.send(location);
    } catch (error) {
      reply.status(500).send({ error: error.message });
    }
  },

  async createLocation(request, reply) {
    try {
      const locationData = request.body;
      const newLocation = await locationsService.createLocation(locationData);
      reply.status(201).send(newLocation);
    } catch (error) {
      reply.status(500).send({ error: error.message });
    }
  },

  async updateLocation(request, reply) {
    try {
      const { id } = request.params;
      const locationData = request.body;
      const updatedLocation = await locationsService.updateLocation(id, locationData);
      reply.send(updatedLocation);
    } catch (error) {
      reply.status(500).send({ error: error.message });
    }
  },

  async deleteLocation(request, reply) {
    try {
      const { id } = request.params;
      const deletedLocation = await locationsService.deleteLocation(id);
      reply.send(deletedLocation);
    } catch (error) {
      reply.status(500).send({ error: error.message });
    }
  },
};

export default locationsController;
