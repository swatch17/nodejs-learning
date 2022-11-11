const http = require('http')
const url = require('url')
const util = require('util')
const fs = require('fs')
const os = require('os')

const hostname = '127.0.0.1';
const port = 3000

const server = http.createServer((req,res)=>{
    const pathname = url.parse(req.url).path
    console.log('pathname',pathname)
    console.log(pathname.substring(1))

    res.setHeader('Content-Type','text/html')

    res.statusCode = 200
    res.end('Hello,World!\n')
});

server.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}/`)
})

console.log(process.cwd())






