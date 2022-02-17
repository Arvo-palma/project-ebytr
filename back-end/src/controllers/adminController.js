const { StatusCodes } = require('http-status-codes');
const adminServices = require('../services/adminServices');

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const { dataValues: { id, name, email: userEmail, role } } = await adminServices
      .findUserByEmail(email);

    return res.status(StatusCodes.OK)
      .json({ id, name, email: userEmail, role });
  } catch (err) {
    console.log(err);
  }
};

const createUser = async (req, res) => {
  try {
    const { name, password, email, role } = req.body;
    const userInfo = { name, password, email, role };

    const newUser = await adminServices.create(userInfo);
  
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

const getAllUsers = async (_req, res) => {
  try {
    const allUsers = await adminServices.getAll();

    return res.status(StatusCodes.OK).json(allUsers)
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const { name, password, email, role } = req.body;
    const userInfo = { name, password, email, role };

    const updatedUser = await adminServices.update(userId, userInfo);

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

const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;

    const deletedUser = await adminServices.deleteUserService(userId);

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
  loginUser,
  createUser,
  getAllUsers,
  updateUser,
  deleteUser,
}
