import { createTransport } from 'nodemailer';
import { fecha } from './generateTime.js';
import { findPatient } from '../services/patient.js';
import { findUser } from '../services/user.js';

const timeHoy = fecha();


export const sendEmailResult = async (idPatient) => {
  const getPatient = await findPatient(idPatient);
  const getUser = await findUser(getPatient.user)


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
    to: getUser.email,  //colocar el email del patient getPatient.email <-------------------
    subject: 'RESULTADOS DEL LABORATORIO CLÍNICO HERNANDEZ',
    text: 'Resultados',
    html: ` <p>Hola ${getPatient.fullname}, chequea tus RESULTADOS DEL LABORATORIO CLÍNICO.</p>
            <p>Te dejamos el PDF de los resultados.</p>
        ` ,
    attachments: [
      {
        //enviar pdf
        filename: timeHoy + '_' + idPatient + '.pdf',
        path: './public/PDF/'+timeHoy + '_'+ idPatient+'.pdf',
        contentType: 'application/pdf',
      },
    ],
  });

  await transporter.sendMail({
    from: 'CLINIC',
    to: 'correo@example', // colocar el correo de un doctor
    subject: 'RESULTADO DEL PACIENTE '+getPatient.fullname,
    text: 'Resultados',
    html: `<p>Aquí puede verificar los resultados del paciente ${getPatient.fullname}.</p>
            <p>PDF de los resultados.</p>
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
  // console.log('Email sent');
};
