import { User } from '../models/index.js';
import { hashPassword, comparePassword } from '../utils/encrypt.js';

export const findUserByEmail = async email => {
  const user = await User.findOne({ email });
  return user;
};

export const findUserByKey = async key => {
  const user = await User.findOne({ key });
  return user;
};

export const createUser = async (email, password) => {
  const user = new User({ email, password }); //consultar
  user.password = hashPassword(password);
  return user;
};
export const checkOut = async (password, userPassword) => {
  let check = comparePassword(password, userPassword);
  return check;
};
