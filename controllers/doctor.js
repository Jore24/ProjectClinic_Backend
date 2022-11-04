import { listDoctors, listDoctor, updDoctor, delDoctor } from "../services/doctor.js";

const getDoctors = async (req, res) => {
    try {
        const doctors = await listDoctors();
        res.status(200).json({
            ok: true,
            doctors
        });
    } catch (error) {
        res.status(400).json({
            hasError: true,
            msg: 'Error in the server',
        });
    }
}

const getDoctor = async (req, res) => {
    try {
        const { id } = req.params;
        const doctor = await listDoctor(id);
        res.status(200).json({
            ok: true,
            doctor
        });
    } catch (error) {
        res.status(400).json({
            hasError: true,
            msg: 'Error in the server',
        });
    }
}

const updateDoctor = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const data= await updDoctor(id, body);
        res.status(200).json({
            ok: true,
            data
        });
        } catch (e) {
        res.status(400).send(e);
        }
}

const deleteDoctor = async (req, res) => {
    try{
        const { id } = req.params;
        const data = await delDoctor(id);
        res.status(200).json({
            ok: true,
            data
        });
    }
    catch (e) {
        res.status(400).send(e);
    }
}

export { getDoctors, getDoctor, updateDoctor, deleteDoctor };