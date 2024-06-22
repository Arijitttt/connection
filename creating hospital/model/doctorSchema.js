const mongoose = require("mongoose")
const doctorSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    specialty: { type: String, required: true },
    contactNumber: { type: String, required: true },
    email: { type: String, required: true },
})
const Doctor = mongoose.model('Doctor-details',doctorSchema)
module.exports = Doctor