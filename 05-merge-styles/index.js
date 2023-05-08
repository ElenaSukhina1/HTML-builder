const fs = require('fs');
const path = require('path');

const styleFolder = path.join(__dirname, 'styles');
const newFolder = path.join(__dirname, 'project-dist', 'bundle.css');

fs.access(newFolder, fs.F_OK, (err) => {
  if (err) {
    console.log('Файла еще нет');

  }
  fs.writeFile(newFolder, ' ', (err) =>{
    if(err) throw err;
  });
  //file exists
});

// fs.unlink(newFolder, err => {
//   if(err) throw ('Ошибка при удалении');
// });

fs.readdir(styleFolder, (err, files) => {
  if (err) throw ('Ошибка при чтении файла со стилями');

  files.forEach(item => {
    let fileAdress = path.join(__dirname, 'styles', item);
    let fileExtname = path.extname(item).slice(1);
    const stream = fs.createReadStream(fileAdress, 'utf-8');

    if (fileExtname === 'css') {
      stream.on('data', chunk => {
        fs.appendFile(newFolder, chunk, err => {
          if (err) throw ('Ошибка при добавлении чанка');
        });
      });
      // stream.on('end', () => console.log('Данные из файла добавили'));
      stream.on('error', error => console.log('Ошибка', error.message));
    }
  });
});