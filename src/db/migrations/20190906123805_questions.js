
exports.up = (knex, Promise) => knex.schema.createTable('questions', (t) => {
  t.increments();
  t.text('question_name');
  t.text('question_description');
  t.integer('question_position');

  t.boolean('question_required');
  t.boolean('question_multiple_answers');

  t.string('question_type');
  t.foreign('question_type').references('question_types.type');

  t.integer('form_id').unsigned();
  t.foreign('form_id').references('forms.id');

  t.integer('option_group_id').unsigned();
  t.foreign('option_group_id').references('option_groups.id');
});

exports.down = (knex, __) => knex.schema.dropTable('questions');
