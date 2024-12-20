import usersTypesModel from '../models/usersTypesModel.js';
import logModel from '../models/logModel.js';

const usersTypesService = {
  async getAllUsersTypes() {
    try {
      const usersTypes = await usersTypesModel.getAllUsersTypes();
      await logModel.createLog({
        action: 'READ_ALL_USERS_TYPES',
        resources: 'UsersTypes',
        status: 'SUCCESS',
      });
      return usersTypes;
    } catch (error) {
      await logModel.createLog({
        action: 'READ_ALL_USERS_TYPES',
        resources: 'UsersTypes',
        status: 'FAILED',
      });
      throw new Error('Failed to fetch users types');
    }
  },

  async getUserTypeById(usersTypesId) {
    try {
      const userType = await usersTypesModel.getUserTypeById(usersTypesId);
      if (!userType) {
        throw new Error('User Type not found');
      }
      await logModel.createLog({
        action: 'READ_USER_TYPE',
        resources: `UsersTypes/${usersTypesId}`,
        status: 'SUCCESS',
      });
      return userType;
    } catch (error) {
      await logModel.createLog({
        action: 'READ_USER_TYPE',
        resources: `UsersTypes/${usersTypesId}`,
        status: 'FAILED',
      });
      throw new Error('Failed to fetch user type');
    }
  },

  async createUserType(userTypeData) {
    try {
      const newUserType = await usersTypesModel.createUserType(userTypeData);
      await logModel.createLog({
        action: 'CREATE_USER_TYPE',
        resources: `UsersTypes/${newUserType.users_types_id}`,
        status: 'SUCCESS',
      });
      return newUserType;
    } catch (error) {
      await logModel.createLog({
        action: 'CREATE_USER_TYPE',
        resources: 'UsersTypes',
        status: 'FAILED',
      });
      throw new Error('Failed to create user type');
    }
  },

  async updateUserType(usersTypesId, userTypeData) {
    try {
      const updatedUserType = await usersTypesModel.updateUserType(usersTypesId, userTypeData);
      if (!updatedUserType) {
        throw new Error('User Type not found or no changes made');
      }
      await logModel.createLog({
        action: 'UPDATE_USER_TYPE',
        resources: `UsersTypes/${usersTypesId}`,
        status: 'SUCCESS',
      });
      return updatedUserType;
    } catch (error) {
      await logModel.createLog({
        action: 'UPDATE_USER_TYPE',
        resources: `UsersTypes/${usersTypesId}`,
        status: 'FAILED',
      });
      throw new Error('Failed to update user type');
    }
  },

  async deleteUserType(usersTypesId) {
    try {
      const deletedUserType = await usersTypesModel.deleteUserType(usersTypesId);
      if (!deletedUserType) {
        throw new Error('User Type not found');
      }
      await logModel.createLog({
        action: 'DELETE_USER_TYPE',
        resources: `UsersTypes/${usersTypesId}`,
        status: 'SUCCESS',
      });
      return deletedUserType;
    } catch (error) {
      await logModel.createLog({
        action: 'DELETE_USER_TYPE',
        resources: `UsersTypes/${usersTypesId}`,
        status: 'FAILED',
      });
      throw new Error('Failed to delete user type');
    }
  },
};

export default usersTypesService;
