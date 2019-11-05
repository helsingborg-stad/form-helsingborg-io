
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('logics').del()
    .then(function () {
      // Inserts seed entries
      return knex('logics').insert([
        { trigger_question: 1, logic_type: 'question' },
      ]);
    });
};
