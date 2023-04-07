const express =require('express');
const app =express()
require('dotenv').config()

const PORT = process.env.PORT || 3000

app.get('/api/data',(req,res)=>{

    const data = {title : "project" , description: "project description"}

    res.json(data)
})

app.listen(PORT,()=>{
    console.log(`listening on ${PORT}`)
})