'use strict';
module.exports = (sequelize, DataTypes) => {
  const Type = sequelize.define(
    'Type',
    {
      type: DataTypes.STRING,
      favoriteId: {
        type: DataTypes.INTEGER,
        foreignKey: true,
      },
    },
    {
      underscored: true,
      timestamps: false,
      tableName: 'types',
    },
  );

  Type.associate = (models) => {
    Type.belongsTo(models.Favorite, {
      foreignKey: 'favoriteId',
      as: 'favorites',
    });
  };

  return Type;
};
