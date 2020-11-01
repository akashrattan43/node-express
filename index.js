const http = require('http');
const path = require('path')
const fs = require('fs');
const { extname } = require('path');

const server = http.createServer((req, res) => {
    // if (req.url === '/') {
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
    //         if (err) throw err;
    //         res.writeHead(200, { 'Content-Type': 'Text/html' })
    //         res.end(content)
    //     })
    // }

    // if (req.url === '/api/users') {
    //     const users = [
    //         {name: 'bob smith', age: 40},
    //         {name: 'carol so', age: 55},
    //         {name: 'razer', age: 8}
    //     ]
    //     res.writeHead(200, { 'Content-Type': 'application/json' })
    //     res.end(JSON.stringify(users))
    // }

    //Build file path

    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url)
    let exname = path.extname(filePath)

    //initial content type 
    let contentType = 'text/html'

    // check ext and set content type 
    // switch(extname)
})

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`SERVER IS RUNNING ON PORT ${PORT}`))