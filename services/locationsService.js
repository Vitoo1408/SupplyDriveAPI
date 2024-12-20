import locationsModel from '../models/locationsModel.js';
import logModel from '../models/logModel.js';

const locationsService = {
  async getAllLocations() {
    try {
      const locations = await locationsModel.getAllLocations();
      await logModel.createLog({
        action: 'READ_ALL_LOCATIONS',
        resources: 'Locations',
        status: 'SUCCESS',
      });
      return locations;
    } catch (error) {
      await logModel.createLog({
        action: 'READ_ALL_LOCATIONS',
        resources: 'Locations',
        status: 'FAILED',
      });
      throw new Error('Failed to fetch locations');
    }
  },

  async getLocationById(locationId) {
    try {
      const location = await locationsModel.getLocationById(locationId);
      if (!location) {
        throw new Error('Location not found');
      }
      await logModel.createLog({
        action: 'READ_LOCATION',
        resources: `Locations/${locationId}`,
        status: 'SUCCESS',
      });
      return location;
    } catch (error) {
      await logModel.createLog({
        action: 'READ_LOCATION',
        resources: `Locations/${locationId}`,
        status: 'FAILED',
      });
      throw new Error('Failed to fetch location');
    }
  },

  async createLocation(locationData) {
    try {
      const newLocation = await locationsModel.createLocation(locationData);
      await logModel.createLog({
        action: 'CREATE_LOCATION',
        resources: `Locations/${newLocation.location_id}`,
        status: 'SUCCESS',
      });
      return newLocation;
    } catch (error) {
      await logModel.createLog({
        action: 'CREATE_LOCATION',
        resources: 'Locations',
        status: 'FAILED',
      });
      throw new Error('Failed to create location');
    }
  },

  async updateLocation(locationId, locationData) {
    try {
      const updatedLocation = await locationsModel.updateLocation(locationId, locationData);
      if (!updatedLocation) {
        throw new Error('Location not found or no changes made');
      }
      await logModel.createLog({
        action: 'UPDATE_LOCATION',
        resources: `Locations/${locationId}`,
        status: 'SUCCESS',
      });
      return updatedLocation;
    } catch (error) {
      await logModel.createLog({
        action: 'UPDATE_LOCATION',
        resources: `Locations/${locationId}`,
        status: 'FAILED',
      });
      throw new Error('Failed to update location');
    }
  },

  async deleteLocation(locationId) {
    try {
      const deletedLocation = await locationsModel.deleteLocation(locationId);
      if (!deletedLocation) {
        throw new Error('Location not found');
      }
      await logModel.createLog({
        action: 'DELETE_LOCATION',
        resources: `Locations/${locationId}`,
        status: 'SUCCESS',
      });
      return deletedLocation;
    } catch (error) {
      await logModel.createLog({
        action: 'DELETE_LOCATION',
        resources: `Locations/${locationId}`,
        status: 'FAILED',
      });
      throw new Error('Failed to delete location');
    }
  },
};

export default locationsService;
