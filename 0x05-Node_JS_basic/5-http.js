#!/usr/bin/node
// Create a more complex HTTP server using Node's HTTP module

const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  const { url } = req;
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  if (url === '/') {
    res.end('Hello Holberton School!');
  }
  if (url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(process.argv[2].toString())
      .then((result) => res.end(result))
      .catch((error) => {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end(error);
      });
  }
});

app.listen(1245, () => {});
module.exports = app;
