const { sequelize } = require('./db-connect')
const { Sequelize, DataTypes } = require('sequelize')

const Details = sequelize.define('data', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email_id: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    }
}, {
    tableName: 'data',
    timestamps: false
});

sequelize.sync();
module.exports = {
    Details,
};
