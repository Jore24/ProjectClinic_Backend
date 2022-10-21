import { Patient } from "../models/index.js";

export const createNewPatient = async (dataPatient, idUser) => {
    const patient = new Patient(dataPatient);
    patient.user = idUser;
    return await patient.save();
}