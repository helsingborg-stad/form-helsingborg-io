
exports.up = (knex, Promise) => knex.schema.createTable('questions', (t) => {
  t.increments();
  t.string('question_name');
  t.string('question_hint');
  t.string('question_description');
  t.integer('question_position');

  t.boolean('question_required');
  t.boolean('question_multiple_answers');

  t.integer('form_id').unsigned();
  t.foreign('form_id').references('forms.id');

  t.integer('question_type').unsigned();
  t.foreign('question_type').references('question_types.id');

  t.integer('option_group_id').unsigned();
  t.foreign('option_group_id').references('option_groups.id');
});

exports.down = (knex, __) => knex.schema.dropTable('questions');
