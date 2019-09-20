exports.up = (knex, Promise) => knex.schema.createTable('option_choices_questions',
  (t) => {
    t.integer('question_id').unsigned().references('questions.id');
    t.integer('choice_id').unsigned().references('option_choices.id');
    t.timestamps(true, true);
  });

exports.down = (knex, Promise) => knex.schema.dropTable('option_choices_questions');
