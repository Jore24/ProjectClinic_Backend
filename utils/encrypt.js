import bcrypt from "bcryptjs";

export const hashPassword = (password) => {
  const salt = bcrypt.genSaltSync();
  return bcrypt.hashSync(password, salt);
};

export const comparePassword = () => {
  const salt = bcrypt.genSaltSync();
  return bcrypt.hashSync(password, salt);
};
