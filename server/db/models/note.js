'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Note extends Model {
   
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'userId' })
    }
  };
  Note.init({
    title: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    userId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Note',
  });
  return Note;
};
