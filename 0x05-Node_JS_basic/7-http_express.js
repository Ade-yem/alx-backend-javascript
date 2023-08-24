#!/usr/bin/node
// Create a small HTTP server using Express

const express = require('express');
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

const port = 1245;
const app = express();
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(process.argv[2].toString())
    .then((result) => res.send(
      `This is the list of our students\n${result.trim()}`,
    ))
    .catch(() => {
      res.send('This is the list of our students\nCannot load the database');
    });
});

app.listen(port, () => {});
module.exports = app;
