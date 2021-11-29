const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('welcome to our home page')
    }
    if(req.url === '/about') {
        res.end('welcome to about page')
    }
    res.end(`
    <h1>Page Not Found</h1>
    <p>the page u r looking for is not avalable</p>
    <a href='/'>back</a>
    `)
})

server.listen(5000);