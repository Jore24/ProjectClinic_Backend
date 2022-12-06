import Router from 'express';
import {getPatients, getPatient, updatePatient, deletePatient} from '../controllers/patient.js';
import { checkAuth } from '../middleware/validateJwt.js';


export const patientRouter = Router();

patientRouter.get("/", getPatients); //el doctor  puede ver la lista de pacientes

patientRouter.get("/:id", getPatient); //el doctor y el patient pueden ver el perfil del paciente

patientRouter.put("/:id", updatePatient); //solo patient puede actualizar el perfil del paciente

patientRouter.delete("/:id", deletePatient); //verificar si es necesario