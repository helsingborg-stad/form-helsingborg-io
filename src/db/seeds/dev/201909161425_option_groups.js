
exports.seed = (knex, __) => knex('option_groups')
  .del()
  .then(() => knex('option_groups').insert([
    { option_group_name: 'yes_or_no' },
    { option_group_name: 'scale_five' },
    { option_group_name: 'scale_ten' },
    { option_group_name: 'guest_amount' },
  ]));
