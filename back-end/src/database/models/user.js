'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      tableName: 'users',
    },
  );

  User.associate = (models) => {
    User.hasMany(models.Favorite, {
      as: 'favorites',
      foreignKey: 'userId',
    });
  };

  return User;
};
