
exports.up = (knex, __) => knex.schema.createTable('logic_types', (t) => {
  t.string('type').primary();
  t.timestamps(true, true);
});

exports.down = (knex, __) => knex.schema.dropTable('logic_types');
