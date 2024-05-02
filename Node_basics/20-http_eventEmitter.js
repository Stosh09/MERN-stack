const http = require('http');

const server = http.createServer();
server.on('request', (req, res) => {
  res.end('Welcome');
});

server.listen(5000);

// Here we show how HTTP uses EventEmitter to listen for events on the server
