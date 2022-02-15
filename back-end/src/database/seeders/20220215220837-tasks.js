module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('tasks',
      [
        {
          user_id: 2,
          description: 'Revisar contatos dos fornecedores',
          status: 'Pendente',
        },
        {
          user_id: 2,
          description: 'Varrer a calçada',
          status: 'Executando',
        },
        {
          user_id: 2,
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
