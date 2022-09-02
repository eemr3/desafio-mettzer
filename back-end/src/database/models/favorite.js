'use strict';
module.exports = (sequelize, DataTypes) => {
  const Favorite = sequelize.define(
    'Favorite',
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      userId: {
        type: DataTypes.INTEGER,
        foreignKey: true,
      },
    },
    {
      tableName: 'favorites',
      underscored: true,
    },
  );

  Favorite.associate = (models) => {
    Favorite.hasMany(models.Author, {
      as: 'authors',
      foreignKey: 'authorId',
    });

    Favorite.hasMany(models.Type, {
      as: 'types',
      foreignKey: 'typeId',
    });

    Favorite.belongsTo(models.User, {
      as: 'users',
      foreignKey: 'userId',
    });
  };

  return Favorite;
};
