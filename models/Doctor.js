import mongoose from 'mongoose';

const DoctorSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },

    phone: {
      type: Number,
      required: true,
    },

    speciality: {
      type: String,
      required: true,
    },

    cmp: {
      type: String,
      required: true,
    },

    rne: {
      type: String,
      required: true,
    },

    user: {
      type: mongoose.Types.ObjectId,
      ref: 'user',
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
export const Doctor = new mongoose.model('doctor', DoctorSchema);
