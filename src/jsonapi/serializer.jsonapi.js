const JSONAPISerializer = require('json-api-serializer');
const schemas = require('./schemas');

const Serializer = new JSONAPISerializer({
  convertCase: 'snake_case',
  unconvertCase: 'camelCase',
});

Serializer.register('form', schemas.form);
Serializer.register('question', schemas.question);
Serializer.register('validation', schemas.validation);
Serializer.register('option', schemas.option);

module.exports = Serializer;
