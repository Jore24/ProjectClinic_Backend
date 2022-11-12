import { createUser, findUserByEmail, findUserProfile, findUsers } from '../services/user.js';
import { createPatient } from '../services/patient.js';
import { createDoctor } from '../services/doctor.js';
import { tokenSign } from '../utils/createJwt.js';
import { handleHttpError, handleErrorResponse } from '../utils/handleError.js';
import { comparePassword } from '../utils/encrypt.js';
import { sendEmail } from '../utils/sendEmail.js';

const profileUser = async (req, res) => {
  try {
    const id = req.id;
    const user = await findUserProfile(id);
    console.log(user.role);

    return res.status(200).json({
      hasError: false,
      user,
    });
  } catch (error) {
    return res.status(400).json({
      hasError: true,
      msg: 'Error in the server',
    });
  }
};

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
    patient.save();
    user.save();

    await sendEmail(user.email, patient.fullname, user.key);

    return res.json({
      hasError: false,
      uid: user.id,
      fullname: patient.fullname,
      msg: 'User created successfully',
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
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
    await sendEmail(user.email, doctor.fullname, user.key);
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

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const roleLogged = req.role;
    if (roleLogged !== 'Doctor') {
      return handleErrorResponse(res, 'You are not authorized', 401);
    }
    const user = await findUser(id);
    res.status(200).json({
      hasError: false,
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      hasError: true,
      msg: 'Error in the server',
    });
  }
};
const getUsers = async (req, res) => {
  try {
    const roleLogged = req.role;
    if (roleLogged !== 'Patient') {
      return handleErrorResponse(res, 'You are not authorized', 401);
    }
    const users = await findUsers(); //services
    res.send({ users });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      hasError: true,
      msg: 'Error in the server',
    });
  }
};

export { userPatientRegister, userDoctorRegister, userLogin, getUser, getUsers, profileUser };
