import mongoose from "mongoose";

export const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("Connected to database");
  } catch (error) {
    console.log(error);
    throw new Error("Error connecting to database");
  }
};
