const mongoose = require('mongoose')

const PatientSchema = new mongoose.Schema(
    {
        fullname: {
            type: String
        },
        document_type: {
            type: String
        },
        number_document: {
            type: Number
        },
        sex: {
            type: String
        },
        age: {
            type: Number
        },
        birth_date: {
            type: Date
        },
        cell_phone: {
            type: Number
        },
        location: {
            type: String
        },
        id_user: {
            type: mongoose.Types.ObjectId
        }

    }
);

const Patient = new mongoose.model('patient', PatientSchema);
module.exports = { Patient }