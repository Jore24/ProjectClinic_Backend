import { createTransport } from 'nodemailer';
import { fecha } from './generateTime.js';
import { findPatient } from '../services/patient.js';

const timeHoy = fecha();


export const sendEmailResult = async (idPatient) => {
  const getPatient = await findPatient(idPatient);

  const transporter = createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  await transporter.sendMail({
    from: 'CLINIC',
    to: 'jore24@autonoma.edu.pe', //colocar el email del patient getPatient.email <-------------------
    subject: 'Check your CLINIC RESULTS',
    text: 'Results',
    html: `<p>Hello: ${getPatient.fullname}, check your RESULTS IN THE CLINIC.</p>
            <p>Te dejamos el PDF de los resultados</p>
        `,
    attachments: [
      {
        //enviar pdf
        filename: timeHoy + '_' + idPatient + '.pdf',
        path: './public/PDF/'+timeHoy + '_'+ idPatient+'.pdf',
        contentType: 'application/pdf',
      },
    ],
  });
  //console.log('correo enviado');
};
