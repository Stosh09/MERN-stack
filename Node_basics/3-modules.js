// CommonJS, every file is a module by default.
// Modules - Encapsulated code (Only share minimum)
const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative_flava')
console.log(data)
require('./7-mind_boggling')

sayHi("Ritah");
sayHi(names.peter);
sayHi(names.stosh);
