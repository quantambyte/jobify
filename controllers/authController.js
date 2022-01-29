// model
import User from '../models/User.js';
import { StatusCodes } from 'http-status-codes';

// errors
import {
  BadRequest,
  NotFound,
} from '../errors/index.js';

const register = async (req, res) => {
  const { name, email, password } = req.body;

  // if some value is missing
  if (!name || !email || !password) {
    throw new BadRequest('Please Provide all values');
  }

  // if person is already registered
  const userAlreadyExist = await User.findOne({
    email,
  });

  if (userAlreadyExist) {
    throw new BadRequest('User is already Registered');
  }

  // creating user
  const user = await User.create({
    name,
    email,
    password,
  });

  // generating jwt
  const token = user.createJWT();
  // sending response
  res.status(StatusCodes.CREATED).json({
    user: {
      email: user.email,
      lastName: user.lastName,
      location: user.location,
      name: user.name,
    },
    token,
    location: user.location,
  });
};
const login = async (req, res) => {
  res.send('login user');
};
const updateUser = async (req, res) => {
  res.send('updateUser user');
};

export { register, login, updateUser };
