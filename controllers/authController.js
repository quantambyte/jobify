// model
import User from '../models/User.js';
import { StatusCodes } from 'http-status-codes';

// errors
import {
  BadRequest,
  NotFound,
  Unauthenticated,
} from '../errors/index.js';

// register user
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

// login user
const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new BadRequest('Please Provide all Values');
  }

  const user = await User.findOne({ email }).select('+password');

  // finding user
  if (!user) {
    throw new Unauthenticated('Invalid Credentials');
  }

  // checking for password
  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new Unauthenticated('Invalid Credentials');
  }

  // generating jwt
  const token = user.createJWT();

  // setting password to undefined
  user.password = undefined;

  res
    .status(StatusCodes.OK)
    .json({ user, token, location: user.location });
};

// updating user
const updateUser = async (req, res) => {
  const { email, name, lastName, location } = req.body;

  if (!email || !name || !lastName || !location) {
    throw new BadRequest('Please provide all values');
  }

  // fetching user
  const user = await User.findOne({ _id: req.user.userId });

  // setting new values
  user.email = email;
  user.name = name;
  user.lastName = lastName;
  user.location = location;

  // saving updated user
  await user.save();

  // token
  // we dont have to create new token but its a preference
  const token = user.createJWT();

  res.status(StatusCodes.OK).json({
    user,
    token,
    location: user.location,
  });
};

export { register, login, updateUser };
