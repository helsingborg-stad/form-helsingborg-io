
exports.up = (knex, __) => knex.schema.createTable('option_choices', (t) => {
  t.increments();
  t.string('option_choice_name');
  t.timestamps(true, true);
  t.integer('option_group_id').unsigned();
  t.foreign('option_group_id').references('id').inTable('option_groups');
});

exports.down = (knex, __) => knex.schema.dropTable('option_choices');
