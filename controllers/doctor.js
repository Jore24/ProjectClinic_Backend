import { listDoctors, listDoctor, updDoctor, delDoctor } from '../services/doctor.js';
import { handleErrorResponse } from '../utils/handleError.js';
//todos pueden ver los doctores en el sistema
const getDoctors = async (req, res) => {
  try {
    const doctors = await listDoctors();
    res.status(200).json({
      ok: true,
      doctors,
    });
  } catch (error) {
    res.status(400).json({
      hasError: true,
      msg: 'Error in the server',
    });
  }
};
//el doctor puede ver su perfil
//el patient puede ver el perfil del doctor
const getDoctor = async (req, res) => {
  try {
    const { id } = req.params;
    const doctor = await listDoctor(id);
    res.status(200).json({
      ok: true,
      doctor,
    });
  } catch (error) {
    res.status(400).json({
      hasError: true,
      msg: 'Error in the server',
    });
  }
};
//el doctor puede actualizar su perfil
const updateDoctor = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const roleLogged = req.role;

    if (roleLogged !== 'Doctor') {
      return handleErrorResponse(res, 'You are not authorized', 401);
    }
    
    const data = await updDoctor(id, body);
    res.status(200).json({
      ok: true,
      data,
    });
  } catch (e) {
    res.status(400).json({
      hasError: true,
      msg: 'Error in the server',
    });
  }
};
//verificar esta función
const deleteDoctor = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await delDoctor(id);
    res.status(200).json({
      ok: true,
      data,
    });
  } catch (e) {
    res.status(400).send(e);
  }
};

export { getDoctors, getDoctor, updateDoctor, deleteDoctor };
