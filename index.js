const express = require('express')
const app = express()

app.get('/index.html',(req,res)=>{
    res.sendFile(`${__dirname}/index.html`)
})

app.post('/',(req,res)=>{
    console.log(req)
    res.end()
})

const server = app.listen(1000,()=>{
    const host = server.address().address
    const port = server.address().port
})