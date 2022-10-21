import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
    },

    password: {
      type: String,
    },
    role: {
      type: mongoose.Types.ObjectId,
      ref: "role",
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
export const User = new mongoose.model("user", UserSchema);
