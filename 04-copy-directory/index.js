const fs = require('fs');
const path = require('path');

let firstFile = path.join(__dirname, 'files');
let copyFile = path.join(__dirname, 'files-copy');

function copyDir() {

  // console.log(copyFile);
  // console.log(firstFile);

  fs.mkdir(copyFile, { recursive: true }, err => {
    if (err) throw err;
  });
  fs.readdir(firstFile, (err, files) => {
    if (err) console.log(err);
    else {
      files.forEach(file => {
        let filesAdress = path.join(__dirname, 'files', file);
        let copyAdress = path.join(__dirname, 'files-copy', file);
        fs.copyFile(filesAdress, copyAdress, err => {
          if (err) throw err;
          // console.log('Файл успешно скопирован');
        });
      });
    }
  });
}
 

copyDir();