const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');

const ConsultationRoom = sequelize.define('ConsultationRoom', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  location: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: 'consultation_rooms',
  timestamps: false
});

module.exports = ConsultationRoom;
