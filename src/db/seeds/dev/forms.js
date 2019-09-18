exports.seed = (knex, __) => knex('forms')
  .del()
  .then(() => {
    knex('forms').insert([
      { name: 'civil_marriage' },
      { name: 'test_form' },
    ]);
  });
