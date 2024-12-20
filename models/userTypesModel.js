import sql from './db.js';

const createUserType = async (description) => {
  const [userType] = await sql`
    INSERT INTO UserTypes (description)
    VALUES (${description})
    RETURNING *;
  `;
  return userType;
};

const getUserTypes = async () => {
  return await sql`SELECT * FROM UserTypes`;
};

const getUserTypeById = async (user_type_id) => {
  const [userType] = await sql`
    SELECT * FROM UserTypes WHERE user_type_id = ${user_type_id};
  `;
  return userType || null;
};

const updateUserType = async (user_type_id, description) => {
  const [updatedUserType] = await sql`
    UPDATE UserTypes
    SET description = ${description}
    WHERE user_type_id = ${user_type_id}
    RETURNING *;
  `;
  return updatedUserType;
};

const deleteUserType = async (user_type_id) => {
  await sql`
    DELETE FROM UserTypes WHERE user_type_id = ${user_type_id};
  `;
};

export default {
  createUserType,
  getUserTypes,
  getUserTypeById,
  updateUserType,
  deleteUserType
};
