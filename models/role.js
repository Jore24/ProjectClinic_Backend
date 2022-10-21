import mongoose from "mongoose";

const RoleSchema = new mongoose.Schema(
  {
    role: String,
  },
  {
    versionKey: false,
  }
);

export const Role = new mongoose.model("role", RoleSchema);
