import mongoose from 'mongoose';

const ChatSchema = new mongoose.Schema(
  {
    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    fullname: {
      type: String,
    },

    msg: {
        type: String,
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
export const Chat = new mongoose.model('chat', ChatSchema);
