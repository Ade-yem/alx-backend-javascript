#!/usr/bin/node
// Reading a file asynchronously with Node JS

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
    console.log(`Number of students: ${lines.length}`);
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
        console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
      }
    }
    resolve(result);
  });
});
module.exports = countStudents;
