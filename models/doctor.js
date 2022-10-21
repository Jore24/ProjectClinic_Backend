import mongoose from "mongoose";

const DoctorSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
    },
    cell_phone: {
      type: Number,
    },

    specialty: {
      type: String,
    },
    cmp: {
      type: String,
    },
    rne: {
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
export const Doctor = new mongoose.model("doctor", DoctorSchema);
