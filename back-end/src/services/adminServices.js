const { user } = require('../database/models');

const create = async (userInfo) => {
  try {
    const { name, password, email, role } = userInfo;
    const newUser = await user.create({ name, password, email, role });

    if (!newUser) {
      return false;
    }

    return newUser;
  } catch (error) {
    console.log(error);
  }
}

const getAll = async () => {
  try {
    const allUsers = await user.getAll();

    if (!allUsers) return false;

    return allUsers;
  } catch (error) {
    console.log(error);
  }
}

const update = async (userId, userInfo) => {
  try {
    const { name, password, email, role } = userInfo;

    const updatedUser = await user.update(
      {
        name,
        password,
        email,
        role,
      },
      {
        where: {
          id: userId,
        },
      });
    
      return updatedUser;
  } catch (error) {
    console.log(error);
  }
}

const deleteUserService = async (id) => {
  try {
    const deletedUser = await user.delete({ where: id });

    return deletedUser;
  } catch (error) {
    console.log(error);
    return false;
  }
}


module.exports = {
  create,
  getAll,
  update,
  deleteUserService,
}
