'use strict';

const express = require('express');
require('dotenv').config();
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3002;

const cache = { }; // empty object;

app.get('/recipes', getRecipes);

function getRecipes(request, response) {
  const ingredient = request.query.ingredient;
  const url = `https://api.edamam.com/api/recipes/v2?app_id=${process.env.FOOD_APP_ID}&app_key=${process.env.FOOD_APP_KEY}&q=${ingredient}&type=public`;
  console.log(cache);

  // when do we want to make our request???
  // first checkout cache?
  if (cache[ingredient]) {
    // How recently was the last request made????
    // check when the last request was added to the cache:
    if ((Date.now() - cache[ingredient].timestamp) < 1800000) {
      const recipeArr = cache[ingredient].response.hits.map((recipe) => new Recipe(recipe.recipe));
      response.status(200).send(recipeArr);
    } else{
      axios
        .get(url)
        .then(res => {
          cache[ingredient] = { timestamp: Date.now(), response: res.data };
          const recipeArr = res.data.hits.map(recipe => new Recipe(recipe.recipe));
          response.status(200).send(recipeArr);
        })
        .catch(err => {
          console.log('error', err);
          response.status(500).send('error', err);
        });
    }
    // if it was made in the last 30 minutes:
    // if not let's make a new request and replace the response in the cache.\
    // return the last response from our recipe API.
  } else {
    axios
      .get(url)
      .then(res => {
        cache[ingredient] = { timestamp: Date.now(), response: res.data };
        const recipeArr = res.data.hits.map(recipe => new Recipe(recipe.recipe));
        response.status(200).send(recipeArr);
      })
      .catch(err => {
        console.log('error', err);
        response.status(500).send('error', err);
      });
  }

}

class Recipe {
  constructor(recipe) {
    this.uri = recipe.uri;
    this.label = recipe.label;
    this.image_url = recipe.image;
    this.ingredients = recipe.ingredientLines;
    this.totalTime = recipe.totalTime;
  }
}

app.listen(PORT, () => console.log(`listening on ${PORT}`));
