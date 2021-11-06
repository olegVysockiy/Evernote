'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    
    static associate(models) {
      this.hasMany(models.Note, {foreignKey: 'userId'})
    }
  };
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    urlFoto: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
