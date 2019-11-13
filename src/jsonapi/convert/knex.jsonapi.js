const createObjectFromKnexQuery = (data) => {
  return data.serialize();
};

module.exports = createObjectFromKnexQuery;
