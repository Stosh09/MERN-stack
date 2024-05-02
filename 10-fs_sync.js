// Synchronous way of using File system built in methods
const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./Content/first.txt', 'utf8');
const second = readFileSync('./Content/second.txt', 'utf8');

writeFileSync(
  './Content/declare-love.txt',
  `And the result is: ${first}, ${second}`
);
console.log(first, second);
