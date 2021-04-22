const sequelize = require('../db')

const {DataTypes} = require('sequelize')

const DataTable = sequelize.define( 'dataTable', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    date: {type: DataTypes.DATE, unique: false},
    name: {type: DataTypes.STRING, unique: false},
    quantity: {type: DataTypes.INTEGER, unique: false},
    distance: {type: DataTypes.FLOAT, unique: false}

})


module.exports = {
    DataTable
}