const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Queue = sequelize.define('Queue', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'queues',
  timestamps: false
});

module.exports = Queue;
