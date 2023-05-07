const fs = require('fs');
const path = require('path');
const { stdin, stdout } = process;


fs.open(path.join(__dirname, 'text.txt'), 'w', (err) => {
  if (err) throw err;
});

stdout.write('Write your text\n');

function createFile() {
  stdin.on('data', data => {
    let string = data.toString();
    if (string == 'exit\r\n') {
      process.exit();
    } else {
      fs.appendFile(
        path.join(__dirname, 'text.txt'),
        data,
        err => {
          if (err) throw err;
          // console.log('Файл был изменен');
        }
      );
    }
  });
}
createFile();

