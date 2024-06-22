const mongoose = require("mongoose")

const patientSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    gender: { type: String, required: true },
    contactNumber: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    dateAdmitted: { type: Date },
    dateDischarged: { type: Date }
})
const doctorSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    specialty: { type: String, required: true },
    contactNumber: { type: String, required: true },
    email: { type: String, required: true }
});

const Doctor = mongoose.model("Doctor-detail",doctorSchema)
const Patient = mongoose.model("Patient-detail",patientSchema)


module.exports =  Patient