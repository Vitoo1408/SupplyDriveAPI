import authModel from '../models/authModel.js';
import logModel from '../models/logModel.js';
import app from '../server.js'; // Assuming the app instance is exported from server.js

const authService = {
  async login(code, license_plate) {
    try {
      // Fetch user by email
      const users = await authModel.getUserByCode(code, license_plate);
      if (users.length === 0) {
        await logModel.createLog({
          action: 'LOGIN_ATTEMPT',
          resources: 'Auth',
          status: 'FAILED',
        });
        throw new Error('Invalid credentials');
      }

      const user = users[0];

      // Generate JWT token
      const token = app.jwt.sign(
        { userId: user.user_id, userUuid: user.user_uuid }, // Payload
        { expiresIn: '24h' } // Token expiry
      );

      await logModel.createLog({
        action: 'LOGIN_SUCCESS',
        resources: 'Auth',
        status: 'SUCCESS',
      });

      return { token, user };
    } catch (error) {
      await logModel.createLog({
        action: 'LOGIN_ATTEMPT',
        resources: 'Auth',
        status: 'FAILED',
      });
      throw error;
    }
  },
};

export default authService;
