const path = require('path');
const { pathToFileURL } = require('url');

console.log(path.sep);

const filePath = path.join('/Me', '/Relationship', 'ritah.txt');
console.log(filePath);

const base = path.basename('/Me', '/Relationship', 'ritah.txt');
console.log(base);

const absolute = path.resolve(__dirname, 'Me', '/Relationship', 'ritah.txt');
console.log(absolute);
