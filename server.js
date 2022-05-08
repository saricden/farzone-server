const PORT = process.env.port || 9000;

const { PeerServer } = require('peer');

const peerServer = PeerServer({ port: PORT, path: '/farzone' });
