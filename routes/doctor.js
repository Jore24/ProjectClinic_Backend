import Router from 'express';
import { getDoctors, getDoctor, updateDoctor, deleteDoctor } from '../controllers/doctor.js';
import { checkAuth } from '../middleware/validateJwt.js';

export const doctorRouter = Router();

doctorRouter.get("/", getDoctors); //el doctor y el patient pueden ver la lista de doctores

doctorRouter.get("/:id", getDoctor); //el doctor y el patient pueden ver el perfil del doctor

doctorRouter.put("/:id", updateDoctor); //solo doctor puede actualizar su perfil

doctorRouter.delete("/:id", deleteDoctor); //verificar si es necesario

