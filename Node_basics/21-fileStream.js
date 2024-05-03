// This code creates a new .txt file in content that we are going to use
const { writeFileSync } = require('fs');
for (let i = 0; i < 100000; i++) {
  writeFileSync('./Content/big.txt', `Hello world ${i}\n`, { flag: 'a' });
}

// In this one we get to read our file in chunks
const { createReadStream } = require('fs');

const stream = createReadStream('./Content/big.txt', {
  highWaterMark: 1200000,
});

stream.on('data', (result) => {
  console.log(result);
});

stream.on('error', (err) => {
  console.log(err);
});
