exports.seed = (knex, __) => knex('question_types')
  .del()
  .then(() => knex('question_types').insert([
    { type: 'checkbox' },
    { type: 'date' },
    { type: 'datetime' },
    { type: 'email' },
    { type: 'month' },
    { type: 'number' },
    { type: 'radio' },
    { type: 'range' },
    { type: 'text' },
    { type: 'tel' },
    { type: 'textarea' },
    { type: 'select' },
    { type: 'time' },
  ]));
