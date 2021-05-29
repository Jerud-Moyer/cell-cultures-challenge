const readData = require('./data.js');
const { growCulture } = require('./utils.js');

const data = readData();

const grownCultureSlide = data.map(col => growCulture(col));



console.log(grownCultureSlide);
