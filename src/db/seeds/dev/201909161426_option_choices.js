
exports.seed = (knex, __) => knex('option_choices')
  .del()
  .then(() => knex('option_choices').insert([
    { option_group_id: 1, option_choice_name: 'Ja' },
    { option_group_id: 1, option_choice_name: 'Nej' },
    { option_group_id: 2, option_choice_name: '1' },
    { option_group_id: 2, option_choice_name: '2' },
    { option_group_id: 2, option_choice_name: '3' },
    { option_group_id: 2, option_choice_name: '4' },
    { option_group_id: 2, option_choice_name: '5' },
    { option_group_id: 3, option_choice_name: '1' },
    { option_group_id: 3, option_choice_name: '2' },
    { option_group_id: 3, option_choice_name: '3' },
    { option_group_id: 3, option_choice_name: '4' },
    { option_group_id: 3, option_choice_name: '5' },
    { option_group_id: 3, option_choice_name: '6' },
    { option_group_id: 3, option_choice_name: '7' },
    { option_group_id: 3, option_choice_name: '8' },
    { option_group_id: 3, option_choice_name: '9' },
    { option_group_id: 3, option_choice_name: '10' },
    { option_group_id: 4, option_choice_name: 'Inga' },
    { option_group_id: 4, option_choice_name: '1-3' },
    { option_group_id: 4, option_choice_name: '4-6' },
    { option_group_id: 4, option_choice_name: '7-9' },
    { option_group_id: 4, option_choice_name: '10-12' },
    { option_group_id: 4, option_choice_name: '13-15' },
  ]));
