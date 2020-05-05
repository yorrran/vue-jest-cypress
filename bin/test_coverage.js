/*eslint-disable*/
const fs = require('fs');
const filePath = './coverage/coverage.txt';
fs.readFile(filePath, function(err, data) {
  if (err) throw err;
  const array = data.toString().split('\n');
  const arrFromBottom = array.reverse();
  const val = arrFromBottom[4]
    .split(' ')
    .filter(val => val !== '' && val !== '|');
  for (i in val) {
    if (Number(val[i]) > 0 && Number(val[i]) < 80) {
      process.exit(1);
    }
  }
});

process.on('exit', code => {
  if (code === 1) {
    console.log(
      `test coverage need to reach 80%, process exit with Code ${code}`
    );
  }
});
