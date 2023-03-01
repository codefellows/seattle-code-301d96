'use strict';

const express = require('express');
const cors = require('cors');
const {createSnack, getSnacks, getSnack, deleteSnack, updateSnack} = require('./route-handlers/snack-routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// route handlers
app.get('/snacks', getSnacks);
app.get('/snacks/:id', getSnack);
app.post('/snacks', createSnack);
app.delete('/snacks/:id', deleteSnack);
app.put('/snacks/:id', updateSnack);

app.use('*', (req, res) => {
  res.status(404).send('These are not the droids you are looking for.');
});

app.use((error, req, res) => {
  res.status(500).send(`My Bad ... ${error.message}`);
});

// I know this looks different than what you have seen in class but this is how we need to write the code for testing.
// the index.js is calling start function to turn on the server
// There are no errors in the code below. Do not make any changes to these lines.
module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, console.log(`Server is up and running on port: ${port}`));
  },
};
