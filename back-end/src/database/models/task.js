module.exports = (sequelize, DataTypes) => {
  const task = sequelize.define("task", {
    userId: DataTypes.INTEGER,
    description: DataTypes.STRING,
    status: DataTypes.STRING,
  },
  {
    underscored: true,
    tableName: 'tasks',
  });

  task.associate = (models) => {
    task.belongsTo(models.user, { as: 'user', foreignKey: 'userId' })
  }

  return task;
};
