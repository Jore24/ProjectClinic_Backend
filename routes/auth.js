import Router from 'express';
import { userLogin, userPatientRegister, userDoctorRegister, getUser, getUsers } from '../controllers/auth.js';
import { checkAuth } from '../middleware/validateJwt.js';

import { validateLogin, validateRegisterPatient, validateRegisterDoctor } from '../middleware/validators/auth.js';

export const authRouter = Router();

authRouter.post('/registerPatient', validateRegisterPatient, userPatientRegister);
authRouter.post('/registerDoctor', validateRegisterDoctor, userDoctorRegister);
authRouter.post('/login', validateLogin, userLogin);
authRouter.get('/:id', checkAuth, getUser); //verify token
authRouter.get('/', getUsers); //verify token
