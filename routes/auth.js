import Router from "express";
import { userLogin, userRegister } from "../controllers/auth.js";

export const authRouter = Router();

authRouter.post("/register", userRegister);
authRouter.post("/login", userLogin);