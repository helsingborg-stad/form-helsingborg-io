
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('logic_action_types').del()
    .then(function () {
      // Inserts seed entries
      return knex('logic_action_types').insert([
        { type: 'add' },
      ]);
    });
};
