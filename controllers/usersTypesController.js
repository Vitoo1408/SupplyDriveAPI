import usersTypesService from '../services/usersTypesService.js';

const usersTypesController = {
  async getAllUsersTypes(request, reply) {
    try {
      const usersTypes = await usersTypesService.getAllUsersTypes();
      reply.send(usersTypes);
    } catch (error) {
      reply.status(500).send({ error: error.message });
    }
  },

  async getUserTypeById(request, reply) {
    try {
      const { id } = request.params;
      const userType = await usersTypesService.getUserTypeById(id);
      reply.send(userType);
    } catch (error) {
      reply.status(500).send({ error: error.message });
    }
  },

  async createUserType(request, reply) {
    try {
      const userTypeData = request.body;
      const newUserType = await usersTypesService.createUserType(userTypeData);
      reply.status(201).send(newUserType);
    } catch (error) {
      reply.status(500).send({ error: error.message });
    }
  },

  async updateUserType(request, reply) {
    try {
      const { id } = request.params;
      const userTypeData = request.body;
      const updatedUserType = await usersTypesService.updateUserType(id, userTypeData);
      reply.send(updatedUserType);
    } catch (error) {
      reply.status(500).send({ error: error.message });
    }
  },

  async deleteUserType(request, reply) {
    try {
      const { id } = request.params;
      const deletedUserType = await usersTypesService.deleteUserType(id);
      reply.send(deletedUserType);
    } catch (error) {
      reply.status(500).send({ error: error.message });
    }
  },
};

export default usersTypesController;
