'use strict';

// same thing as import
const axios = require('axios'); // nodes way of loading libraries

// important value,  don't commit these!
const LOCATION_IQ_ACCESS_TOKEN = 'pk.bdd0bc30c99d3ada8b0216148b5dda98';

const request = {
  url: `https://us1.locationiq.com/v1/search?key=${LOCATION_IQ_ACCESS_TOKEN}&q=seattle&format=json`,
  method: 'GET'
};

let promise = axios(request); // async action

// console.log(response); // how do I read the response???

// promise use callbacks, in a .then or .catch
promise
  .then((response) => {
    console.log(response.data[0].display_name);
  })
  .catch(error => {
    console.log('AN ERROR OCCURRED');
    console.error(error);
  });
