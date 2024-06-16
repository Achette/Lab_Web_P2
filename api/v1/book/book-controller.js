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
    console.error(error);
  }
};

const findById = async (request, h) => {
  const productId = request.params.id;

  return h.response(await business.findById(productId));
};

module.exports = {
  getBooks,
  create,
  findById
};
