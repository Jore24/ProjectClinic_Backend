import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { dbConnection } from "./database/connection.js";
import { authRouter } from "./routes/auth.js";

const app = express();
dotenv.config();
dbConnection();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRouter);
// Aqui le pones las demas

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
