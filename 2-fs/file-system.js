const fs = require('fs');

fs.writeFileSync('example.txt', 'example-1');

fs.copyFile('./example.txt', './example-copy.txt', (err) => {
  if (err) throw err;
  console.log('source.txt was copied to destination.txt');
});


fs.copyFile('./example-copy.txt', 'example2', (err) => {
  if (err) throw err;
  console.log('source.txt was copied to destination.txt');
});