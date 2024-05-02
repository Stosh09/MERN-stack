// In this file we demonstrate the way a few of the built-in modules work
const os = require('os');

// info about current user
const user = os.userInfo();
console.log(user);

// Method that returns the uptime of the system in use in seconds
console.log(`The system uptime is ${os.uptime} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMe: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS);
