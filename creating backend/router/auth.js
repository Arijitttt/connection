const express = require('express')
const router = express.Router()
const User = require('../model/userSchema')
require('../db/connection')
router.get('/',(req,resp)=>{
    resp.send("from auth.js")
})
router.post("/register",(req,resp)=>{


const {name , email, phone, work,password,cpassword} = req.body

if(!name || !email || !phone || !work || !password || !cpassword){
    return resp.status(422).json({error:"plz fill the field"})
}

User.findOne({email:email})
.then((userExist)=>{
    if(userExist){
        return resp.status(422).json({error:'user Already exist'})
    }

    const user = new User({name , email, phone, work,password,cpassword})

    user.save()
    .then(()=>{
        resp.status(201).json({message:"User registered Successfully"})
        console.log('User registered Successfully');
    })
    .catch((err)=>{
        resp.status(422).json({error:"problem while registering"})
    })

})
.catch((err)=>{console.log(err);})





})
module.exports = router