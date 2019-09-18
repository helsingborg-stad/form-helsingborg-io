
exports.up = (knex, Promise) => knex.schema.createTable('questions_validations',
  (t) => {
    t.integer('question_id').unsigned().references('questions.id');
    t.integer('validation_id').unsigned().references('validations.id');
    t.timestamps(true, true);
  });

exports.down = (knex, Promise) => knex.schema.dropTable('questions_validations');
