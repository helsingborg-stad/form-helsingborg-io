
exports.seed = (knex, Promise) => knex('questions_validations')
  .del()
  .then(() => knex('questions_validations').insert([
    { question_id: 1, validation_id: 2 },
    { question_id: 1, validation_id: 3 },
    { question_id: 2, validation_id: 7 },
    { question_id: 3, validation_id: 2 },
    { question_id: 3, validation_id: 3 },
    { question_id: 4, validation_id: 7 },
    { question_id: 5, validation_id: 2 },
    { question_id: 5, validation_id: 3 },
    { question_id: 5, validation_id: 4 },
    { question_id: 6, validation_id: 10 },
    { question_id: 7, validation_id: 9 },
    { question_id: 8, validation_id: 7 },
    { question_id: 9, validation_id: 10 },
    { question_id: 10, validation_id: 2 },
    { question_id: 10, validation_id: 3 },
    { question_id: 11, validation_id: 2 },
    { question_id: 11, validation_id: 3 },
    { question_id: 12, validation_id: 2 },
    { question_id: 12, validation_id: 3 },
  ]));
