const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Record = sequelize.define('Record', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  patient_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'patients',
      key: 'id'
    }
  },
  details: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'records',
  timestamps: false
});

module.exports = Record;
