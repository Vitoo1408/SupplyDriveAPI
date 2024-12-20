import metafieldsService from '../services/metafieldsService.js';

const metafieldsController = {
  async getAllMetafields(request, reply) {
    try {
      const metafields = await metafieldsService.getAllMetafields();
      reply.send(metafields);
    } catch (error) {
      reply.status(500).send({ error: error.message });
    }
  },

  async getMetafieldById(request, reply) {
    try {
      const { id } = request.params;
      const metafield = await metafieldsService.getMetafieldById(id);
      reply.send(metafield);
    } catch (error) {
      reply.status(500).send({ error: error.message });
    }
  },

  async createMetafield(request, reply) {
    try {
      const metafieldData = request.body;
      const newMetafield = await metafieldsService.createMetafield(metafieldData);
      reply.status(201).send(newMetafield);
    } catch (error) {
      reply.status(500).send({ error: error.message });
    }
  },

  async updateMetafield(request, reply) {
    try {
      const { id } = request.params;
      const metafieldData = request.body;
      const updatedMetafield = await metafieldsService.updateMetafield(id, metafieldData);
      reply.send(updatedMetafield);
    } catch (error) {
      reply.status(500).send({ error: error.message });
    }
  },

  async deleteMetafield(request, reply) {
    try {
      const { id } = request.params;
      const deletedMetafield = await metafieldsService.deleteMetafield(id);
      reply.send(deletedMetafield);
    } catch (error) {
      reply.status(500).send({ error: error.message });
    }
  },
};

export default metafieldsController;
