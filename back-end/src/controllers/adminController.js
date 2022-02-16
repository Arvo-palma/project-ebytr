const { StatusCodes } = require('http-status-codes');
const adminServices = require('../services/adminServices');

const createUser = (req, res) => {
  try {
    const { name, password, email, role } = req.body;
    const userInfo = { name, password, email, role };

    const newUser = adminServices.create(userInfo);
  
    if (!newUser) {
      return res.status(StatusCodes.BAD_REQUEST)
        .json({ message: 'Unable to create user. Verify typed data and try again ' });
    }
  
    const { id } = newUser; // Check this destructuring path
  
    return res.status(StatusCodes.CREATED).json({ id })
  } catch (error) {
    console.log(error);
  }
};

const getAllUsers = (_req, res) => {
  try {
    const allUsers = adminServices.getAll();

    return res.status(StatusCodes.OK).json(allUsers)
  } catch (error) {
    console.log(error);
  }
};

const updateUser = (req, res) => {
  try {
    const userId = req.params.id;
    const { name, password, email, role } = req.body;
    const userInfo = { name, password, email, role };

    const updatedUser = adminServices.update(userId, userInfo);

    if (!updatedUser) {
      return res.status(StatusCodes.BAD_REQUEST)
        .json({ message: 'Unable to update user. Verify typed data and try again ' });
    }

    const { id } = updatedUser

    return res.status(StatusCodes.OK).json({ id })
  } catch (error) {
    console.log(error)
  }
};

const deleteUser = (req, res) => {
  try {
    const userId = req.params.id;

    const deletedUser = adminServices.delete(userId);

    if (!deletedUser) {
      return res.status(StatusCodes.BAD_REQUEST)
        .json({ message: 'Unable to delete user. Verify typed data and try again ' });
    }

    const { id } = deletedUser

    return res.status(StatusCodes.OK).json({ id })
  } catch (error) {
    console.log(error)
  }
};

module.exports = {
  createUser,
  getAllUsers,
  updateUser,
  deleteUser,
}
