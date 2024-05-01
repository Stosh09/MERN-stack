// CommonJS, every file is a module by default.
// Modules - Encapsulated code (Only share minimum)
const names = require('./4-names')
const sayHi = require('./5-utils')

sayHi("Ritah");
sayHi(names.peter);
sayHi(names.stosh);
