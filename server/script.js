const express = require('express')
const app = express()
app.get('/',function(req,res){
    res.send('hello world')
})
const port = 3000
app.listen(port,function(){
    console.log(`server is running on ${port}`);
})


const details = [
    {
        id:1,
        name:'Arijit Bhattacharya',
        mail : "abhattacharya030@gmail.com"
    },
    {
        id:2,
        name:'Sayan Pal',
        mail : "abhattacharya"
    },
    {
        id:3,
        name:'Anubhab Pal',
        mail : "abhattacharya"
    },
    {
        id:4,
        name:'Ashmita',
        mail : "abhattacharya"
    },

]
let details_of_users = details.map(function(data){
    return data
})

app.get('/api/details',(req,resp)=>{
    resp.send(details_of_users)
})