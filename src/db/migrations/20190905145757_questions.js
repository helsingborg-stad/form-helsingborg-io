
exports.up = (knex, Promise) => knex.schema.createTable('question_types', (t) => {
  t.string('type').primary();
  t.timestamps(true, true);
});

exports.down = (knex, Promise) => knex.schema.dropTable('question_types');
