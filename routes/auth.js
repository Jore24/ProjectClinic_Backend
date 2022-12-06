import Router from 'express';
import { userLogin, userPatientRegister, userDoctorRegister, profileUser, userConfirm, revalidateToken} from '../controllers/auth.js';
import { checkAuth } from '../middleware/validateJwt.js';
import { validateLogin, validateRegisterPatient, validateRegisterDoctor } from '../middleware/validators/auth.js';

export const authRouter = Router();

authRouter.post('/registerPatient', validateRegisterPatient, userPatientRegister);
authRouter.post('/registerDoctor', validateRegisterDoctor, userDoctorRegister);
authRouter.post('/login', validateLogin, userLogin);
authRouter.get('/profile', checkAuth, profileUser);
authRouter.get('/confirm/:key', userConfirm);
authRouter.get('/revalidate', revalidateToken);

//authRouter.get('/:id', checkAuth, getUser); //verify token
//authRouter.get('/', checkAuth, getUsers); //verify token
