module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('tasks',
      [
        {
          user_id: 2,
          description: 'Revisar contatos dos fornecedores',
          status: 'Pendente',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 2,
          description: 'Varrer a calçada',
          status: 'Executando',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 2,
          description: 'Fazer café',
          status: 'Concluída',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ]
    );
},

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tasks', null, {});
  }
};
