module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define("user", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
  },
  {
    timestamps: false,
    underscored: true,
    tableName: 'users',
  });

  user.associate = (models) => {
    user.hasMany(models.task, { as: 'userId', foreignKey: 'userId' })
  }

  return user;
};
