const { readFile } = require('fs');

console.log('Started this new task');

//Check contents of the file
readFile('./Content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  console.log('Complete this task as well');
});
console.log('Starting next task in line');
