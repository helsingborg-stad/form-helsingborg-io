
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('logic_actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('logic_actions').insert([
        {
          condition: 'yes;yes;equal',
          logic_id: 1,
          target_question: 2,
          action_type: 'add'
        },
      ]);
    });
};
