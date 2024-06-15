const business = require("./book-business");

const getBooks = async (request, h) => {
  const { query } = request;

  payload.authorName = payload.author.name;
  const result = await business.list(query);
  return h.response(result).code(200);
};

const create = async (request, h) => {
  const { payload } = request;

  try {
    const result = await business.create(payload);

    return h.response(result).code(201);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getBooks,
  create,
};
