import authService from '../services/authService.js';

const authController = {
  async login(request, reply) {
    const { code, license_plate } = request.body;

    if (!code) {
      reply.status(400).send({ error: 'Code is required' });
      return;
    }

    if (!license_plate) {
      reply.status(400).send({ error: 'License plate is required' });
      return;
    }

    try {
      const { token, user } = await authService.login(code, license_plate);
      reply.send({ token, user });
    } catch (error) {
      reply.status(401).send({ error: error.message });
    }
  },
};

export default authController;
