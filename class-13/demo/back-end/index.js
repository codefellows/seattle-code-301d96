'use strict';

// This page is needed for testing. Please don't touch it.

const mongoose = require('mongoose');
require('dotenv').config();

const server = require('./src/server.js');

mongoose.connect(process.env.DATABASE_URL)
  .then(() => server.start(process.env.PORT || 3001));
