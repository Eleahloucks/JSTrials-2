'use strict';

// 1. countWords
function countWords(phrase) {
  let wordCounts = {};
  let phraseArray = phrase.split(" ");
  for (const word of phraseArray){
    if (wordCounts.hasOwnProperty(word)){
      wordCounts[word] += 1;
    }else{
      wordCounts[word] = 1;
    }
  }
  return wordCounts;
}

// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {
  // Replace this with your code
  let melonPrices = {
    2.50: ['Cantaloupe', 'Honeydew'],
    2.95: ['Watermelon'],
    3.25: ['Musk', 'Crenshaw'],
    14.25: ['Christmas']
}
  if (!melonPrices.hasOwnProperty(price)) {
    return;
  }
  return melonPrices[price].sort();
}
