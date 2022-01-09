const fs = require('fs');

// fs.writeFileSync('example.txt', 'example-1');

// fs.copyFile('./example.txt', './example-copy.txt', (err) => {
//   if (err) throw err;
//   console.log('./example1.txt was copied to ./example-copy.txt');
// });


// fs.rename('./example-copy.txt', 'example2.txt', (err) => {
//   if (err) throw err;
//   console.log('example-copy.txt was renamed to example2.txt');
// });


console.log(fs.readdirSync('./'));