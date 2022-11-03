import { listPatients, listPatient, updPatient, delPatient} from "../services/patient.js";

const getPatients = async (req, res) => {
    try {
        const patients = await listPatients();
        res.status(200).json({
            ok: true,
            patients
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            hasError: true,
            msg: 'Error in the server',
        });
    }
};

const getPatient = async (req, res) => {
    const { id } = req.params;

    try {
        const patient = await listPatient(id);
        res.status(200).json({
            ok: true,
            patient
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            hasError: true,
            msg: 'Error in the server',
        });
    }

};


const updatePatient = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const data= await updPatient(id, body);
        res.status(200).json({
            ok: true,
            data
        });
      } catch (e) {
        res.status(400).send(e);
      }
};


const deletePatient = async (req, res) => {
    try{
        const { id } = req.params;
        const data = await delPatient(id);
        res.status(200).json({
            ok: true,
            data
        });

    }catch{

    }
 };

export { getPatients, getPatient, updatePatient, deletePatient };