const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(req, res) {
    readDatabase(process.argv[2].toString())
      .then((fields) => {
        res.status(200);
        res.write('This is the list of our students\n');
        const key = Object.keys(fields).sort();
        let result = '';
        for (let i = 0; i < key.length; i += 1) {
          result += `Number of students in ${key[i]}: ${fields[key[i]].length}. List: ${fields[key[i]].join(', ')}\n`;
        }
        res.write(result.trim());
        res.end();
      })
      .catch(() => {
        res.status(500);
        res.end('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    const majors = ['CS', 'SWE'];
    if (majors.includes(major)) {
      readDatabase(process.argv[2].toString())
        .then((fields) => {
          res.status(200);
          const result = `List: ${fields[major].join(', ')}\n`;
          res.write(result.trim());
          res.end();
        })
        .catch(() => {
          res.status(500);
          res.end('Cannot load the database');
        });
    } else {
      res.status(500);
      res.end('Major parameter must be CS or SWE');
    }
  }
}
module.exports = StudentsController;
