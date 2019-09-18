exports.up = (knex, Promise) => knex.schema.createTable('questions_choices',
  (t) => {
    t.integer('question_id').unsigned().references('questions.id');
    t.integer('choice_id').unsigned().references('option_choices.id');
    t.timestamps(true, true);
  });

exports.down = (knex, Promise) => knex.schema.dropTable('questions_choices');
