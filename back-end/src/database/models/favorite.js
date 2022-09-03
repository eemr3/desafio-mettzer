'use strict';
module.exports = (sequelize, DataTypes) => {
  const Favorite = sequelize.define(
    'Favorite',
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      type: DataTypes.STRING,
      userId: {
        type: DataTypes.INTEGER,
        foreignKey: true,
      },
    },
    {
      tableName: 'favorites',
      timestamps: false,
      underscored: true,
    },
  );

  Favorite.associate = (models) => {
    Favorite.hasMany(models.Author, {
      as: 'authors',
      foreignKey: 'favoriteId',
    });

    Favorite.hasMany(models.Url, {
      as: 'urls',
      foreignKey: 'favoriteId',
    });

    Favorite.belongsTo(models.User, {
      as: 'users',
      foreignKey: 'userId',
    });
  };

  return Favorite;
};
