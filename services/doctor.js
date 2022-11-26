import { Doctor } from '../models/index.js';

export const createDoctor = async (dataDoctor, idUser) => {
  const doctor = new Doctor(dataDoctor);
  doctor.user = idUser;
  return doctor;
};

export const listDoctors = async () => {
  const doctors = await Doctor.find();
  return doctors;
};

export const listDoctor = async id => {
  const doctor = await Doctor.findById(id);
  return doctor;
};

export const updDoctor = async (id, body) => {
  const data = await Doctor.findByIdAndUpdate(id, body, { new: true });
  return data;
};

export const delDoctor = async id => {
  const data = await Doctor.findByIdAndDelete(id);
  return data;
};
