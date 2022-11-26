import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import htpp from "http";
import { Server as SocketServer } from "socket.io";
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
    origin: "*",
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
    );
    let id = body.id
    console.log('id',id)
    const user = await findUser(id)
    console.log({user})
    
    
  });
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});


server.listen(process.env.PORT);
console.log(`Server on port ${process.env.PORT}`);
