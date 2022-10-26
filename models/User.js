import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      enum: {
        values: ['Patient', 'Doctor'],
        message: 'Role is not valid',
      },
      default: 'Patient',
    },

    isActive: {
      type: Boolean,
      default: false,
    },

    key: {
      type: String,
      default: 'asdasd',
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
