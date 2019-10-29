exports.up = (knex, Promise) => knex.schema.createTable('option_choices_questions',
  (t) => {
    t.integer('question_id').unsigned();
    t.foreign('question_id').references('questions.id');

    t.integer('option_choice_id').unsigned();
    t.foreign('option_choice_id').references('option_choices.id');

    t.timestamps(true, true);
  });

exports.down = (knex, Promise) => knex.schema.dropTable('option_choices_questions');
