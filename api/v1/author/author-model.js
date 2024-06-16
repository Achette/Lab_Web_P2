const Sequelize = require('sequelize');
const database = require('../../../config/db');

const Author = database.sequelize.define('Author', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        field: 'id'
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'name'
    },
    biography: {
        type: Sequelize.STRING,
        field: 'biography'
    },
    birthDate: {
        type: Sequelize.STRING,
        field: 'birth_date'
    }
}, {
    timestamps: false,
    tableName: 'tb_author'
});

module.exports = Author;