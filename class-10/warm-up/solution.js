'use strict';

const express = require('express');
const app = express();// run the express framework

// add parentheses around our callback parameters
// make sure our forward slash is at the front of our endpoint
app.get('/username', (req, res) => {
  // format our object correctly
  const userInfo = {
    name: req.query.username,
    password: req.query.password
  };
  // change request and response to match our parameter names

  res.status(200).send(userInfo); // set a status for good luck
});

// make sure we are lintening to a port number
app.listen(3000, () => "Listening on Port 3000");
