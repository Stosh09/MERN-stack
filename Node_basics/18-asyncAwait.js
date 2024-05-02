const { readFile, writeFile } = require('fs').promises;

const start = async () => {
  try {
    const first = await readFile('./Content/first.txt', 'utf8');
    const second = await readFile('./Content/second.txt', 'utf8');
    await writeFile(
      './Content/confusion.txt',
      `I am confused on what to do concerning Ritah and I but hopefully it gets figured out`
    );
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};

start();

// const util = require('util');
// const readFilePromise = util.promisify (readFile);
// const writeFilePromise = util.promisify(writeFile);

// const readFilePromise = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, 'utf8', (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

//readFilePromise('./Content/first.txt')
//  .then((result) => console.log(result))
//  .catch((err) => console.log(err));

// The uncommented code at the top is the correct
// and the easier way to use promises and async await.
// The commented code at the bottom also works but its more cumbersome
// Here we introduce promises and we show
// how we use it to make our code more readable.
