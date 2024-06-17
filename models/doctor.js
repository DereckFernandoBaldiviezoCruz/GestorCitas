const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');

const Doctor = sequelize.define('Doctor', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  specialty: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'doctors',
  timestamps: false
});

module.exports = Doctor;
