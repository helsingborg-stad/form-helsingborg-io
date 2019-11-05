
exports.up = (knex, Promise) => knex.schema.createTable('logics',
(t) => {
  t.increments();
  t.timestamps(true, true);
  t.integer('trigger_question').unsigned().references('questions.id');
  t.string('logic_type').references('logic_types.type');
});

exports.down = (knex, Promise) => knex.schema.dropTable('logics');
