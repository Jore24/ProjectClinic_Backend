import { createUser, findUserByEmail } from '../services/user.js';
import { createPatient } from '../services/patient.js';
import { createDoctor } from '../services/doctor.js';
import { tokenSign } from '../utils/createJwt.js';
import { handleHttpError, handleErrorResponse } from '../utils/handleError.js';
import { comparePassword } from '../utils/encrypt.js';

const userPatientRegister = async (req, res) => {
  const { email, password, ...dataPatient } = req.body;

  try {
    let user = await findUserByEmail(email);
    let patient;

    if (user) {
      return res.status(400).json({
        hasError: false,
        msg: 'User already exists',
      });
    }

    user = await createUser(email, password);
    patient = await createPatient(dataPatient, user.id);

    user.patient = patient.id;
    //user.patient = '6359b582f48e7e61e9160e46';
    patient.save();
    user.save();

    res.json({
      hasError: false,
      uid: user.id,
      fullname: patient.fullname,
      msg: 'User created successfully',
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      hasError: true,
      msg: 'Error in the server',
    });
  }
};

const userDoctorRegister = async (req, res) => {
  const { email, password, ...dataDoctor } = req.body;

  try {
    let user = await findUserByEmail(email);
    let doctor;

    if (user) {
      return res.status(400).json({
        hasError: false,
        msg: 'User already exists',
      });
    }

    user = await createUser(email, password);
    doctor = await createDoctor(dataDoctor, user.id);

    user.doctor = doctor.id;
    user.role = 'Doctor';

    doctor.save();
    user.save();

    res.json({
      hasError: false,
      uid: user.id,
      fullname: doctor.fullname,
      msg: 'User created successfully',
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      hasError: true,
      msg: 'Error in the server',
    });
  }
};

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    let user = await findUserByEmail(email);

    if (!user) {
      return handleErrorResponse(res, 'Email not exist', 402);
    }

    let check = comparePassword(password, user.password);

    if (!check) {
      return handleErrorResponse(res, 'Password not correct', 402);
    }

    const tokenJwt = await tokenSign(user);

    res.json({
      token: tokenJwt,
      user: user,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      hasError: true,
      msg: 'Error in the server',
    });
  }
};

const confirmAccount = async (req, res) => {
  const { key } = req.params;

  const user = await findUserByKey(key);
  // key = 12512341

  if (!user) {
    return res.status(400).json({
      hasError: true,
      msg: 'El key ya expiro',
    });
  }

  user.isActive = true;
  user.key = null;
  await user.save();

  return res.json({
    hasError: false,
    msg: 'Cuenta activada correctamente',
  });
};

export { userPatientRegister, userDoctorRegister, userLogin };
