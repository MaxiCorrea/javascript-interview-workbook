// Map

let numbers0 = [1, 2, 3, 4, 5];
let multiplied = numbers0.map((value, index, array) => {
  return value * 6;
});
console.log(numbers0); //[ 1, 2, 3, 4, 5 ]
console.log(multiplied); //[ 6, 12, 18, 24, 30 ]

let doubleReverse = numbers0
  .map((value, index, array) => {
    return value * 2;
  })
  .reverse();
console.log(doubleReverse); // [ 10, 8, 6, 4, 2 ]

// Reduce
let numbers1 = [100, 30, 24];
let sum = numbers1.reduce((prevValue, currentValue, index, array) => {
  return prevValue + currentValue;
}, 0);
console.log(numbers1);
console.log(sum);

let kawaiiData = [
  {
    username: "Melodrama",
    village: "Apples landing",
    points: 1450,
  },
  {
    username: "Nook",
    village: "Zeldander",
    points: 100,
  },
  {
    username: "Tango",
    village: "Cactiizilla",
    points: 7000,
  },
];
console.log(kawaiiData);
let sumPoints = kawaiiData.reduce((acc, value) => {
  return acc + value.points;
}, 0);
console.log(sumPoints);

let cities = [
  {
    name: "Albuquerque",
    population: 2304004,
  },
  {
    name: "Toronto",
    population: 547569284,
  },
  {
    name: "Kuwait city",
    population: 39302848,
  },
  {
    name: "Vancouver",
    population: 7834751,
  },
];
console.log(cities);
let totalPopulation = cities.reduce((acc, value) => acc + value.population, 0);
console.log(totalPopulation);

// Filter
const yummies = [
  "Ice-cream",
  "Cupcake",
  "Donut",
  "Cupcake",
  "Ice-cream",
  "Ice-cream",
  "Cupcake",
];
console.log(yummies);
let notDuplicatedYummies = yummies.filter((value, index, array) => {
  return array.indexOf(value) === index;
});
console.log(notDuplicatedYummies);

let games = [
  { name: "Nintendo", game: "Animal Crossing" },
  { name: "Nintendo", game: "Super Mario" },
  { name: "PC", game: "Caesar IV" },
  { name: "Playstation", game: "Grand Theft Auto" },
  { name: "Playstation", game: "The Sims 4" },
];
console.log(games);

let pcGames = games.filter((value, index, array)=> {
  return value.name === "PC"
});
console.log(pcGames);
let nintendoGames = games.filter((value, index, array)=> {
  return value.name === "Nintendo"
});
console.log(nintendoGames);
