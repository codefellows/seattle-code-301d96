'use strict';

const express = require('express');
const app = express();


class Forecast {
  constructor(weatherData) {
    this.description = weatherData.weather.description;
    this.date = weatherData.date;
  }
}

class Movie {
  constructor(movieData) {

  }
}

app.get('/weather', async (request, response) => {
  let proxy = {
    url: `https://api.weatherbit.io/v2.0/forecast/daily?lat=${request.query.lat}&lon=${request.query.lon}&key=${TOKEN}`,
    method: 'GET',
  };
  let proxyRes = await axios(proxy);
  let results = [];
  proxyRes.data.forEach(data => {
    results.push(new Forecast(data));
  });
  response.status(200).send(results);
});
