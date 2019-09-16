const { client, extractQueryParts } = require('../../db/db.client');

const reset = table => client(table)
  .truncate();

const query = async (table, params = {}) => {
  const { where, limit } = extractQueryParts(params);

  return client(table)
    .select()
    .where(where)
    .limit(limit || 10);
};

const create = (table, entity) => client(table)
  .insert(entity);

module.exports = {
  reset,
  query,
  create,
};
