const { readFile } = require('fs');

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      const lines = data.trim().split('\n').slice(1);
      const fields = {};
      for (const line of lines) {
        const liner = line.split(',');
        if (liner[3] in fields) {
          fields[liner[3]].push(liner[0]);
        } else {
          fields[liner[3]] = [liner[0]];
        }
      }
      resolve(fields);
    });
  });
}
module.exports = readDatabase;
