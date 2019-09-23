const { BASE_URL } = process.env;
const validationJsonApiSchema = {
  id: 'id',
  links: {
    self(data) {
      return `${BASE_URL}/validations/${data.id}`;
    },
  },
  relationships: {
    questions: {
      type: 'question',
      links(data) {
        return {
          self: `${BASE_URL}/validations/${data.id}/relationships/questions`,
          related: `${BASE_URL}/validations/${data.id}/questions`,
        };
      },
    },
  },
  topLevelMeta(data, extraData) {
    return {
      count: extraData.count,
      total: data.length,
    };
  },
  topLevelLinks: {
  // An object or a function that describes top level links.
    self: `${BASE_URL}/validations`, // Can be a function (with extra data argument) or a string value
  },
};


module.exports = validationJsonApiSchema;
