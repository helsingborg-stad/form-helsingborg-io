
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('logic_actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('logic_actions').insert([
        {
          condition: 'yes;yes;equal',
          logic_id: 1,
          target_question: 4,
          action_type: 'add'
        },
        {
          condition: 'yes;yes;equal',
          logic_id: 1,
          target_question: 5,
          action_type: 'add'
        },
        {
          condition: 'yes;yes;equal',
          logic_id: 1,
          target_question: 6,
          action_type: 'add'
        },
        {
          condition: 'other;other;equal',
          logic_id: 2,
          target_question: 8,
          action_type: 'add'
        },
        {
          condition: 'no;no;equal',
          logic_id: 3,
          target_question: 11,
          action_type: 'add'
        },
        {
          condition: 'yes;yes;equal',
          logic_id: 3,
          target_question: 11,
          action_type: 'add'
        },
        {
          condition: 'yes;yes;equal',
          logic_id: 3,
          target_question: 12,
          action_type: 'add'
        },
        {
          condition: 'no;no;equal',
          logic_id: 4,
          target_question: 17,
          action_type: 'add'
        },
      ]);
    });
};
