const fs = require('fs');

const readFileAsArray = function(file, cb = () => {}) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, function(err, data) {
      if (err) {
        reject(err);
        return cb(err);
      }

      const lines = data.toString().trim().split('\n');
      resolve(lines);
      cb(null, lines);
    });
  });
};

// example call
readFileAsArray('./numbers')
  .then(lines => {
    const numbers = lines.map(Number);
    const oddNumbers = numbers.filter(number => number % 2 === 1);
    console.log('1.odd numbers count:', oddNumbers.length);
  })
  .catch(console.error);

readFileAsArray('./numbers', (err, lines) => {
  if (err) throw err;

  const numbers = lines.map(Number);
  const oddNumbers = numbers.filter(number => number % 2 === 1);
  console.log('2.odd numbers count:', oddNumbers.length);
});

async function countOdd () {
  try {
    console.log('begin countOdd().');
    const lines = await readFileAsArray('./numbers');
    const numbers = lines.map(Number);
    const oddCount = numbers.filter(number => number % 2 === 1).length;
    console.log('3.odd numbers count:', oddCount);
  } catch(err) {
    console.error(err);
  }
}

countOdd();
console.log('program end.');
