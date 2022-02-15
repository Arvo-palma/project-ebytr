module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users',
    [
      {
        id: 1,
        name: 'Ebytr Admin',
        email: 'adm@ebytr.com',
        password: 'a4c86edecc5aee06eff8fdeda69e0d04',
        role: 'administrator',
      },
      {
        id: 2,
        name: 'Fulano Pereira',
        email: 'fulano@ebytr.com',
        password: '3c28d2b0881bf46457a853e0b07531c6',
        role: 'employee',
      },
    ]
  )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
