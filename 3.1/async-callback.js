const fs = require('fs');

const readFileAsArray = function(file, cb) {
  fs.readFile(file, function(err, data) {
    if (err) {
      return cb(err);
    }
    
    const lines = data.toString().trim().split('\n');
    console.log('3');
    cb(null, lines);
    console.log('5');
  });
};

console.log('1');
// example call
readFileAsArray('./numbers', (err, lines) => {
  if (err) throw err;

  console.log('4');
  
  const numbers = lines.map(Number);
  const oddNumbers = numbers.filter(number => number % 2 === 1);
  console.log('odd numbers count:', oddNumbers.length);
});
console.log('2');
