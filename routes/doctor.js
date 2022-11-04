import Router from 'express';
import { getDoctors, getDoctor, updateDoctor, deleteDoctor } from '../controllers/doctor.js';

export const doctorRouter = Router();

doctorRouter.get("/", getDoctors);

doctorRouter.get("/:id", getDoctor);

doctorRouter.put("/:id", updateDoctor);

doctorRouter.delete("/:id", deleteDoctor);

