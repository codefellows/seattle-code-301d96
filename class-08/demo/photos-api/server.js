'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();

const CLIENT_ID = process.env.UNSPLASH_CLIENT_ID;

app.use(cors());

app.get('/photos', async (request, response) => {

  // creates second request to unsplash
  let proxy = {
    url: `https://api.unsplash.com/search/photos?page=1&query=${request.query.searchQuery}&client_id=${CLIENT_ID}`, // what lives here??? Query String parameters
    method: 'GET'
  };
  let proxyRes = await axios(proxy);
  response.status(200).send(proxyRes.data);
});


app.listen(3001, ()=> {
  console.log('App is running');
});
