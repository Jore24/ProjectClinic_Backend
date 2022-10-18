const dbConnect = require('./config/mongo');
const express = require('express');
const cors = require('cors');
const app = express();
const { Exam } = require('./models/exam');
const { Doctor } = require('./models/doctor');
const { Patient } = require('./models/patient');
const { Rol } = require('./models/rol');
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