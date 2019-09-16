
exports.up = (knex) => {
  return knex.schema.createTable('forms', (t) => {
    t.increments();
    t.string('name');
    t.timestamps(true, true);
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('forms');
};
