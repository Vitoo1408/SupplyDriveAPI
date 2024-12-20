import userTypesModel from '../models/userTypesModel.js';
import logModel from '../models/logModel.js';

const UserTypesService = {
  async getAllUserTypes() {
    try {
      const userTypes = await userTypesModel.getAllUserTypes();
      await logModel.createLog('GET_ALL', 'UserTypes', 'SUCCESS');
      return userTypes;
    } catch (error) {
      await logModel.createLog('GET_ALL', 'UserTypes', 'FAILURE');
      throw error;
    }
  },

  async getUserTypeById(userTypeId) {
    try {
      const userType = await userTypesModel.getUserTypeById(userTypeId);
      await logModel.createLog('GET_BY_ID', 'UserTypes', 'SUCCESS');
      return userType;
    } catch (error) {
      await logModel.createLog('GET_BY_ID', 'UserTypes', 'FAILURE');
      throw error;
    }
  },

  async createUserType(userType) {
    try {
      const newUserType = await userTypesModel.createUserType(userType);
      await logModel.createLog('CREATE', 'UserTypes', 'SUCCESS');
      return newUserType;
    } catch (error) {
      await logModel.createLog('CREATE', 'UserTypes', 'FAILURE');
      throw error;
    }
  },

  async updateUserType(userTypeId, userType) {
    try {
      const updatedUserType = await userTypesModel.updateUserType(userTypeId, userType);
      await logModel.createLog('UPDATE', 'UserTypes', 'SUCCESS');
      return updatedUserType;
    } catch (error) {
      await logModel.createLog('UPDATE', 'UserTypes', 'FAILURE');
      throw error;
    }
  },

  async deleteUserType(userTypeId) {
    try {
      const deletedUserType = await userTypesModel.deleteUserType(userTypeId);
      await logModel.createLog('DELETE', 'UserTypes', 'SUCCESS');
      return deletedUserType;
    } catch (error) {
      await logModel.createLog('DELETE', 'UserTypes', 'FAILURE');
      throw error;
    }
  },
};
export default UserTypesService;
