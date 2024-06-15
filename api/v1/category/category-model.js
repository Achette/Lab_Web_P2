const Sequelize = require('sequelize');
const database = require('../../../config/db');

const Category = database.sequelize.define('Category', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: true,
        primaryKey: true,
        field: 'codigo' //nome do atributo do banco
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'descricao'
    }
}, {
    timestamps: false,
    tableName: 'tb_categoria' //nome da tabela banco
});

module.exports = Category;