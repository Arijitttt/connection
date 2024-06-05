const express = require('express')
const router = express.Router()
const User = require('../model/userSchema')
require('../db/connection')
router.get('/',(req,resp)=>{
    resp.send("from auth.js")
})
router.post("/api/register",(req,resp)=>{


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

router.delete('/api/delete/:id',(req,resp)=>{
    const userId = req.params.id
    User.findById(userId)
    .then((user)=>{
        if(!user){
            return resp.status(404).json({error:"user id not found"})
        }

        return user.deleteOne()
    })
    .then(()=>{
        resp.status(200).json({message:"user deleted successfully"})
    })
    .catch((err)=>{
        console.log(err);
        resp.status(500).json({error:"Internal Server Error"})
    })
})

module.exports = router