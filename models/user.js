import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
    },

    password: {
      type: String,
    },

    role: {
      type: String,
      enum: {
        values: ['Patient', 'Doctor'],
        message: 'Role is not valid',
      },
    },

    isActive: {
      type: Boolean,
      default: false,
    },

    key: {
      type: String,
      default: "asdasd",
    },

    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'patient',
    },

    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'doctor',
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
export const User = new mongoose.model('user', UserSchema);
