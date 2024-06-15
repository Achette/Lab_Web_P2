const Joi = require("joi");

const createProductsSchema = {
    payload: Joi.object({
        name: Joi
                .string()
                .min(3)
                .max(60)
                .required(),
        value: Joi.number(),
        quantity: Joi.number()
                     .positive()
                     .integer()
                     .required(),
        category: Joi.object( {
            id: Joi.number().integer()
        })
    })
};

const getById = {
    params: Joi.object({
        id: Joi
            .number()
            .integer()
            .required()
    })
}

const deleteById = {
    params: Joi.object({
        id: Joi
            .number()
            .integer()
            .required()
    })
}

const getProducts = {
    query: Joi.object({
        name: Joi
            .string()
            .min(1),
        quantity: Joi
            .number()
            .integer()
            .min(1),
        status: Joi
                .string()
                .valid('ativo', 'inativo', 'pendente')
                .default('ativo')
    })
}

module.exports = {
    createProductsSchema, 
    getById,
    getProducts,
    deleteById
};