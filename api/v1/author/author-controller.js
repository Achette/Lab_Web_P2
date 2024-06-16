const business = require("./book-business");

const getBooks = async (req, h) => {
  const { query } = req;
  const result = await business.list(query);
  return h.response(result).code(200);
};

const create = async (req, h) => {
  const { payload } = req;
  try {
    const result = await business.create(payload);
    return h.response(result).code(201);
  } catch (error) {
    console.error(error);
    return h.response({ error: error.message }).code(400);
  }
};

const findById = async (req, h) => {
  const bookId = req.params.id;
  const book = await business.findById(bookId);
  if (!book) {
    return h.response().code(404);
  }
  return h.response(book).code(200);
};

const deleteById = async (req, h) => {
  const bookId = req.params.id;
  try {
    await business.deleteById(bookId);
    return h.response({}).code(204);
  } catch (error) {
    console.error(error);
    return h.response({ error: error.message }).code(400);
  }
};

module.exports = {
  getBooks,
  create,
  findById,
  deleteById,
};
