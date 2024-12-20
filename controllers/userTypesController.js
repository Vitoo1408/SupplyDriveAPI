import userTypesService from '../services/userTypesService.js';

const createUserType = async (request, reply) => {
  const { description } = request.body;
  const userType = await userTypesService.createUserType(description);
  reply.code(201).send(userType);
};

const getUserTypes = async (request, reply) => {
  const userTypes = await userTypesService.getUserTypes();
  reply.send(userTypes);
};

const getUserTypeById = async (request, reply) => {
  const { user_type_id } = request.params;
  const userType = await userTypesService.getUserTypeById(user_type_id);
  if (!userType) {
    return reply.code(404).send({ message: 'User type not found' });
  }
  reply.send(userType);
};

const updateUserType = async (request, reply) => {
  const { user_type_id } = request.params;
  const { description } = request.body;
  const updatedUserType = await userTypesService.updateUserType(user_type_id, description);
  reply.send(updatedUserType);
};

const deleteUserType = async (request, reply) => {
  const { user_type_id } = request.params;
  await userTypesService.deleteUserType(user_type_id);
  reply.code(204).send();
};

export default {
  createUserType,
  getUserTypes,
  getUserTypeById,
  updateUserType,
  deleteUserType
};
