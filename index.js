import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import htpp from "http";
import { Server as SocketServer } from "socket.io";
import { dbConnection } from './database/connection.js';
import { authRouter } from './routes/auth.js';
import { Chat } from './models/Chat.js';
import { findUser } from './services/user.js';
//import { PORT } from "./config.js"; //ya tenemos nuestro port en el process.env.PORT

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
// Aqui le pones las demas

io.on("connection", async (socket) => {
  
  console.log("a user connected");
  //console.log(socket.id);
  socket.on("message", async (body) => {
    socket.broadcast.emit("message", {
      body: body.body,
      from: body.from,
      id: body.id 
    },
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
