const express =require('express');
const app =express()
require('dotenv').config()

const PORT = process.env.PORT || 3000

app.get('/',(req,res)=>{

    const data = {title : "project" , description: "project description"}

    res.send(data)
})

app.listen(PORT,()=>{
    console.log(`listening on ${PORT}`)
})