import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import htpp from 'http';
import { Server as SocketServer } from 'socket.io';
import { dbConnection } from './database/connection.js';
import { authRouter } from './routes/auth.js';
import { Chat } from './models/Chat.js';
import { findUser } from './services/user.js';
import { patientRouter } from './routes/patient.js';
import { doctorRouter } from './routes/doctor.js';
import { examRouter } from './routes/exam.js';
import { exportPDF } from './utils/generatePDF.js';

const app = express();
const server = htpp.createServer(app);
const io = new SocketServer(server, {
  cors: {
    origin: '*',
  },
});
dotenv.config();
dbConnection();

app.use(cors());
app.use(express.json());



app.use('/api/auth', authRouter);
app.use('/api/patient', patientRouter);
app.use('/api/doctor', doctorRouter);
app.use('/api/exam', examRouter);

<<<<<<< HEAD
io.on('connection', async socket => {
  console.log('a user connected');
  //console.log(socket.id);
  socket.on('message', async body => {
    socket.broadcast.emit(
      'message',
      {
        body: body.body,
        from: body.from,
        id: body.id,
      },
      await new Chat({
        msg: body.body,
        fullname: body.from,
        user: body.id,
      }).save()
=======
//websocket refactoring
io.on("connection", async (socket) => {
  
  console.log("a user connected");
  //console.log(socket.id);
  socket.on("message", async (body) => {
    socket.broadcast.emit("message", {
      body: body.body,
      from: body.from,
      id: body.id 
    },
    //services
    await new Chat({
      msg: body.body,
      fullname: body.from,
      user: body.id,
    }).save()
>>>>>>> main
    );
    let id = body.id;
    console.log('id', id);
    const user = await findUser(id);
    console.log({ user });
  });
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(process.env.PORT);
console.log(`Server on port ${process.env.PORT}`);

// Importing modules
import PDFDocument from 'pdfkit';
import fs from 'fs';

// Create a document
const doc = new PDFDocument();

// Saving the pdf file in root directory.
doc.pipe(fs.createWriteStream('example.pdf'));

// Adding functionality
doc.fontSize(27).text('This the article for GeeksforGeeks', 100, 100);

// Adding an image in the pdf.
doc.image('public/waos.jpg', {
  fit: [300, 300],
  align: 'center',
  valign: 'center',
});

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
