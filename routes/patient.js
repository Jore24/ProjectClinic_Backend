import Router from 'express';
import {getPatients, getPatient, updatePatient, deletePatient} from '../controllers/patient.js';


export const patientRouter = Router();

patientRouter.get("/", getPatients);

patientRouter.get("/:id", getPatient);

patientRouter.put("/:id", updatePatient);

patientRouter.delete("/:id", deletePatient);