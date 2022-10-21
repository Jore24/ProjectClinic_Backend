import { User } from "../models/index.js";
import { hashPassword } from "../utils/encrypt.js";

export const findUserByEmail = async (email) => {
    const user = await User.findOne({ email });
    return user;
}

export const createNewUser = async (email, password) => {
    const user = new User({ email, password });
    user.password = hashPassword(password);
    user.role = "63521b514347284f606bdd9a";
    return await user.save();
}