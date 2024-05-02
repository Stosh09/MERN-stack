const http = require('http');

const server = http.createServer((req, res) => {
  console.log('request event');
  res.end('Hello World');
});

server.listen(5000, () => {
  console.log('Server listening on port: 5000....');
});

//In here we talk about how event loop works on the server now