const { BASE_URL } = process.env;
const questionJsonApiSchema = {
  id: 'id',
  blacklist: ['question_hint', 'option_group_id'],
  links: {
    self(data) {
      return `${BASE_URL}/questions/${data.id}`;
    },
  },
  relationships: {
    form: {
      type: 'form',
      links(data) {
        return {
          self: `${BASE_URL}/questions/${data.id}/relationships/form`,
          related: `${BASE_URL}/questions/${data.id}/form`,
        };
      },
    },
    validations: {
      type: 'validation',
      links(data) {
        return {
          self: `${BASE_URL}/questions/${data.id}/relationships/validations`,
          related: `${BASE_URL}/questions/${data.id}/validations`,
        };
      },
    },
    options: {
      type: 'option',
      links(data) {
        return {
          self: `${BASE_URL}/questions/${data.id}/relationships/validations`,
          related: `${BASE_URL}/questions/${data.id}/validations`,
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
    self: `${BASE_URL}/questions`, // Can be a function (with extra data argument) or a string value
  },
}


module.exports = questionJsonApiSchema;
