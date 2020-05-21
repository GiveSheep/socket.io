const express = require('express');
const socket = require('./socket.js');
const app = express();
const port = 3000;

app.listen(port, () => console.log(`监听端口: ${port}!`))