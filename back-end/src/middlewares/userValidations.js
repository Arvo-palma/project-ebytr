const { StatusCodes } = require('http-status-codes');
// const crypto = require('crypto-js');

const adminServices = require('../services/adminServices');

const userNotFound = async (req, res, next) => {
  try {
    const { email } = req.body;

    const findUser = await adminServices.findUserByEmail(email);

    if (!findUser) {
      return res.status(StatusCodes.NOT_FOUND).json({ message: 'User not found in database' });
    }

    next();
  } catch (err) {
    console.log(err);
  }
};

const passwordsDoesntMatch = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // const encryptedPass = crypto.MD5(password).toString(crypto.enc.Hex);  

    const { dataValues: { password: userPassword } } = await adminServices.findUserByEmail(email);

    if (password !== userPassword) {
      return res.status(StatusCodes.FORBIDDEN).json({ message: 'Incorrect Password' });
    }

    next();
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  userNotFound,
  passwordsDoesntMatch,
};
