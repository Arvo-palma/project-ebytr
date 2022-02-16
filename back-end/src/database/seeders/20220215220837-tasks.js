module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('tasks',
      [
        {
          userId: 2,
          description: 'Revisar contatos dos fornecedores',
          status: 'Pendente',
        },
        {
          userId: 2,
          description: 'Varrer a calçada',
          status: 'Executando',
        },
        {
          userId: 2,
          description: 'Fazer café',
          status: 'Concluída',
        },
      ]
    );
},

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tasks', null, {});
  }
};
