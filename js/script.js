/******************************************
Golden Girls Random Quote Generator
******************************************/


/*** 
* An array of 9 quote objects
***/

const quotes = [
  {
  quote: `My mother used to say: the older you get, the better you get. Unless you’re a banana.`,
  source: `Rose Nylund`,
  citation: `The Golden Girls: Season 2 Episode 16`,
  year: 1987
  },
  {
  quote: `People waste their time pondering whether a glass is half empty or half full. Me, I just drink whatever’s in the glass.`,
  source: `Sophia Petrillo`,
  citation: `The Golden Girls: Season 5 Episode 14`,
  year: 1989
  },
  {
  quote: `As they say in St. Olaf: hergenbargenflergenflurfennerfen.`,
  source: `Rose Nylund`,
  citation: `The Golden Girls`,
  tags: `St. Olaf`
  },
  {
  quote: `You know what they say: you can lead a herring to water, but you have to walk really fast or he’ll die.`,
  source: `Rose Nylund`,
  citation: `The Golden Girls`
  },
  {
  quote: `I hate to admit it, but he melts my Haagen-Dazs`,
  source: `Rose Nylund`,
  citation: `The Golden Girls: Season 2 Episode 14`,
  year: 1987
  },
  {
  quote: `When I was a child, I used to get overexcited and pet the cat too much.`,
  source: `Rose Nylund`,
  citation: `The Golden Girls`
  },
  {
  quote: `I’m not one to blow my own vertubenflugen.`,
  source: `Rose Nylund`,
  citation: `The Golden Girls: Season 2 Episode 19`,
  year: 1987
  },
  {
  quote: `How come whenever my ship comes in it’s leaking?`,
  source: `Dorothy Zbornak`,
  citation: `The Golden Girls: Season 5 Episode 12`,
  year: 1989
  },
  {
  quote: `We have Maalox and estrogen. How many junkies have gas and hot flashes?`,
  source: `Dorothy Zbornak`,
  citation: `The Golden Girls: Season 1 Episode 8`,
  year: 1985
  }
];

/***
 * `getRandomQuote` function - returns a random quote object from the array.
***/
const randomNumber = upper => Math.floor(Math.random() * upper);
const getRandomQuote = () => {
  return quotes[randomNumber(quotes.length)];
};

/***
 * `printQuote` function - builds the html string and replaces the current html inside div#quote-box 
***/
 const printQuote = () => {
  const selectedQuote = getRandomQuote();
  let html = `<p class="quote">${selectedQuote.quote}</p><p class="source">${selectedQuote.source}`;
  if (selectedQuote.citation) {
    html += `<span class="citation">${selectedQuote.citation}</span>`;
  }
  if (selectedQuote.year) {
    html += `<span class="year">${selectedQuote.year}</span>`;
  } 
  if (selectedQuote.tags) {
    html += `<span class="tags"> #Tags: ${selectedQuote.tags} quotes</span>`;
  } 
  html += `</p>`;
  document.getElementById('quote-box').innerHTML = html; 
  let randomRGB = () => {
    let RGB = `rgb(${randomNumber(255)}, ${randomNumber(255)}, ${randomNumber(255)})`;
    document.getElementById('body').style.background = RGB;
  };
  randomRGB();
 };

/***
 * click event listener for the print quote button - triggers change event
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

/***
 * timing function - also triggers change event
***/

setInterval(printQuote, 20000);
