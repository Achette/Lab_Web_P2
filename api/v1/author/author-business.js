const repository = require("./author-repository");
const bookRepository = require("../book/book-repository");

const create = async (author) => {
  return repository.save(author);
};

const list = async () => {
  return repository.findAll();
};

const findById = async (id) => {
  return repository.findById(id);
};

const deleteById = async (id) => {
  const author = await bookRepository.findAll({ authorId: id });
  if (author.books.length > 0) {
    // valida se autor tem pelo menos um livro a ele associado
    throw new Error("Error! Not allowed delete authors with books");
  }
  repository.deleteById(id);
};

module.exports = {
  create,
  list,
  findById,
  deleteById,
};
