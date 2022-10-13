let http = require('http')
const { text } = require('stream/consumers')

// server
http.createServer((req, res) => {

    // http header
    res.writeHead(200, { 'contentType': 'text/html' })
    
    let url = req.url

    if (url === '/home') {
        res._write('welcome home')
        res.end()

    } else if (url === '/contact') {
        res._write('contact page')
        res.end()
    } else if (url === '/about') {
        res._write('WELCOME TO THE ABOUT PAGE')
        res.end()
    }
}).listen(3000, () => {
    console.log('connected successfully');
})