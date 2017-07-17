const http = require('http');
const port = process.env.PORT || 8080;
const express = require('express');
const app = express();

app.use(express.static('./public'));

const server = http.createServer(app);
server.listen(port, () => {
  console.log('server listening on port', server.address().port);
})




