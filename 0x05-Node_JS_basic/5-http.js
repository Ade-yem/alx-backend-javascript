#!/usr/bin/node
// Create a more complex HTTP server using Node's HTTP module

const http = require('http');
const fs = require('fs')



const app = http.createServer((req, res) => {
    const url = req.url;
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    if (url === '/') {
        res.end('Hello Holberton School!');
    } else if (url === '/students') {
        res.write('This is the list of our students\n');
        const countStudents = (path) => {
            const fields = {}
            return new Promise((resolve, reject) => {
               fs.readFile(path, 'utf-8', (err, data) => {
                if (err) {
                    reject (new Error('Cannot load the database'));
                    return;
                } else {
                    const lines = data.trim().split('\n').slice(1)
                    res.write(`Number of students: ${lines.length}`);
                    for (const line of lines) {
                        let liner = line.split(',');
                        if (liner[3] in fields) {
                            fields[liner[3]].push(liner[0]);
                        } else {
                            fields[liner[3]] = [liner[0]];
                        }
                    }
                    for (const field in fields) {
                        res.write(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`);
                    }}
                });
               resolve();
            })
        }
        countStudents(process.argv[2].toString())
        .then(() => res.end())
        .catch((error) => {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end(error.message);
        })
    };  
})

app.listen(1245)
module.exports = app;