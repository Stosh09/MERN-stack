setInterval(() => {
  console.log('Hello World');
}, 2000);
console.log('I will run first');
// In above process, the console runs first because we get the synchronous out of the way first then
//setInterval executes until killed or unexpected error is experienced
