const Sequelize = require('sequelize');
const database = require('../../../config/db');
const Category = require('../category/category-model');

const Product = database.sequelize.define('Product', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: true,
        primaryKey: true,
        field: 'codigo' //nome do atributo do banco
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'desc_prod'
    },
    value: {
        type: Sequelize.DECIMAL(15,2),
        field: 'vl_unit'
    },
    quantity: {
        type: Sequelize.INTEGER,
        field: 'qtd'
    },
    categoryId: {
        type: Sequelize.INTEGER,
        field: 'cod_cat',
        references: {
            model: 'category',
            key: 'id'
        }
    }
}, {
    timestamps: false,
    tableName: 'tb_produto' //nome da tabela banco
});

Product.belongsTo(Category, {foreignKey: 'categoryId'});

module.exports = Product;