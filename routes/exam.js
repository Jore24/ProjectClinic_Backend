import Router from 'express';
import { registerExam} from '../controllers/exam.js';
import { checkAuth } from '../middleware/validateJwt.js';

export const examRouter = Router();

examRouter.post('/registerExam/:id', checkAuth, registerExam); //checkAuth para ver que sea doctor y capturar el id por el token
examRouter.put('/updateExam');
examRouter.get('/:id');
examRouter.get('/');
