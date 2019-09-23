const { BASE_URL } = process.env;
const optionJsonApiSchema = {
  id: 'id',
  links: {
    self(data) {
      return `${BASE_URL}/options/${data.id}`;
    },
  },
  relationships: {
    questions: {
      type: 'question',
      links(data) {
        return {
          self: `${BASE_URL}/options/${data.id}/relationships/questions`,
          related: `${BASE_URL}/options/${data.id}/questions`,
        };
      },
    },
    optionGroup: {
      type: 'optionGroup',
      links(data) {
        return {
          self: `${BASE_URL}/options/${data.id}/relationships/option-group`,
          related: `${BASE_URL}/options/${data.id}/option-group`,
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
    self: '/forms/', // Can be a function (with extra data argument) or a string value
  },
};

module.exports = optionJsonApiSchema;
