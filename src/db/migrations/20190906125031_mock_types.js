exports.up = (knex, Promise) => Promise.all([
  knex('question_types').insert([
    { type: 'text' },
    { type: 'textarea' },
    { type: 'email' },
    { type: 'date' },
    { type: 'number' },
    { type: 'radio' },
    { type: 'checkbox' },
  ]),
]);

exports.down = (knex, Promise) => Promise.all([knex('question_types').del()]);
