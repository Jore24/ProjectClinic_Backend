import Router from 'express';
import { userLogin, userPatientRegister, userDoctorRegister } from '../controllers/auth.js';

export const authRouter = Router();

authRouter.post('/registerPatient', userPatientRegister);
authRouter.post('/registerDoctor', userDoctorRegister);
authRouter.post('/login', userLogin);
