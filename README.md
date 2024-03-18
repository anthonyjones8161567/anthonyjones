# Anthonyjones

Anthonyjones Node.js module with fun functions.

## Installation

You can install this module via npm: `npm install anthonyjones`

## Usage
```javascript
const quirkify = require('quirkify');

// Get a random dad joke
quirkify.getRandomDadJoke()
  .then(joke => console.log(joke))
  .catch(err => console.error(err));

// Get a random quote
quirkify.getRandomQuote()
  .then(quote => console.log(quote))
  .catch(err => console.error(err));

// Get a random hexadecimal color
const randomColor = quirkify.getRandomColor();
console.log(randomColor);
```