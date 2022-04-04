// Bai 1
const Math = require('./math');

const x = 50,
y = 10;

console.log('Phep cong ' + Math.add(x, y));
console.log('Phep tru ' + Math.sub(x, y));
console.log('Phep nhan ' + Math.mult(x, y));
console.log('Phep chia ' + Math.div(x, y));

//bai 2
const hinhTron = require('./hinhTron');
const r = 4;

console.log('chu vi: '+ hinhTron.chuVi(r));
console.log('dien tich: '+ hinhTron.dienTich(r));

// Bai 3
const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" }); 
    res.end(JSON.stringify({
        data: 'Hello World!'
      }));
});
server.listen(3000, 'localhost');

// Bai 4

const express = require('express');

const app = express();

app.get('/getUser', (req, res) => {
    res.json({
        name: "hung"
    })
});

app.listen(5000, () => {console.log('Server start on http://localhost:5000')});
