#!/usr/bin/node
// Create a more complex HTTP server using Node's HTTP module

const http = require('http');
const fs = require('fs');

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }
    let result = '';
    const lines = data.trim().split('\n').slice(1);
    result += `Number of students: ${lines.length}\n`;
    const fields = {};
    for (const line of lines) {
      const liner = line.split(',');
      if (liner[3] in fields) {
        fields[liner[3]].push(liner[0]);
      } else {
        fields[liner[3]] = [liner[0]];
      }
    }
    for (const field in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, field)) {
        result += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
      }
    }
    resolve(result);
  });
});

const app = http.createServer((req, res) => {
  const { url } = req;
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  if (url === '/') {
    res.end('Hello Holberton School!');
  }
  if (url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(process.argv[2].toString())
      .then((result) => res.end(result.trim()))
      .catch(() => {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Cannot load the database');
      });
  }
});

app.listen(1245, () => {});
module.exports = app;
