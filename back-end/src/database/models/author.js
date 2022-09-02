'use strict';

module.exports = (sequelize, DataTypes) => {
  const Author = sequelize.define(
    'Author',
    {
      authors: DataTypes.STRING,
      favoriteId: {
        type: DataTypes.INTEGER,
        foreignKey: true,
      },
    },
    {
      underscored: true,
      timestamps: false,
      tableName: 'authors',
    },
  );
  Author.associate = (models) => {
    Author.belongsTo(models.Favorite, {
      foreignKey: 'favoriteId',
      as: 'favorites',
    });
  };

  return Author;
};
