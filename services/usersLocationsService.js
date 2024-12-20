import usersLocationsModel from '../models/usersLocationsModel.js';
import logModel from '../models/logModel.js';

const usersLocationsService = {
  async getAllUsersLocations() {
    try {
      const usersLocations = await usersLocationsModel.getAllUsersLocations();
      await logModel.createLog({
        action: 'READ_ALL_USERS_LOCATIONS',
        resources: 'UsersLocations',
        status: 'SUCCESS',
      });
      return usersLocations;
    } catch (error) {
      await logModel.createLog({
        action: 'READ_ALL_USERS_LOCATIONS',
        resources: 'UsersLocations',
        status: 'FAILED',
      });
      throw new Error('Failed to fetch users locations');
    }
  },

  async getUserLocationById(usersLocationsId) {
    try {
      const userLocation = await usersLocationsModel.getUserLocationById(usersLocationsId);
      if (!userLocation) {
        throw new Error('User Location not found');
      }
      await logModel.createLog({
        action: 'READ_USER_LOCATION',
        resources: `UsersLocations/${usersLocationsId}`,
        status: 'SUCCESS',
      });
      return userLocation;
    } catch (error) {
      await logModel.createLog({
        action: 'READ_USER_LOCATION',
        resources: `UsersLocations/${usersLocationsId}`,
        status: 'FAILED',
      });
      throw new Error('Failed to fetch user location');
    }
  },

  async createUserLocation(userLocationData) {
    try {
      const newUserLocation = await usersLocationsModel.createUserLocation(userLocationData);
      await logModel.createLog({
        action: 'CREATE_USER_LOCATION',
        resources: `UsersLocations/${newUserLocation.users_locations_id}`,
        status: 'SUCCESS',
      });
      return newUserLocation;
    } catch (error) {
      await logModel.createLog({
        action: 'CREATE_USER_LOCATION',
        resources: 'UsersLocations',
        status: 'FAILED',
      });
      throw new Error('Failed to create user location');
    }
  },

  async updateUserLocation(usersLocationsId, userLocationData) {
    try {
      const updatedUserLocation = await usersLocationsModel.updateUserLocation(usersLocationsId, userLocationData);
      if (!updatedUserLocation) {
        throw new Error('User Location not found or no changes made');
      }
      await logModel.createLog({
        action: 'UPDATE_USER_LOCATION',
        resources: `UsersLocations/${usersLocationsId}`,
        status: 'SUCCESS',
      });
      return updatedUserLocation;
    } catch (error) {
      await logModel.createLog({
        action: 'UPDATE_USER_LOCATION',
        resources: `UsersLocations/${usersLocationsId}`,
        status: 'FAILED',
      });
      throw new Error('Failed to update user location');
    }
  },

  async deleteUserLocation(usersLocationsId) {
    try {
      const deletedUserLocation = await usersLocationsModel.deleteUserLocation(usersLocationsId);
      if (!deletedUserLocation) {
        throw new Error('User Location not found');
      }
      await logModel.createLog({
        action: 'DELETE_USER_LOCATION',
        resources: `UsersLocations/${usersLocationsId}`,
        status: 'SUCCESS',
      });
      return deletedUserLocation;
    } catch (error) {
      await logModel.createLog({
        action: 'DELETE_USER_LOCATION',
        resources: `UsersLocations/${usersLocationsId}`,
        status: 'FAILED',
      });
      throw new Error('Failed to delete user location');
    }
  },
};

export default usersLocationsService;
