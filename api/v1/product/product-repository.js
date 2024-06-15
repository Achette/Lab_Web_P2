const productModel = require('./product-model');
const {Op} = require('sequelize');
const Category = require('../category/category-model');



const save = async (product) => {
    return productModel.create(product);
}

const findAll = async (filter) => {
    const {name, quantity} = filter;

    return productModel.findAll({
        include: [{
            model: Category,
            required: true //inner
        }],
        where: {
            ...(name) ? {name: {[Op.iLike]: `${name}%`}} : {},
            ...(quantity) ? {quantity}: {}
        }
    });
}

const findById = async (id) => {
    return productModel.findOne({
        include: [ {
            model: Category,
            required: false //left
        }],
        where: {
            id: id
        }
    })
}

const deleteById = async (id) => {

    productModel.destroy({
        where: {
            id: id
        }
    });
}

module.exports = {
    save,
    findAll,
    findById,
    deleteById
}