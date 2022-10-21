import mongoose from "mongoose";

const PatientSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
    },
    documentType: {
      type: String,
    },
    documentNumber: {
      type: Number,
    },
    sex: {
      type: String,
    },
    age: {
      type: Number,
    },
    birthDate: {
      type: Date,
    },
    phone: {
      type: Number,
    },
    location: {
      type: String,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const Patient = new mongoose.model("patient", PatientSchema);
