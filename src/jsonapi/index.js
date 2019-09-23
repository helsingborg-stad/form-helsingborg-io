const Serializer = require('./serializer.jsonapi');
const createObjectFromKnexQuery = require('./convert/knex.jsonapi');

module.exports = {
  serializer: Serializer,
  convert: {
    queryData: createObjectFromKnexQuery,
  },
};
