/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Array of objects to hold quote information (quote, source, citation, year and photo of the author)
var quotes = [
  {
      quote: "The good neighbor looks beyond the external accidents and discerns those inner qualities that make all men human and, therefore, brothers.",
      source: "Martin Luther King Jr.",
      citation: "Strength to Love",
      year: 1963,
      photo: "MartinLutherKingJr.jpg"
  },
  {
      quote:  "Since it is so likely that children will meet cruel enemies, let them at least have heard of brave knights and heroic courage.",
      source: "C.S. Lewis",
      citation: "On Stories: And Other Essays on Literature",
      year: 1966,
      photo: "CSLewis.jpg"
  },
  {
      quote:  "Humility is not thinking less of yourself, but thinking of yourself less.",
      source: "C.S. Lewis",
      citation: "Mere Christianity",
      year: 1952,
      photo: "CSLewis.jpg"
  },
  {
      quote:  "You are never too old to set another goal or to dream a new dream.",
      source: "C.S. Lewis",
      year: 1993,
      photo: "CSLewis.jpg"
  },
  {
      quote:  "I don't know half of you half as well as I should like; and I like less than half of you half as well as you deserve.",
      source: "J.R.R. Tolkien",
      citation: "The Fellowship of the Ring",
      year: 1954,
      photo: "JRRTolkien.jpg"
  },
  {
      quote:  "All we have to decide is what to do with the time that is given us",
      source: "J.R.R. Tolkien",
      citation: "The Fellowship of the Ring",
      year: 1954,
      photo: "JRRTolkien.jpg"
  },
  {
      quote:  "There is nothing like looking, if you want to find something. You certainly usually find something, if you look, but it is not always quite the something you were after.",
      source: "J.R.R. Tolkien",
      citation: "The Hobbit",
      year: 1937,
      photo: "JRRTolkien.jpg"
  },
  {
      quote: "Perhaps it is how we are made; perhaps words of truth reach us best through the heart, and stories and songs are the language of the heart",
      source: "Stephen R. Lawhead",
      citation: "Merlin",
      year: 1988,
      photo: "StephenRLawhead.jpg"
  },
  {
      quote: "We are not required to defeat evil, but only to stand against it. That is enough - the outcome remains with God.",
      source: "Stephen R. Lawhead",
      citation: "Grail",
      year: 1997,
      photo: "StephenRLawhead.jpg"
  },
  {
    quote: "We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light",
    source: "Plato",
    photo: "Plato.jpg"
  }
];

// Array of colors to use for the random background color function: getRandomColor.
let backgroundColor = [
  'lightcoral',
  'green',
  'blue',
  'darkslategray',
  'orange',
  'lightsalmon',
  'darkmagenta'

];

/* This function uses a random number to pull a random quote object 
from the Quotes object array. It then returns the quote object. */
function getRandomQuote(quotes){
  let randQuote = Math.floor(Math.random() * quotes.length);
  return quotes[randQuote];
  }

// This function uses a random number to select a random background color from 'backGroundColor' array and returns the color.
function getRandomColor(colorArray){
  let randomColor = Math.floor(Math.random() * colorArray.length);
  return colorArray[randomColor]
}


function printQuote(){
  /* Initialize variables:
    randQuote = the random quote object pulled from the "Quotes" array by function "getRandomQuote"
    messageHTML = the variable used to build and hold the HTML structure. */ 
  let randQuote = getRandomQuote(quotes);   
  let messageHTML = '';
  
  //assigning the random color returned from 'getRandomColor' to the html backgroundColor
  document.body.style.backgroundColor = getRandomColor(backgroundColor);

  //Building HTML structure. We use variable 'randQuote' to obtain property values for quote and source in Quotes array.
  messageHTML += "<p class='quote'>" + randQuote.quote + "</p>"
  messageHTML += "<p class='source'>" + randQuote.source
  
  //Check to see if a citation propery exists in object - if so - add it to the messageHTML string.
  if(randQuote.citation){
    messageHTML += "<span class='citation'>" + randQuote.citation + "</span>"
  }

  //Check to see if a year property exists in object - if so - add it to the messageHTML string.
  if(randQuote.year){
    messageHTML += "<span class='year'>" + randQuote.year + "</span></p>"
  }else{
    messageHTML += "</p>"
  }

  //Use the randQuote variable to pull photo of the correct author/source and add it to messageHTML string
  messageHTML += "<img class='photo' src='photos/" + randQuote.photo + "' alt='" + randQuote.source + "'>"
  
  //Assign the contents of messageHTML to the 'quote-box' div in our index.html page
  document.getElementById('quote-box').innerHTML = messageHTML;
}

//Set interval to automatically update the quote shown every 7 seconds by calling the 'printQuote' function
setInterval(printQuote, 7000);

//On button 'click' - call the 'printQuote' function to update the quote shown on the page
document.getElementById('loadQuote').addEventListener("click", printQuote, false);




