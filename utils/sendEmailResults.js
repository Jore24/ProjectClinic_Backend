import { createTransport } from 'nodemailer';
import { fecha } from './generateTime.js';

//let timeHoy = fecha();
const tiempoTranscurrido = Date.now();
const hoy = new Date(tiempoTranscurrido);
const dateHoy = hoy.toLocaleDateString();
const timeHoy = dateHoy.split('/').join('-');
console.log(timeHoy);
export const sendEmailResult = async (exam) => {
  const { patient, service } = exam;
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
    to: 'jore24@autonoma.edu.pe', //colocar el email del patient
    subject: 'Check your CLINIC RESULTS',
    text: 'Check your CLINIC account',
    html: `<p>Hello: ${service}, check your RESULTS IN THE CLINIC.</p>
            <p>Te dejamos el PDF de los resultados</p>
        `,
    attachments: [
      {
        //enviar pdf
        filename: +timeHoy + '_' + patient + '.pdf',
        path: './public/PDF/'+timeHoy + '_'+ patient+'.pdf',
        contentType: 'application/pdf',
      },
    ],
  });
  //console.log('correo enviado');
};
