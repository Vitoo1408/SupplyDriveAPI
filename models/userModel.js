import sql from './db.js';

const findAll = async () => {
  return await sql`SELECT * FROM users`;
};

const findById = async (id) => {
  const users = await sql`SELECT * FROM users WHERE id = ${id}`;
  return users[0] || null; // Return the first user or null if not found
};

const create = async (name, email) => {
  const [user] = await sql`
    INSERT INTO users (name, email)
    VALUES (${name}, ${email})
    RETURNING *
  `;
  return user;
};

export default {
  findAll,
  findById,
  create,
};
