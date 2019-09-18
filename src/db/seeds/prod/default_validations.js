
exports.seed = (knex, __) => knex('validations')
  .del()
  .then(() => knex('validations').insert([
    {
      name: 'is_email_input',
      type: 'default',
      method: 'isEmail',
      message: '',
      validWhen: true,
    },
    {
      name: 'is_empty_input',
      type: 'default',
      method: 'isEmpty',
      message: 'Enter a value',
      validWhen: false,
    },
    {
      name: 'is_max_length_text_input',
      type: 'default',
      method: 'isLength',
      args: JSON.stringify({ min: 100 }),
      message: 'Your answer is to long',
      validWhen: true,
    },
    {
      name: 'is_min_length_text_input',
      type: 'default',
      method: 'isLength',
      args: JSON.stringify({ min: 1 }),
      message: 'Your answer is to short',
      validWhen: true,
    },
    {
      name: 'is_min_length_textarea',
      type: 'default',
      method: 'isLength',
      args: JSON.stringify({ min: 1 }),
      message: 'Your answer is to short',
      validWhen: true,
    },
    {
      name: 'is_max_length_textarea',
      type: 'default',
      method: 'isLength',
      args: JSON.stringify({ min: 300 }),
      message: 'Your answer is to short',
      validWhen: true,
    },
    {
      name: 'is_numeric_input',
      type: 'default',
      method: 'isNumeric',
      message: 'Your answer is not a number',
      validWhen: true,
    },
    {
      name: 'is_alpha_text_input',
      type: 'default',
      method: 'isAlpha',
      message: 'Your answer is not a number',
      validWhen: true,
    },
  ]));
