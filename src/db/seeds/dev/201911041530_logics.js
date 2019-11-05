
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('logics').del()
    .then(function () {
      // Inserts seed entries
      return knex('logics').insert([
        { trigger_question: 3, logic_type: 'question' },
        { trigger_question: 7, logic_type: 'question' },
        { trigger_question: 10, logic_type: 'question' },
        { trigger_question: 16, logic_type: 'question' },
      ]);
    });
};
