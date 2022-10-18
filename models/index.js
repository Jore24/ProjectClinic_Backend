const mongoose = require('mongoose');
const dotenv = require("dotenv");
/**
 * const {Teacher} = require('./modelProfesor');
const {Alumno} = require('./modelAlumno');
const {Curso} = require('./modelCurso');
const {Role} = require('./rol');
 */
const { Patient } = require('./patient');
const { Rol } = require('./rol');
const { User } = require('./user');
const { Doctor } = require('./doctor');
const { Exam } = require('./exam');
dotenv.config();
const dbConnect = () => {
    const DB_URI = process.env.DB_URI;
    mongoose.connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,

    },
        (err, res) => {
            if (!err) {
                console.log('MongoDB Connection Succeeded.');
            } else {
                console.log('Error in DB connection : ' + err);
            }
        }
    );
};
dbConnect();



const obtenerPacientes = async (req, res) => {

    const result = await Exam.find().populate('id_patient', 'fullname document_type')
                                    .populate('id_doctor', 'fullname ').sort({ $natural: -1 });
    console.log(result[0].id_patient.fullname);
}

obtenerPacientes()





/**
 const obtenerPacienteYDoctorDelExamen = async () => {
    const resultado = await Exam.aggregate(
        [
            {
                $lookup:
                {
                    from: "patients",
                    localField: "id_patient", //de rol se toma el nombre
                    foreignField: "_id",
                    as: "exam_patient"
                }
            },
            { $unwind: "$exam_patient" },
            {
                $lookup:
                {
                    from: "doctors",
                    localField: "id_doctor", //de rol se toma el nombre
                    foreignField: "_id",
                    as: "exam_doctor"
                }
            },
            { $unwind: "$exam_doctor" },
            // { $match: { userConRol: "admin" } }
        ]
    )
    console.log('** RESULTADOS **', JSON.stringify(resultado));
}
obtenerPacienteYDoctorDelExamen()
 */







/**
 const crearExam = () => {
    Exam.create(
        {
            date: "1990-01-01",
            method: "Doloroso",
            result: "Positivo",
            service: "Local",
            sample: "Muestra",
            id_patient:  mongoose.Types.ObjectId('634e5a76f715ba5b9f3cc583'),
            id_doctor:  mongoose.Types.ObjectId('634e593fed62f6e4befbcde8')
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
            document_type: "dni",
            number_document: 123456789,
            sex: "Masculino",
            age: 30,
            birth_date: "1990-01-01",
            cell_phone: 123456789,
            location: "Chilca",
            id_user: mongoose.Types.ObjectId('634e5a2eab5c64d7213a82de'),
            
       }
    )
}
crearPatient();
 */















/**
 *  
const crearDoctor = () => {
    Doctor.create(
        {
            fullname: "Dr. Perez Perez",
            cell_phone: 5601353,
            specialty: "123456789",
            cmp: "258",
            rne: "258",
            id_user: mongoose.Types.ObjectId('634e5400878a306c00c9f850'),
            
       }
    )
}
crearDoctor();
*/

/**
 * 
 
 const crearUser = () => {
    User.create(
        {
            email: "patient@gmail.com",
            password: "5601353",
            role: mongoose.Types.ObjectId('634e535cbb13ef0dc6dcfceb')
       }
    )
}
crearUser();
*/

/**
 * 
 * const userRol = async () => {
    const resultado = await User.aggregate(
        [
            {
                $lookup:
                {
                    from: "roles",
                    localField: "role", //de rol se toma el nombre
                    foreignField: "_id",
                    as: "userConRol"
                }
            },
                 { $unwind: "$userConRol" },
                // { $match: { userConRol: "admin" } }
        ]
    )
    console.log('** RESULTADOS **', resultado);
}
userRol()

 */














/**
 * 
 
const crearAlumno =  () => {
    Alumno.insertMany( [
        {
            nombre: 'Bri ',
            edad: 29,
            cellphone: ['12121233322', '1121232323231212121','233445454545']
        },
        {
            nombre: 'Diana',
            edad: 77,
            cellphone: ['12121233322', '233445454545','1121232323231212121']
        },
        {
            nombre: 'Yactayo',
            edad: 29,
            cellphone: ['12121233322', '1121232323231212121','233445454545']
        },
        {
            nombre: 'Sebastian',
            edad: 29,
            cellphone: ['233445454545', '1121232323231212121','1121232323231212121']
        },
        {
            nombre: 'Ore',
            edad: 33,
            cellphone: ['233445454545','1121232323231212121']
        },
        {
            nombre: 'Armando',
            edad: 29,
            cellphone: ['12121233322', '1121232323231212121','987612538']
        },
        {
            nombre: 'Diana',
            edad: 11,
            cellphone: [ '1121232323231212121','1121232323231212121']
        },
        {
            nombre: 'Cesar',
            edad: 23,
            cellphone: ['1121232323231212121']
        },
        {
            nombre: 'Cristian',
            edad: 29,
            cellphone: ['1121232323231212121','1121232323231212121']
        },
        {
            nombre: 'Natali',
            edad: 29,
            cellphone: ['987612538','1121232323231212121']
        },
        {
            nombre: 'Vania',
            edad: 55,
            cellphone: [ '987612538','1121232323231212121']
        },
        {
            nombre: 'Loquillos',
            edad: 22,
            cellphone: [ '22322323232','4343434343']
        }
        ,
        {
            nombre: 'Salah',
            edad: 87,
            cellphone: ['1121232323231212121','1121232323231212121']
        }
        ,
        {
            nombre: 'Betson',
            edad: 29,
            cellphone: ['1123323433','1121232323231212121']
        },
        {
            nombre: 'Yeff',
            edad: 11,
            cellphone: ['1121232323231212121','1121232323231212121']
        },
        {
            nombre: 'Xiomara',
            edad: 19,
            cellphone: ['1121232323231212121']
        },
        {
            nombre: 'Zamir',
            edad: 29,
            cellphone: ['1121232323231212121']
        },
        {
            nombre: 'Gemelo',
            edad: 1,
            cellphone: ['1121232323231212121']
        },
        {
            nombre: 'Alejandro',
            edad: 1,
            cellphone: ['533434343','1121232323231212121']
        },
        {
            nombre: 'Joel',
            edad: 13,
            cellphone: ['12121233322', '11212121']
        },
        {
            nombre: 'Pimpiolo',
            edad: 16,
            cellphone: ['1121232323231212121']
        }
    ]
    )
}

//crearAlumno()
const crearCursos =  () => {
    Curso.insertMany( [
        {
            nombre: 'Programación',
        
        },
        {
            nombre: 'Ing Software',
            
        },
        {
            nombre: 'Ingles',
            
        }
    ]
    )
}

const crearTeachers =  () => {
    Teacher.insertMany( [
        {
            nombre: 'Pretell',
            cargo: 'Directivo',
            cursos: ['Ingles', 'Ing Software']
        
        },
        {
            nombre: 'Ibañez',
            cargo: 'Directivo',
            cursos: ['Ing Software']
            
        },
        {
            nombre: 'Orlando',
            cargo: 'Directivo',
            cursos: ['Programación']
            
        }
    ]
    )
}
//crearTeachers()


//consuta de todos los alumnos
const listarAlumnos = async () => {
    const result = await Alumno.find();
    console.log(result);
   
}
listarAlumnos()


/**
 * 
 * 
 * const crearPublicacion =  () => {
    const listPost = [
        {
            title: 'Post 1',
            description: 'Description 1',
            author: mongoose.Types.ObjectId('6349ae41e9108c10d322c0f1')
        },
        {
            title: 'Post 2',
            description: 'Description 1',
            author: mongoose.Types.ObjectId('6349ae41e9108c10d322c0f1')
        }
    ]
    
    Publicaciones.insertMany(listPost)
}

const buscarporId = async () => {
    const user = await Usuarios.findById('6349ae41e9108c10d322c0f1');
    console.log(user);
    console.log(user._id);
    console.log(user.name);
}
//buscarporId()

const BuscarPorCoincidenciaUno = async () => {
    const post = await Publicaciones.findOne({title: {$eq: 'Post 1'}});
    console.log(post);
    console.log(post._id);
    console.log(post.author);
}
//BuscarPorCoincidenciaUno()

const Buscartodo = async () => {
    const post = await Publicaciones.find();
    console.log(post);
}
//Buscartodo()
//crearPublicacion()

//operators, find, findeOneAndUpdate
 * 
 * 
 * 
 */
