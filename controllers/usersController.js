import usersService from '../services/usersService.js';

const usersController = {
  async getAllUsers(request, reply) {
    try {
      const users = await usersService.getAllUsers();
      reply.send(users);
    } catch (error) {
      reply.status(500).send({ error: error.message });
    }
  },

  async getUserById(request, reply) {
    try {
      const { id } = request.params;
      const user = await usersService.getUserById(id);
      reply.send(user);
    } catch (error) {
      reply.status(500).send({ error: error.message });
    }
  },

  async createUser(request, reply) {
    try {
      const userData = request.body;
      const newUser = await usersService.createUser(userData);
      reply.status(201).send(newUser);
    } catch (error)      {
      reply.status(500).send({ error: error.message });
    }
  },

  async updateUser(request, reply) {
    try {
      const { id } = request.params;
      const userData = request.body;
      const updatedUser = await usersService.updateUser(id, userData);
      reply.send(updatedUser);
    } catch (error) {
      reply.status(500).send({ error: error.message });
    }
  },

  async deleteUser(request, reply) {
    try {
      const { id } = request.params;
      const deletedUser = await usersService.deleteUser(id);
      reply.send(deletedUser);
    } catch (error) {
      reply.status(500).send({ error: error.message });
    }
  },
};

export default usersController;
