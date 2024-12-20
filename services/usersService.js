import usersModel from '../models/usersModel.js';
import logModel from '../models/logModel.js';

const usersService = {
  async getAllUsers() {
    try {
      const users = await usersModel.getAllUsers();
      await logModel.createLog({
        action: 'READ_ALL_USERS',
        resources: 'Users',
        status: 'SUCCESS',
      });
      return users;
    } catch (error) {
      await logModel.createLog({
        action: 'READ_ALL_USERS',
        resources: 'Users',
        status: 'FAILED',
      });
      throw new Error('Failed to fetch users');
    }
  },

  async getUserById(userId) {
    try {
      const user = await usersModel.getUserById(userId);
      if (!user) {
        throw new Error('User not found');
      }
      await logModel.createLog({
        action: 'READ_USER',
        resources: `Users/${userId}`,
        status: 'SUCCESS',
      });
      return user;
    } catch (error) {
      await logModel.createLog({
        action: 'READ_USER',
        resources: `Users/${userId}`,
        status: 'FAILED',
      });
      throw new Error('Failed to fetch user');
    }
  },

  async createUser(userData) {
    try {
      const newUser = await usersModel.createUser(userData);
      await logModel.createLog({
        action: 'CREATE_USER',
        resources: `Users/${newUser.user_id}`,
        status: 'SUCCESS',
      });
      return newUser;
    } catch (error) {
      await logModel.createLog({
        action: 'CREATE_USER',
        resources: 'Users',
        status: 'FAILED',
      });
      throw new Error('Failed to create user');
    }
  },

  async updateUser(userId, userData) {
    try {
      const updatedUser = await usersModel.updateUser(userId, userData);
      if (!updatedUser) {
        throw new Error('User not found or no changes made');
      }
      await logModel.createLog({
        action: 'UPDATE_USER',
        resources: `Users/${userId}`,
        status: 'SUCCESS',
      });
      return updatedUser;
    } catch (error) {
      await logModel.createLog({
        action: 'UPDATE_USER',
        resources: `Users/${userId}`,
        status: 'FAILED',
      });
      throw new Error('Failed to update user');
    }
  },

  async deleteUser(userId) {
    try {
      const deletedUser = await usersModel.deleteUser(userId);
      if (!deletedUser) {
        throw new Error('User not found');
      }
      await logModel.createLog({
        action: 'DELETE_USER',
        resources: `Users/${userId}`,
        status: 'SUCCESS',
      });
      return deletedUser;
    } catch (error) {
      await logModel.createLog({
        action: 'DELETE_USER',
        resources: `Users/${userId}`,
        status: 'FAILED',
      });
      throw new Error('Failed to delete user');
    }
  },
};

export default usersService;
