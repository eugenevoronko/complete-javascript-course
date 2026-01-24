'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const books = [
  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: [
      'computer science',
      'programming',
      'algorithms',
      'data structures',
      'java',
      'math',
      'software',
      'engineering',
    ],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: 'Structure and Interpretation of Computer Programs',
    author: [
      'Harold Abelson',
      'Gerald Jay Sussman',
      'Julie Sussman (Contributor)',
    ],
    publisher: 'The MIT Press',
    publicationDate: '2022-04-12',
    edition: 2,
    keywords: [
      'computer science',
      'programming',
      'javascript',
      'software',
      'engineering',
    ],
    pages: 640,
    format: 'paperback',
    ISBN: '9780262543231',
    language: 'English',
    programmingLanguage: 'JavaScript',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ['Randal E. Bryant', "David Richard O'Hallaron"],
    publisher: 'Prentice Hall',
    publicationDate: '2002-01-01',
    edition: 1,
    keywords: [
      'computer science',
      'computer systems',
      'programming',
      'software',
      'C',
      'engineering',
    ],
    pages: 978,
    format: 'hardcover',
    ISBN: '9780130340740',
    language: 'English',
    programmingLanguage: 'C',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: 'Operating System Concepts',
    author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
    publisher: 'John Wiley & Sons',
    publicationDate: '2004-12-14',
    edition: 10,
    keywords: [
      'computer science',
      'operating systems',
      'programming',
      'software',
      'C',
      'Java',
      'engineering',
    ],
    pages: 921,
    format: 'hardcover',
    ISBN: '9780471694663',
    language: 'English',
    programmingLanguage: 'C, Java',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: 'Engineering Mathematics',
    author: ['K.A. Stroud', 'Dexter J. Booth'],
    publisher: 'Palgrave',
    publicationDate: '2007-01-01',
    edition: 14,
    keywords: ['mathematics', 'engineering'],
    pages: 1288,
    format: 'paperback',
    ISBN: '9781403942463',
    language: 'English',
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: 'The Personal MBA: Master the Art of Business',
    author: 'Josh Kaufman',
    publisher: 'Portfolio',
    publicationDate: '2010-12-30',
    keywords: ['business'],
    pages: 416,
    format: 'hardcover',
    ISBN: '9781591843528',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: 'Crafting Interpreters',
    author: 'Robert Nystrom',
    publisher: 'Genever Benning',
    publicationDate: '2021-07-28',
    keywords: [
      'computer science',
      'compilers',
      'engineering',
      'interpreters',
      'software',
      'engineering',
    ],
    pages: 865,
    format: 'paperback',
    ISBN: '9780990582939',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: 'Deep Work: Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    publisher: 'Grand Central Publishing',
    publicationDate: '2016-01-05',
    edition: 1,
    keywords: ['work', 'focus', 'personal development', 'business'],
    pages: 296,
    format: 'hardcover',
    ISBN: '9781455586691',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];

// const [firstBook, secondBook] = books;
// console.log(firstBook, secondBook);

// const [, , thirdBook] = books;
// console.log(thirdBook);

// const ratings = [
//   ['rating', 4.19],
//   ['ratingsCount', 144584],
// ];
// const [[, rating], [, ratingsCount]] = ratings;
// console.log(rating, ratingsCount);

// const ratingStars = [63405, 1808];
// const [fiveStarRatingCount, oneStarRatingCount, threeStarRatings = 0] =
//   ratingStars;
// console.log(fiveStarRatingCount, oneStarRatingCount, threeStarRatings);

// const { title, author, ISBN } = books[0];
// console.log(title, author, ISBN);

// const { keywords: tags } = books[0];
// console.log(tags);

// const { language, programmingLanguage = 'unknown' } = books[6];
// console.log(language, programmingLanguage);

// let bookTitle = 'unknown';
// let bookAuthor = 'unknown';
// ({ title: bookTitle, author: bookAuthor } = books[0]);
// console.log(bookTitle, bookAuthor);

// const {
//   thirdParty: {
//     goodreads: { rating: bookRating },
//   },
// } = books[0];
// console.log(bookRating);

// function printBookInfo({ title, author, year = 'year unknown' }) {
//   console.log(`"${title} by ${author}, ${year}".`);
// }
// printBookInfo({
//   title: 'Algorithms',
//   author: 'Robert Sedgewick',
//   year: '2011',
// });
// printBookInfo({ title: 'Algorithms', author: 'Robert Sedgewick' });

// const bookAuthors = [...books[0].author, ...books[1].author];
// console.log(bookAuthors);

// function spellWord(str) {
//   console.log(...str);
// }

// spellWord('JavaScript');

// const [mainKeyword, ...rest] = books[0].keywords;
// console.log(mainKeyword, rest);

// const { publisher: bookPublisher, ...restOfTheBook } = books[1];
// console.log(bookPublisher, restOfTheBook);

// function printBookAuthorsCount(title, ...authors) {
//   console.log(`"The book "${title}" has ${authors.length} authors".`);
// }
// printBookAuthorsCount('Algorithms', 'Robert Sedgewick', 'Kevin Wayne');

// function hasExamplesInJava(book) {
//   return book.programmingLanguage === 'Java' || 'no data available';
// }
// console.log(hasExamplesInJava(books[0]));

// for (const book of books) {
//   book.onlineContent && console.log(`"${book.title}" provides online content`);
// }

// for (const book of books) {
//   console.log(book.onlineContent);
//   book.onlineContent ??
//     console.log(`"${book.title}" provides no data about its online content`);
// }

// for (const book of books) {
//   book.edition ||= 1;
//   console.log(`${book.title} edition: ${book.edition}`);
// }

// for (const book of books) {
//   book.highlighted &&= !(book.thirdParty.goodreads.rating < 4.2);
// }

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
 */

const [players1, players2] = game.players;
const [gk, ...fieldPlayers] = players1;
const allPlayers = [...players1, ...players2];
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
const {
  odds: { team1, x: draw, team2 },
} = game;
function printGoals(...playerNames) {
  for (const player of playerNames) {
    console.log('Player ', player);
  }
  console.log(`Total goals scored: ${playerNames.length}`);
}
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);
team1 < team2 && console.log('Team 1 is more likely to win');
team2 < team1 && console.log('Team 2 is more likely to win');

let pageSum = 0;
for (const book of books) {
  pageSum += book.pages || 0;
}
console.log(`Total number of pages in all books: ${pageSum}`);

const allAuthors = [];
for (const book of books) {
  Array.isArray(book.author)
    ? allAuthors.push(...book.author)
    : book.author && allAuthors.push(book.author);
}
console.log(allAuthors);

for (const [index, book] of books.entries()) {
  console.log(`Book ${index + 1}: "${book.title}" by ${book.author}`);
}
// END OF CHALLENGE #1

const bookData = [
  ['title', 'Computer Networking: A Top-Down Approach'],
  ['author', ['James F. Kurose', 'Keith W. Ross']],
  ['publisher', 'Addison Wesley'],
];

// Do the rest
const newBook = {
  [bookData[0][0]]: bookData[0][1],
  [bookData[1][0]]: bookData[1][1],
  [bookData[2][0]]: bookData[2][1],
};
console.log(newBook);

const pages = 880;

const newBook2 = {
  title: 'The C Programming Language',
  author: ['Brian W. Kernighan', 'Dennis M. Ritchie'],
  pages,
  [bookData[2][0]]: bookData[2][1],
};
console.log(newBook2);

function getFirstKeyword(book) {
  console.log(book.keywords?.[0] ?? 'No keywords available');
}
getFirstKeyword(books[0]);
getFirstKeyword(newBook2);

const entries = [];
for (const key of Object.keys(books[0]?.thirdParty?.goodreads)) {
  entries.push([key]);
}

console.log(Object.entries(books));
console.log(Object.entries(books[0].thirdParty));
console.log(Object.entries(books[0].thirdParty.goodreads).entries());

for (const [index, value] of Object.values(
  books[0].thirdParty.goodreads,
).entries()) {
  entries[index].push(value);
}
console.log(entries);

const entries2 = Object.entries(books[0].thirdParty.goodreads);
console.log(entries, entries2);

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/
for (const [goalIndex, player] of game.scored.entries()) {
  console.log(`Goal ${goalIndex + 1}: ${player}`);
}

let averageOdd = 0;
const odds = Object.values(game.odds);
for (const odd of odds) {
  averageOdd += odd;
}
averageOdd /= odds.length;
console.log(`Average odd: ${averageOdd}`);

for (const [team, odd] of Object.entries(game.odds)) {
  console.log(
    `Odd of ${team === 'x' ? 'draw' : `victory ${game[team]}`}: ${odd}`,
  );
}

const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);

// END OF CHALLENGE #2

const allKeywords = [];
for (const book of books) {
  allKeywords.push(...book.keywords);
}
console.log(allKeywords);

const uniqueKeywords = new Set(allKeywords);
console.log(uniqueKeywords);

const additionalKeywords = ['coding', 'science'];
for (const keyword of additionalKeywords) {
  uniqueKeywords.add(keyword);
}
console.log(uniqueKeywords);

console.log(uniqueKeywords.has('business'));
uniqueKeywords.delete('business');
console.log(uniqueKeywords.has('business'));

const uniqueKeywordsArr = [...uniqueKeywords];
console.log(uniqueKeywordsArr);

uniqueKeywords.clear();
console.log(uniqueKeywords);

console.log('~~~ MAP EXAMPLES ~~~');

const map = new Map();
map.set(true, 'Yes');
map.set(true, 'Si');
console.log(map);
console.log(map.get(true));

const bookMap = new Map([
  ['title', 'Clean Code'],
  ['author', 'Robert C. Martin'],
]);
bookMap.set('pages', 464);
console.log(`"${bookMap.get('title')}" by ${bookMap.get('author')}`);
// bookMap.set(books[0].title, books[0]);
console.log(bookMap);

console.log(bookMap.size);

bookMap.has('author') && console.log('The author of the book is known');

const questions = new Map([
  ['What is the best programming language in the world?', 'JavaScript'],
  ['author', 'Robert C. Martin'],
]);
console.log(questions);

const firstBookMap = new Map(Object.entries(books[0]));
console.log('firstBookMap', firstBookMap);

for (const [key, value] of firstBookMap) {
  typeof value === 'number' && console.log(key);
}

///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// #1
const events = [...new Set(gameEvents.values())];
console.log(events);

// #2
gameEvents.delete(64);
console.log(gameEvents.has(64) || 'Event at minute 64 removed.');

// #3
console.log(
  `"An event happened, on average, every ${90 / gameEvents.size} minutes"`,
);

// #4
for (const [minute, event] of gameEvents) {
  const half = minute <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${minute}: ${event}`);
}

const footbalTimeEntries = [...gameEvents.keys()].pop();
console.log(footbalTimeEntries);
console.log(
  `"An event happened, on average, every ${footbalTimeEntries / gameEvents.size} minutes"`,
);

// Strings Part 1
console.log(
  books[0].ISBN[6],
  books[0].ISBN[4],
  books[0].ISBN[9],
  books[0].ISBN[8],
);

const quote =
  'A computer once beat me at chess, but it was no match for me at kick boxing';
console.log(quote.indexOf('chess'));

console.log(quote.slice(quote.indexOf('boxing')));
console.log(quote.slice(quote.lastIndexOf(' ') + 1));

function isContributor(author) {
  console.log(author.toLowerCase().includes('contributor'));
}
// function isContributor(author) {
//   console.log(author.lastIndexOf(('Contributor')) !== -1);
// }
isContributor(books[1].author[2]);
isContributor('Julie Sussman (Contributor)');
isContributor('Robert Sedgewick');

function normalizeAuthorName(author) {
  const cleanedauthor = author
    .toLowerCase()
    .replace('(contributor)', '')
    .trim();
  const firstName =
    cleanedauthor[0].toUpperCase() +
    cleanedauthor.slice(cleanedauthor.indexOf(' ') + 1);
  const lastName =
    cleanedauthor[cleanedauthor.indexOf(' ') + 1].toUpperCase() +
    cleanedauthor.slice(cleanedauthor.indexOf(' ') + 2);
  console.log(`${firstName} ${lastName}`);
}
normalizeAuthorName('  Julie SuSsman (Contributor)  ');
normalizeAuthorName('ROberT seDgeWick');

const newBookTitle = books[1].title.replace('Programs', 'Software');
console.log(newBookTitle);

function logBookTheme(bookTitle) {
  bookTitle = bookTitle.toLowerCase();
  if (bookTitle.startsWith('computer')) {
    console.log(`"This book is about computers"`);
  } else if (
    bookTitle.includes('algorithms') &&
    bookTitle.includes('structures')
  ) {
    console.log(`"This book is about algorithms and data structures"`);
  } else if (bookTitle.endsWith('system') || bookTitle.endsWith('systems')) {
    console.log(
      `"This book is about some systems, but definitely not about operating systems"`,
    );
  }
}

function logBookCategories(categoriesString) {
  const categories = categoriesString.split(';');
  for (const category of categories) {
    console.log(category);
  }
}
const bookCategories =
  'science;computing;computer science;algorithms;business;operating systems;networking;electronics';
logBookCategories(bookCategories);

function getKeywordsAsString(books) {
  const keywords = [];

  for (const book of books) {
    keywords.push(...book.keywords);
  }

  const uniqueKeywords = [
    ...new Set(keywords.map(keyword => keyword.toLowerCase())),
  ];

  return uniqueKeywords.join(';');
}
console.log(getKeywordsAsString(books));

function logBookChapters(chaptersString) {
  for (const [chapterName, pageNumber] of chaptersString) {
    console.log(`${chapterName.padEnd(20, '_')} ${pageNumber}`);
  }
}
const bookChapters = [
  ['The Basics', 14],
  ['Sorting', 254],
  ['Searching', 372],
  ['Graphs', 526],
  ['Strings', 706],
];
logBookChapters(bookChapters);

///////////////////////////////////////
// Coding Challenge #4

/*
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const button = document.querySelector('button');
button.addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');
  // My solution
  // for (let i = 0; i < rows.length; i++) {
  //   const [first, second] = rows[i].toLowerCase().trim().split('_');
  //   console.log(
  //     (first + second.replace(second[0], second[0].toUpperCase())).padEnd(
  //       20,
  //       ' ',
  //     ) + '✅'.repeat(i + 1),
  //   );
  // }
  // Copilot's solution
  for (const [index, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    const camelCase = first + second[0].toUpperCase() + second.slice(1);
    const checkmarks = '✅'.repeat(index + 1);
    console.log(camelCase.padEnd(20, ' ') + checkmarks);
  }
});
