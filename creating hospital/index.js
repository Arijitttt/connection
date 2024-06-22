const express = require('express')
const dotenv = require('dotenv')
const app= express()

dotenv.config({path:'./.env'})

app.use(express.json())

require('../creating hospital/database/connection')

const Patient =require('../creating hospital/model/patientSchema')
const Doctor = require('../creating hospital/model/doctorSchema')
const Nurse = require('../creating hospital/model/nurseSchema')
//const Doctor = require('../creating hospital/model/patientSchema')

app.get('/',(req,resp)=>{
    resp.send("hello")
})
app.post('/hospital/patient',  (req, res) => {
     const { firstName, lastName, dateOfBirth, gender, contactNumber, email, address, dateAdmitted, dateDischarged } = req.body;
 //res.status(201).json({message:"working successfully"})

//     console.log(req.body);
    //add the values in mongodb

    const patient = new Patient({firstName, lastName, dateOfBirth, gender, contactNumber, email, address, dateAdmitted, dateDischarged})

    patient.save()
        .then(() => {
            res.status(201).json({ message: "Patient added successfully" })
        })
        .catch((err) => {
            res.status(500).json({ error: "Failed to add patient" })
        })
});

// app.post('/hospital/doctors',(req,res)=>{
//     // const {firstName,lastName,specialty,contactNumber,email}=req.body
//     // console.log(firstName,lastName);
//     // res.send({message:"established"})

//     const doctor = new Doctor({firstName,lastName,specialty,contactNumber,email})
//     doctor.save()
//     .then(()=>{
//         res.status(201).json({message:"doctors added"})
//     })
//     .catch((err)=>{
//         console.log(err);
//     })
// })
app.post('/hospital/doctors',(req,resp)=>{
    const {firstName,lastName,specialty,contactNumber,email}=req.body
    // console.log(req.body);
    // resp.status(201).json({message:"working perfectly"})

    const doctor = new Doctor({
        firstName,lastName,specialty,contactNumber,email
    })
    doctor.save()
    .then(()=>{
        resp.status(201).json({message:"doctors details  added"})
        console.log(req.body);
    })
    .catch((err)=>{

        resp.status(500).json({ error: "Failed to add doctors details" })
    })
})

app.post('/hospital/nurses',(req,resp)=>{
    const {firstName,lastName,department,contactNumber,email}=req.body
    // console.log(req.body);
    // resp.status(201).json({message:"working"})

    const nurse = new Nurse({
        firstName,lastName,department,contactNumber,email
    })
    nurse.save()
    .then(()=>{
        resp.status(201).json({message:"nurse details added"})
    })
    .catch((err)=>{
        console.log(err);
        resp.status(500).json({ error: "Failed to add nurse details" })
    })
})

const port = process.env.PORT
app.listen(port,()=>{
    console.log(`server is running on ${port}`);
})