import { Exam } from "../models/index.js";
export const addExam = async (idDoctor, idPatient, data) => {
    const exam = new Exam(data);
    exam.doctor = idDoctor;
    exam.patient = idPatient;
    exam.save();
    return exam;

}