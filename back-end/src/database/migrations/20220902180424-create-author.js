'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('authors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      authors: {
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
    await queryInterface.dropTable('authors');
  },
};
