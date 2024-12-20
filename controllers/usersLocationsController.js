import usersLocationsService from '../services/usersLocationsService.js';

const usersLocationsController = {
  async getAllUsersLocations(request, reply) {
    try {
      const usersLocations = await usersLocationsService.getAllUsersLocations();
      reply.send(usersLocations);
    } catch (error) {
      reply.status(500).send({ error: error.message });
    }
  },

  async getUserLocationById(request, reply) {
    try {
      const { id } = request.params;
      const userLocation = await usersLocationsService.getUserLocationById(id);
      reply.send(userLocation);
    } catch (error) {
      reply.status(500).send({ error: error.message });
    }
  },

  async createUserLocation(request, reply) {
    try {
      const userLocationData = request.body;
      const newUserLocation = await usersLocationsService.createUserLocation(userLocationData);
      reply.status(201).send(newUserLocation);
    } catch (error) {
      reply.status(500).send({ error: error.message });
    }
  },

  async updateUserLocation(request, reply) {
    try {
      const { id } = request.params;
      const userLocationData = request.body;
      const updatedUserLocation = await usersLocationsService.updateUserLocation(id, userLocationData);
      reply.send(updatedUserLocation);
    } catch (error) {
      reply.status(500).send({ error: error.message });
    }
  },

  async deleteUserLocation(request, reply) {
    try {
      const { id } = request.params;
      const deletedUserLocation = await usersLocationsService.deleteUserLocation(id);
      reply.send(deletedUserLocation);
    } catch (error) {
      reply.status(500).send({ error: error.message });
    }
  },
};

export default usersLocationsController;
