const express = require('express')
const dotenv = require('dotenv')

const app = express()

dotenv.config({path:'./.env'})

require('./db/connection')

app.use(express.json())

app.use(require('./router/auth'))

app.get('/',(req,resp)=>{
    resp.send('hello world from app.js')
})


const PORT = process.env.PORT
app.listen(PORT,()=>{
    console.log(`running at ${PORT}`);
})