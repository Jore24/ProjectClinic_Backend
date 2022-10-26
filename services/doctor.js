import { Doctor } from "../models/index.js";

export const createDoctor = async (dataDoctor, idUser) => {
    const doctor = new Doctor(dataDoctor);
    doctor.user = idUser;
    return doctor;
}