'use strict';

require('dotenv').config();
const express = require('express'); // loads express library from node_modules.
const cors = require('cors');
const pokedex = require('./pokedex.json'); // Whenever you are using vanilla node modules use this.
const app = express(); // creates a singleton (there can only be one!)

const PORT = process.env.PORT;

app.use(cors()); // allow cross origin resource sharing once deployed.

// creates a HTTP method to listen for GET on /banana.
app.get('/banana', (request, response) => {
  console.log(request.url);
  response.status(200).send('Here is your banana');
});

// hopefully this reminds you of event handlers

// example url: http://localhost:3001/search?city=seattle&lat=70&lon=80
app.get('/search', (request, response) => {
  console.log(request.query);
  response.send('Working on it');
});

app.get('/bad-request', (request, response) => {
  throw new Error('Testing Server error');
});


// pokemon routes
app.get('/pokemon', (request, response) => {
  let result = null;

  // see if we have a query?
  if (request.query.name) {
    // if so, look for pokemon by name and return in response
    pokedex.forEach(pokemon => {
      if (pokemon.name.toLowerCase() === request.query.name.toLowerCase()) {
        // response.status(200).send(pokemon);
        result = pokemon;
      }
    });
    // if we don't find one, return a 404.
    if (!result) {
      response.status(404).send('no pokemon found');
    } else {
      response.status(200).send(result);
    }


  } else {
    // if not, return the pokedex;
    response.status(200).send(pokedex);
  }
});


// our not found handler. catch all route
app.use('*', (request, response) => {
  response.status(404).send('Custom not found message');
});

// error handlers get 4 parameters.
app.use((err, request, response, next) => {

  // next is a function, when called it moves the request to the next available express function.
  console.log(err);
  response.status(500).send('BAD THINGS OCCURRED');
});

app.listen(PORT, () => {
  console.log('App is running');
});
