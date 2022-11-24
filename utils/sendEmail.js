import { createTransport } from "nodemailer";
export const sendEmail = async (email, fullname, key) => {
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
    to: email,
    subject: 'Autenticación de Cuenta',
    text: 'Autenticación de Cuenta',
    html: `<div style="margin: 0 auto; width: 550px; height: 200px">
           <img src="https://res.cloudinary.com/dxo0mspcb/image/upload/v1669247185/head_tknbvy.png" style="width: 550px; height: 200px">
           </div>
           <div style="margin: 0 auto; width: 550px; height: 200px">
           <p>Estimado/a ${fullname}.</p>
           <p>Su cuenta ya se encuentra registrada, solo es necesario verificar el siguiente link para terminar con el proceso de autenticación de su cuenta: <a href="http://localhost:3001/api/auth/confirm/${key}">Autenticación de cuenta</a> </p>
           <p>Si no desea terminar con el proceso puede ignorar este mensaje.</p>
           <br>
           <p>Atentamente,</p>
           <p>Laboratorio Clínico Hernández.</p>
           </div>
           <br>
           <div style="margin: 0 auto; width: 550px; height: 200px">
           <img src="https://res.cloudinary.com/dxo0mspcb/image/upload/v1669247814/end_nhtgmf.png" style="width: 550px; height: 30px">
           </div>`,
  });
  //console.log('correo enviado');
};
