const axios = require('axios');
const cheerio = require('cheerio');

// Function to fetch random dad jokes from an API
async function getRandomDadJoke() {
  try {
    const response = await axios.get('https://icanhazdadjoke.com/', {
      headers: { 'Accept': 'application/json' }
    });
    return response.data.joke;
  } catch (error) {
    throw new Error('Failed to fetch dad joke.');
  }
}

// Function to scrape a random quote from a website
async function getRandomQuote() {
  try {
    const response = await axios.get('https://quotes.toscrape.com/random');
    const $ = cheerio.load(response.data);
    return $('.text').text().trim();
  } catch (error) {
    throw new Error('Failed to fetch random quote.');
  }
}

// Function to generate a random hexadecimal color
function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

module.exports = { getRandomDadJoke, getRandomQuote, getRandomColor };
