
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('option_choices_questions').del()
    .then(function () {
      // Inserts seed entries
      return knex('option_choices_questions').insert([
        {question_id: 3, option_choice_id: 1},
        {question_id: 3, option_choice_id: 2},
        {question_id: 7, option_choice_id: 24},
        {question_id: 7, option_choice_id: 25},
        {question_id: 10, option_choice_id: 1},
        {question_id: 10, option_choice_id: 2},
        {question_id: 16, option_choice_id: 1},
        {question_id: 16, option_choice_id: 2},
      ]);
    });
};
