const mongoose = require('mongoose')

const RoleSchema = new mongoose.Schema(
    {
        role: String
    },
    {
        versionKey: false,
    }
 );
 
const Role = new mongoose.model('role', RoleSchema);
module.exports = { Role }