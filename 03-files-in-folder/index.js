const fs = require('fs');
const path = require('path');
const { stdout } = process;

// console.log(__dirname);
let fileSecret = path.join(__dirname, 'secret-folder');
// console.log(path.join(__dirname, 'secret-folder'));
fs.readdir(fileSecret, (err, files) => {
  if (err)
    console.log(err);
  else {
    // console.log(files);
    files.forEach(file => {
      // console.log(file);
      let filesAdress = path.join(__dirname, 'secret-folder', file);
      fs.stat(filesAdress, (err, stats) => {
        if (err) console.log(err);
        if(stats.isFile()){
          let fileName = path.basename(filesAdress, path.extname(filesAdress));
          let extension = path.extname(filesAdress);
          let fileSize = (stats.size / 1024).toFixed(3);
          stdout.write(`${fileName} - ${extension.slice(1)} - ${fileSize}kb\n`);
          // console.log(fileName);
          // console.log(extension);
          // console.log(`${fileSize}kb`);
        }
      });
    });
  }
});
