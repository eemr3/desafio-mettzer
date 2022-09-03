'use strict';

module.exports = (sequelize, DataTypes) => {
  const Url = sequelize.define(
    'Url',
    {
      url: DataTypes.STRING,
      favoriteId: {
        type: DataTypes.INTEGER,
        foreignKey: true,
      },
    },
    {
      underscored: true,
      timestamps: false,
      tableName: 'urls',
    },
  );

  Url.associate = (models) => {
    Url.belongsTo(models.Favorite, {
      foreignKey: 'favoriteId',
      as: 'favorites',
    });
  };

  return Url;
};
