const repository = require("./book-repository");

const create = async (book) => {
  return repository.save(book);
};

const list = async (query) => {
  return repository.findAll(query);
};

module.exports = {
  create,
  list,
};
