import { createNewUser, findUserByEmail } from '../services/user.js';
import { createNewPatient } from '../services/patient.js';

const userRegister = async (req, res) => {
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

    user = await createNewUser(email, password);
    patient = await createNewPatient(dataPatient, user.id);

    res.json({
      hasError: false,
      uid: user.id,
      fullname: patient.fullname,
      msg: 'User created successfully',
    });
  } catch (error) {
    res.status(400).json({
      hasError: true,
      msg: 'Error in the server',
    });
  }
};

const userLogin = async (req, res) => {
  const { email, password } = req.body;
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

export { userRegister, userLogin };
