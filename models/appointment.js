const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');

const Appointment = sequelize.define('Appointment', {
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
  doctor_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'doctors',
      key: 'id'
    }
  },
  consultationRoom_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'consultation_rooms',
      key: 'id'
    }
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  time: {
    type: DataTypes.TIME,
    allowNull: false
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'appointments',
  timestamps: false
});

module.exports = Appointment;
