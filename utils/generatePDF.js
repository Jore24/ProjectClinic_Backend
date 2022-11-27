import PDFDocument from 'pdfkit';
import fs from 'fs';
import { findPatient } from '../services/patient.js';
import { findUserDoctor } from '../services/user.js';
import { fecha } from './generateTime.js';
import { get } from 'http';

const timeHoy = fecha();


export const exportPDF = async (data) => {
  const { patient, doctor } = data;
  const getPatient = await findPatient(patient);
  const getDoctor = await findUserDoctor(doctor);
  //console.log(getPatient)
  //console.log(getDoctor)
  //console.log(data)
  const doc = new PDFDocument();

  // Saving the pdf file in root directory.
  doc.pipe(fs.createWriteStream('public/PDF/' + timeHoy + '_' + patient +  '.pdf'));

  // Adding an image in the pdf.
  try {
    doc.image('./public/img/pdf.png', 0, 15, { width: 612, height: 765 });
  } catch (error) {
    console.log(error);
  };


  // Primer cuadro
  doc.fontSize(11).text('Paciente: '+ getPatient.fullname, 20, 260);
  doc.fontSize(11).text('DNI: '+ getPatient.documentNumber, 20, 276);
  doc.fontSize(11).text('Sexo: ' +getPatient.sex, 20, 292);
  doc.fontSize(11).text('Médico: '+ getDoctor.doctor.fullname, 20, 308);
  doc.fontSize(11).text('Servicio: '+data.service, 20, 324);

  doc.fontSize(11).text('Historia: ', 190, 276);
  doc.fontSize(11).text('Edad: '+getPatient.age, 190, 292);
  //doc.fontSize(11).text('F.N.: '+getPatient.birthDate, 190, 308);(falta hacer el formato de fecha)

  doc.fontSize(11).text('Prioridad: 1', 325, 260);
  doc.fontSize(11).text('Pasaporte: SI', 325, 276);
  doc.fontSize(11).text('Cliente: PARTICULAR', 325, 292);
  doc.fontSize(11).text('Localidad: '+getPatient.location, 325, 308);
  //doc.fontSize(11).text('Fecha de Toma de Muestra: '+data.date, 325, 324,);(falta hacer el formato de fecha)

  //Segundo cuadro
  doc.fontSize(10).text('EXAMENES REALIZADOS', 72, 360);
  doc.fontSize(10).text('CORONAVIRUS SARS COVI-2 PRUEBA ANTIGENO', 15, 372);
  doc.fontSize(10).text('(Metódo: '+data.method+')', 50, 385);
  doc.fontSize(10).text('TIPO DE MUESTRA: '+data.sample, 20, 446);

  doc.fontSize(10).text('RESULTADO ACTUAL', 265, 360);
  doc.fontSize(10).text(data.result, 286, 455);

  doc.fontSize(10).text('VALOR REFERENCIAL', 405, 360);
  doc.fontSize(10).text('*Esta prueba es cualitativa,detecta la presencia o ausencia de antigeno del virus SARS-CoV-2 conocido como (COVID-19). Un resultado Positivo indica alta posibilidad de estar en la fase ACTIVA de la enfermedad. La interprentaciòn del resultado debe hacerla el mèdico especialista basada en la informaciòn clìnica del paciente ', 385, 380);

  //Tercer cuadro 
  doc.fontSize(11).text('VALIDADO POR:', 20, 565);
  
  doc.fontSize(11).text('Dra. Lady G. Hernández Huerta', 380, 640);
  doc.fontSize(11).text('Especialista en patología clínica', 379, 655);
  doc.fontSize(11).text('CMP: 65313 RNE: 34984', 393, 670);

  doc.end();
};

