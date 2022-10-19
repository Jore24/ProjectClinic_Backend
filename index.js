const dbConnect = require('./config/mongo');
const express = require('express');
const cors = require('cors');
const app = express();
const { Exam } = require('./models/exam');
const { Doctor } = require('./models/doctor');
const { Patient } = require('./models/patient');
const { Role } = require('./models/role');
const { User } = require('./models/user');

require("dotenv").config();

app.use(cors())
const port = process.env.PORT || 3000;
// que lea los datos que vienen en formato json
app.use(express.json());
//rutas
//esta parte se puede realizar de otra manera, código largo y repetitivo

app.listen(port, () => {
    console.log('Server on port', port);
});
dbConnect();

/**
 const obtenerPacientes = async (req, res) => {

    const result = await Exam.find().populate('patient', 'user ')
                                    .populate('patient.user', 'email') 
                                    .populate('doctor', 'fullname -_id').sort({ $natural: -1 });

    console.log(result);                                
    console.log(result[0].patient.fullname);
}

obtenerPacientes() 
 */
 





/**
const crearExam = () => {
    Exam.create(
        {
            date: "2000-01-01",
            method: "No doloroso",
            result: "Negativo",
            service: "Domicilio",
            sample: "Muestra",
            patient:  ('634f89f50249ead5f5e10f64'),
            doctor:  ('634f89f50249ead5f5e10f65')
       }
    )
}
crearExam();
 */

 
 
 
 






/**
 const crearPatient = () => {
    Patient.create(
        {
            fullname: "Sebastian Yactayo",
            documentType: "dni",
            documentNumber: 123456789,
            sex: "Masculino",
            age: 30,
            birthDate: "1990-01-01",
            phone: 123456789,
            location: "Chilca",
            user: ('634f88f7688ca15adf6dbe46'),
            
       }
    )
}
crearPatient();
 
















 
  const crearDoctor = () => {
    Doctor.create(
        {
            fullname: "Dr. Perez Perez",
            phone: 5601353,
            specialty: "123456789",
            cmp: "258",
            rne: "258",
            user: ('634f8929c7fd76b4ccdcfe8b'),
            
       }
    )
}
crearDoctor();
 
 */


  



 
 /**
  const crearUser = () => {
    User.create(
        {
            email: "admin@gmail.com",
            password: "5601353",
            role: '634f8815f3a8af4077f3d1cb'
       }
    )
}
crearUser();
  */
 

/**const crearRole = () => {
    Role.create(
        {
            role: "user",
       }
    )
}
crearRole();
 */
