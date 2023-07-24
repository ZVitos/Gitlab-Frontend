// const http = require('http');
// const port = 8080;

// const server = http.createServer((req, res) => {
//     res.end("Hello, World");
// })

// server.listen(port, () => {
//     console.log('Server listening on: http://localhost:%s', port);
// })

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Hello World");
})

app.listen(3000, () => {
    console.log('Express web app on http://localhost:3000');
})