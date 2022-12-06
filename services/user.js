import { User } from '../models/index.js';
import { hashPassword } from '../utils/encrypt.js';

export const findUserByEmail = async email => {
  const user = await User.findOne({ email }).populate("patient").populate("doctor");
  return user;
};

export const findUserByKey = async key => {
  const user = await User.findOne({ key });
  return user;
};

export const createUser = async (email, password) => {
  const user = new User({ email, password });
  user.password = hashPassword(password);
  return user;
};

export const findUser = async (id) => {
  const user = await User.findById(id);
  return user;

}
export const findUsers = async () => {
  const users = await User.find();
  return users;
}
