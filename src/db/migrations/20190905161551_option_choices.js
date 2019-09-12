
exports.up = (knex, Promise) => knex.schema.createTable('option_choices', (t) => {
  t.increments();
  t.string('option_choice_name');
  t.integer('option_group_id').unsigned();
  t.foreign('option_group_id').references('option_groups.id');
  t.timestamps(true, true);
});

exports.down = (knex, Promise) => knex.schema.dropTable('option_choices');
