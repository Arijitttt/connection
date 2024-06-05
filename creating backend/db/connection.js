const mongoose = require('mongoose')

const DB = process.env.DATABASE_URL

mongoose.connect(DB)
.then(()=>{
    console.log('mongodb connection successful');
})
.catch((err)=>{
    console.log(err);
})