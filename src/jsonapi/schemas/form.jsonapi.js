const { BASE_URL } = process.env;
const formJsonApiSchema = {
  id: 'id',
  blacklist: ['question_hint', 'option_group_id'],
  links: {
    self(data) {
      return `${BASE_URL}/forms/${data.id}`;
    },
  },
  relationships: {
    questions: {
      type: 'question',
      links(data) {
        return {
          self: `${BASE_URL}/forms/${data.id}/relationships/questions`,
          related: `${BASE_URL}/forms/${data.id}/questions`,
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
    self: '/forms/',
  },
};

module.exports = formJsonApiSchema;
