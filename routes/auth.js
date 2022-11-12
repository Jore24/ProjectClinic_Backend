import Router from 'express';
import { userLogin, userPatientRegister, userDoctorRegister, profileUser} from '../controllers/auth.js';
import { checkAuth } from '../middleware/validateJwt.js';
import { validateLogin, validateRegisterPatient, validateRegisterDoctor } from '../middleware/validators/auth.js';

export const authRouter = Router();

authRouter.post('/registerPatient', validateRegisterPatient, userPatientRegister);
authRouter.post('/registerDoctor', validateRegisterDoctor, userDoctorRegister);
authRouter.post('/login', validateLogin, userLogin);
authRouter.get('/profile', checkAuth, profileUser);
//authRouter.get('/confirm')

//authRouter.get('/:id', checkAuth, getUser); //verify token
//authRouter.get('/', checkAuth, getUsers); //verify token
