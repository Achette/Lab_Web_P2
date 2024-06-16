const repository = require("./book-repository");

const create = async (book) => {
  return repository.save(book);
};

const list = async (query) => {
  return repository.findAll(query);
};

const findById = async (id) => {
  return repository.findById(id);
};

module.exports = {
  create,
  list,
  findById,
};
