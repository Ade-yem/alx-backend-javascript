#!/usr/bin/node
// Reading a file synchronously with Node JS
const fs = require('fs')

const countStudents = (path) => {
    file = fs.readFileSync(path, 'utf8', (err, data) => {
        if (err) {
            throw new Error('Cannot load the database');
        }
        return data
    })
    const lines = file.split('\n').filter((line) => line.length > 0).slice(1);
    console.log(`Number of students: ${lines.length}`);
    const fields = {};
    for (const line of lines) {
        let liner = line.split(',');
        if (liner[3] in fields) {
            fields[liner[3]].push(liner[0]);
        } else {
            fields[liner[3]] = [liner[0]];
        }
    }
    for (const field in fields) {
        console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`)
    }
}
module.exports = countStudents;
