import { addExam } from '../services/exam.js';
import { findUser } from '../services/user.js';
import { exportPDF } from '../utils/generatePDF.js';
import { sendEmailResult } from '../utils/sendEmailResults.js';

const registerExam = async (req, res) => {
  const idDoctor = req.id;
  const idPatient = req.params.id;
  const { ...dataPatient } = req.body;

  try {
    const user = await findUser(idDoctor);

    if (user.role !== 'Doctor') {
      return res.status(401).json({ message: 'You are not authorized' });
    }
    
    const add = await addExam(idDoctor, idPatient, dataPatient);
    exportPDF(add)
    sendEmailResult(add)

    return res.json({
      hasError: false,
      msg: 'Exam created successfully',
      data: add,
    });
  } catch (error) {
    return res.status(400).json({
      hasError: true,
      msg: 'Error in the server',
    });
  }

  /**
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
  
      //await sendEmail(user.email, patient.fullname, user.key);
  
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
   */
};
export { registerExam };
