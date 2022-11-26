import { Patient } from '../models/index.js';

export const findPatient = async id => {
  const patient = await Patient.findById(id);
  return patient;
};

export const createPatient = async (dataPatient, idUser) => {
  const patient = new Patient(dataPatient);
  patient.user = idUser;
  return patient;
};

export const listPatients = async () => {
  const patients = await Patient.find();
  return patients;
};

export const listPatient = async id => {
  const patient = await Patient.findById(id);
  return patient;
};

export const updPatient = async (id, body) => {
  const data = await Patient.findByIdAndUpdate(id, body, { new: true });
  return data;
};

export const delPatient = async id => {
  const data = await Patient.findByIdAndDelete(id);
  return data;
};
