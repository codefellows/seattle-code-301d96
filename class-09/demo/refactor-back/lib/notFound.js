'use strict';

function notFound() {
  // if no pokemon is found return a 404
  throw new Error({ status: 404, message: "No Pokemon found" });
}

module.exports = notFound;
