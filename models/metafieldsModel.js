import sql from './db.js';

const metafieldsModel = {
  async getAllMetafields() {
    return await sql`SELECT * FROM Metafields`;
  },

  async getMetafieldById(metafieldId) {
    return await sql`SELECT * FROM Metafields WHERE metafield_id = ${metafieldId}`;
  },

  async createMetafield(metafieldData) {
    const { name, type } = metafieldData;
    return await sql`
      INSERT INTO Metafields (name, type)
      VALUES (${name}, ${type})
      RETURNING *
    `;
  },

  async updateMetafield(metafieldId, metafieldData) {
    const { name, type } = metafieldData;
    return await sql`
      UPDATE Metafields
      SET name = ${name}, type = ${type}
      WHERE metafield_id = ${metafieldId}
      RETURNING *
    `;
  },

  async deleteMetafield(metafieldId) {
    return await sql`DELETE FROM Metafields WHERE metafield_id = ${metafieldId} RETURNING *`;
  },
};

export default metafieldsModel;
