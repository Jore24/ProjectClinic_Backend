import PDFDocument from 'pdfkit';
import fs from 'fs';

//crear un services para hacer populate y tener todos los datos del doctor y paciente

const tiempoTranscurrido = Date.now();
const hoy = new Date(tiempoTranscurrido); 
const dateHoy = hoy.toLocaleDateString();
const timeHoy = dateHoy.split('/').join('-');


export const exportPDF = (data) => {
  const {result, service, patient} = data;


  const doc = new PDFDocument();

  // Saving the pdf file in root directory.
  //doc.pipe(fs.createWriteStream(timeHoy + '_'+ patient+'.pdf'));
  doc.pipe(fs. createWriteStream('public/PDF/'+timeHoy + '_'+ patient+'.pdf'));

  // Adding functionality
  doc.fontSize(27).text('Resultados de tu exam de COVID-19' +patient, {
    align: 'center',
    });
  doc.fontSize(20).text('Datos del paciente', {
    align: 'center',
    });
  doc.fontSize(15).text('Nombre: ' + patient, {
    align: 'center',
    });
  doc.fontSize(15).text('Fecha de nacimiento: ' + patient, {
    align: 'center',
    });


  // Adding an image in the pdf.

  try {
    doc.image('./public/img/covid.png');
  } catch (error) {
    console.log(error);
  }

  doc.addPage().fontSize(15).text('Generating PDF with the help of pdfkit', 100, 100);

  // Apply some transforms and render an SVG path with the
  // 'even-odd' fill rule
  doc
    .scale(0.6)
    .translate(470, -380)
    .path('M 250,75 L 323,301 131,161 369,161 177,301 z')
    .fill('red', 'even-odd')
    .restore();

  // Add some text with annotations
  doc
    .addPage()
    .fillColor('blue')
    .text('The link for GeeksforGeeks website', 100, 100)

    .link(100, 100, 160, 27, 'https://www.geeksforgeeks.org/');

  // Finalize PDF file
  doc.end();
};
// Create a document
