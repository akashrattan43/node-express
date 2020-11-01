const http = require('http');
const path = require('path')
const fs = require('fs')

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'Text/html' })
        res.end('<h1>HOMEPAGE</h1>')
    }
})

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`SERVER IS RUNNING ON PORT ${PORT}`))