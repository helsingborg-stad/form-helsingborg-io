exports.seed = (knex, __) => knex('question_types')
  .del()
  .then(() => knex('question_types').insert([
    { type: 'text' },
    { type: 'textarea' },
    { type: 'email' },
    { type: 'date' },
    { type: 'number' },
    { type: 'radio' },
    { type: 'checkbox' },
  ]));
