const authorModel = require("./author-model");

const save = async (author) => {
  return authorModel.create(author);
};

const findAll = async () => {
  return authorModel.findAll();
};

const findById = async (id) => {
  return authorModel.findOne({ where: { id } });
};

const deleteById = async (id) => {
  return authorModel.destroy({ where: { id } });
};

module.exports = {
  save,
  findAll,
  findById,
  deleteById,
};
