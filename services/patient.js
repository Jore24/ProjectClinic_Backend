import { Patient } from "../models/index.js";

export const createPatient = async (dataPatient, idUser) => {
    const patient = new Patient(dataPatient);
    patient.user = idUser;
    return patient;
}