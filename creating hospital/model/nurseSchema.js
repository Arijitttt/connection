const mongoose = require('mongoose')
const nurseSchema = mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    department: { type: String, required: true },
    contactNumber: { type: String, required: true },
    email: { type: String, required: true }
})
const Nurse = mongoose.model('nurse-details',nurseSchema)
module.exports = Nurse