import metafieldsModel from '../models/metafieldsModel.js';
import logModel from '../models/logModel.js';

const metafieldsService = {
  async getAllMetafields() {
    try {
      const metafields = await metafieldsModel.getAllMetafields();
      await logModel.createLog({
        action: 'READ_ALL_METAFIELDS',
        resources: 'Metafields',
        status: 'SUCCESS',
      });
      return metafields;
    } catch (error) {
      await logModel.createLog({
        action: 'READ_ALL_METAFIELDS',
        resources: 'Metafields',
        status: 'FAILED',
      });
      throw new Error('Failed to fetch metafields');
    }
  },

  async getMetafieldById(metafieldId) {
    try {
      const metafield = await metafieldsModel.getMetafieldById(metafieldId);
      if (!metafield) {
        throw new Error('Metafield not found');
      }
      await logModel.createLog({
        action: 'READ_METAFIELD',
        resources: `Metafields/${metafieldId}`,
        status: 'SUCCESS',
      });
      return metafield;
    } catch (error) {
      await logModel.createLog({
        action: 'READ_METAFIELD',
        resources: `Metafields/${metafieldId}`,
        status: 'FAILED',
      });
      throw new Error('Failed to fetch metafield');
    }
  },

  async createMetafield(metafieldData) {
    try {
      const newMetafield = await metafieldsModel.createMetafield(metafieldData);
      await logModel.createLog({
        action: 'CREATE_METAFIELD',
        resources: `Metafields/${newMetafield.metafield_id}`,
        status: 'SUCCESS',
      });
      return newMetafield;
    } catch (error) {
      await logModel.createLog({
        action: 'CREATE_METAFIELD',
        resources: 'Metafields',
        status: 'FAILED',
      });
      throw new Error('Failed to create metafield');
    }
  },

  async updateMetafield(metafieldId, metafieldData) {
    try {
      const updatedMetafield = await metafieldsModel.updateMetafield(metafieldId, metafieldData);
      if (!updatedMetafield) {
        throw new Error('Metafield not found or no changes made');
      }
      await logModel.createLog({
        action: 'UPDATE_METAFIELD',
        resources: `Metafields/${metafieldId}`,
        status: 'SUCCESS',
      });
      return updatedMetafield;
    } catch (error) {
      await logModel.createLog({
        action: 'UPDATE_METAFIELD',
        resources: `Metafields/${metafieldId}`,
        status: 'FAILED',
      });
      throw new Error('Failed to update metafield');
    }
  },

  async deleteMetafield(metafieldId) {
    try {
      const deletedMetafield = await metafieldsModel.deleteMetafield(metafieldId);
      if (!deletedMetafield) {
        throw new Error('Metafield not found');
      }
      await logModel.createLog({
        action: 'DELETE_METAFIELD',
        resources: `Metafields/${metafieldId}`,
        status: 'SUCCESS',
      });
      return deletedMetafield;
    } catch (error) {
      await logModel.createLog({
        action: 'DELETE_METAFIELD',
        resources: `Metafields/${metafieldId}`,
        status: 'FAILED',
      });
      throw new Error('Failed to delete metafield');
    }
  },
};

export default metafieldsService;
