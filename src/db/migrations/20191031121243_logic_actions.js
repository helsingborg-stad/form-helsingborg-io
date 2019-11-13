
exports.up = (knex, __) => knex.schema.createTable('logic_actions',
  (t) => {
    t.increments();
    t.string('condition')

    t.integer('logic_id').unsigned().references('logics.id');
    t.string('action_type').references('logic_action_types.type');
    t.integer('target_question').unsigned().references('questions.id');
    t.timestamps(true, true);
  });

exports.down = (knex, __) => knex.schema.dropTable('logic_actions');
