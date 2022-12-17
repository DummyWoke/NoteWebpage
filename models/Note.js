const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Notes model
class Note extends Model {}

// create fields/columns for Notes model
Note.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'note'
  }
);

module.exports = Note;
