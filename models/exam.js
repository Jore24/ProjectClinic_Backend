const mongoose = require('mongoose')

const ExamSchema = new mongoose.Schema(
    {
        date: {
            type: Date
        },
        method:{
            type: String
        },
        result:{
            type: String
        },
        service: {
            type: String
        },
        sample: {
            type: String
        },
        id_patient: {
            type: mongoose.Types.ObjectId,
            ref: 'patient'
        },
        id_doctor: {
            type: mongoose.Types.ObjectId,
            ref: 'doctor'
        },
    }
);
const Exam = new mongoose.model('exam', ExamSchema);
module.exports = { Exam }