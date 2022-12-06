import { listPatients, listPatient, updPatient, delPatient } from '../services/patient.js';
import { delUser, findUser } from '../services/user.js';

// los doctores pueden ver los pacientes en el sistema
const getPatients = async (req, res) => {
  try {
    const patients = await listPatients();
    res.status(200).json({
      ok: true,
      patients,
    });
  } catch (error) {
    res.status(400).json({
      hasError: true,
      msg: 'Error in the server',
    });
  }
};

//el doctor puede ver el perfil del paciente
//el paciente puede ver su perfil
const getPatient = async (req, res) => {
  const { id } = req.params;

  try {
    const patient = await listPatient(id);
    res.status(200).json({
      ok: true,
      patient,
    });
  } catch (error) {
    res.status(400).json({
      hasError: true,
      msg: 'Error in the server',
    });
  }
};

//el paciente puede actualizar su perfil
const updatePatient = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const data = await updPatient(id, body);
    res.status(200).json({
      ok: true,
      data,
    });
  } catch (e) {
    res.status(400).send(e);
  }
};

//verificar esta función
const deletePatient = async (req, res) => {
  try {
    const { id } = req.params; //patient
    
    const data = await delPatient(id);
    const user = await delUser(data.user); 
    res.status(200).json({
      ok: true,
      data,
    });
} catch (error) {
    res.status(400).json({
      hasError: true,
      msg: 'Error in the server',
    });
  }
};

export { getPatients, getPatient, updatePatient, deletePatient };
