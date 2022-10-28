import Router from 'express';
import { userLogin, userPatientRegister, userDoctorRegister } from '../controllers/auth.js';
import { validateLogin, validateRegisterPatient, validateRegisterDoctor } from '../middleware/validators/auth.js';

export const authRouter = Router();

authRouter.post('/registerPatient', validateRegisterPatient, userPatientRegister);
authRouter.post('/registerDoctor', validateRegisterDoctor, userDoctorRegister);
authRouter.post('/login', validateLogin, userLogin);
