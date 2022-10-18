const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(

    {
        email: {
            type: String

        },

        password: {
            type: String

        },
        role: {
            type: mongoose.Types.ObjectId
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);
const User = new mongoose.model('user', UserSchema);
module.exports = { User }