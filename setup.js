const fs = require('fs');

fs.createReadStream('example.env')
  .pipe(fs.createWriteStream('.env'));

fs.createReadStream('example.env')
  .pipe(fs.createWriteStream('.env.test'));
