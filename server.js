'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/hello', (req, res) => {
  res.send('Hello Chanakya! Welcome to my sample node js app running on 3 pods with AutoScaling <br> Please find the link to the Kubernetes Dashboard here - ');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
