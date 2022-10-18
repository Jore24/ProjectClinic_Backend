const mongoose = require('mongoose')

const DoctorSchema = new mongoose.Schema(
    {
        fullname: {
            type: String
        },
        cell_phone: {
            type: Number
        },

        specialty: {
            type: String
        },
        cmp: {
            type: String
        },
        rne: {
            type: String
        },
        id_user: {
            type: mongoose.Types.ObjectId
        },

    }

);
const Doctor = new mongoose.model('doctor', DoctorSchema);
module.exports = { Doctor }