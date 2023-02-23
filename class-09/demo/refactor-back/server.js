'use strict';

const express = require('express');
const axios = require('axios');
const findPokemon = require('./lib/findPokemon.js');
const notFound = require('./lib/notFound.js');

const app = express();
const PORT = process.env.PORT;

let pokedex = [
  {
    name: "Pikachu",
    type: "electric"
  },
  {
    name: "Charizard",
    type: "fire"
  },
];

function handlePokemon(request, response) {
  let foundPokemon = findPokemon(pokedex, request.query.pokemon);

  if (!foundPokemon) {
    notFound();
  } else {
    // if a pokemon is found return that single pokemon
    response.status(200).send(foundPokemon);
  }
}

app.get('/pokemon', handlePokemon);

app.use((err, request, response, next) => {
  response.status(err.status).send(err.message);
});

app.list(PORT, () => {
  console.log(' App is listening! ');
});
