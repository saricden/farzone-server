const express = require('express');
const { ExpressPeerServer } = require('peer');
const app = express();
const PORT = process.env.port || 9000;

const server = app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  console.log('Ctrl+C to quit, have fun!');
});

const peerServer = ExpressPeerServer(server, {
  path: '/'
});

app.use('/', peerServer);

module.exports = app;