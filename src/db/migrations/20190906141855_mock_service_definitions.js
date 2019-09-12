exports.up = (knex, Promise) => Promise.all([
  knex('forms').insert([
    { name: 'civil_marriage' },
    { name: 'test_form' },
  ]),
]);

exports.down = (knex, Promise) => Promise.all([knex('forms').del()]);
