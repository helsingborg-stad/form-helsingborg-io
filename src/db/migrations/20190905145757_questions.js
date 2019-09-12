
exports.up = (knex, Promise) => knex.schema.createTable('question_types', (t) => {
  t.increments();
  t.string('type');
  t.timestamps(true, true);
});

exports.down = (knex, Promise) => knex.schema.dropTable('question_types');
