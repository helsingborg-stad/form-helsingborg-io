exports.up = (knex, Promise) => Promise.all([
  knex('questions').insert([
    {
      question_name: 'test question 1',
      question_hint: 'some hint',
      question_description: 'some description',
      question_required: true,
      form_id: 1,
      question_type: 1,
    },
    {
      question_name: 'test question 2',
      question_hint: 'some other hint',
      question_description: 'some other description',
      question_required: true,
      form_id: 1,
      question_type: 2,
    },
  ]),
]);

exports.down = (knex, Promise) => Promise.all([knex('questions').del()]);
