const Joi = require("joi");

const createSchema = {
  payload: Joi.object({
    title: Joi.string().required(),
    authorId: Joi.number().integer().required(),
    publishedDate: Joi.string().required(),
    isbn: Joi.string().required(),
    summary: Joi.string().required(),
  }),
};

const getAll = {
  query: Joi.object({
    title: Joi.string(),
    authorName: Joi.string(),
  }),
};

const findById = {
  params: Joi.object({
    id: Joi.string().required(),
  }),
};

module.exports = {
  createSchema,
  getAll,
  findById
};
