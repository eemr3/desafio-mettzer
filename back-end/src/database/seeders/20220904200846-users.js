'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'Ichigo',
          email: 'ichigo@email.com',
          password: '$2a$10$EwWWmDB6DTdCsvH1zqxhgeBumotSzFrsZO.QV5YDzR7JIoI22vQXm', //123456
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
      ],
      {},
    ),

  down: async (queryInterface) => queryInterface.bulkDelete('users', null, {}),
};
