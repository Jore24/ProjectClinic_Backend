import mongoose from "mongoose";

const ExamSchema = new mongoose.Schema(
  {
    date: {
      type: Date,
    },
    method: {
      type: String,
    },
    result: {
      type: String,
    },
    service: {
      type: String,
    },
    sample: {
      type: String,
    },
    patient: {
      type: mongoose.Types.ObjectId,
      ref: "patient",
    },
    doctor: {
      type: mongoose.Types.ObjectId,
      ref: "doctor",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
export const Exam = new mongoose.model("exam", ExamSchema);
