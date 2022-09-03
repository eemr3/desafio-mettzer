'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('urls', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      url: {
        type: Sequelize.STRING,
      },
      favorite_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'favorites',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('urls');
  },
};
