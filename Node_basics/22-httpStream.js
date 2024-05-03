// Below is a use case example of how streams can be applied in NODEJS
// Very efficient when it comes to sending large chunks of data to the server.
const http = require('http');
var fs = require('fs');

http
  .createServer(function (req, res) {
    // const text = fs.readFileSync('./Content/big.txt', "utf8");
    // res.end(text)
    const fileStream = fs.createReadStream('./Content/big.txt', 'utf8');
    fileStream.on('open', () => {
      fileStream.pipe(res);
    });
    fileStream.on('error', (err) => {
      res.end(err);
    });
  })
  .listen(5000);
