const readData = require('./data.js');
const { 
  growCulture, 
  isStable, 
  dieBack, 
  regrow, 
  livableCount 
} = require('./utils.js');

const data = readData();

const grownCultureSlide = data.map(
  col => growCulture(col));

const gameOfLife = (grid) => {
  let lifeCycles = 1;
  let gridData = grid;
  let historyGrid = [['#']];
  let newData = [['']];

  while(!isStable(historyGrid, newData)) {
    const dieBackData = dieBack(gridData);
    const reGrowData = regrow(dieBackData);
    historyGrid = gridData;
    gridData = reGrowData;
    newData = reGrowData;
    {lifeCycles ++;}
    console.log(lifeCycles);
  }

  const { livable, growths } = livableCount(newData);
  
  return { lifeCycles, livable, growths };
};

const { lifeCycles, livable, growths } = 
  gameOfLife(grownCultureSlide);

const growthPercentage = ((growths / livable) * 100).toFixed(3);

console.log(
  `This game of life took place over just ${lifeCycles} hours, yeilding ${growths} living cell cultures, while leaving ${livable} livable areas. Cultures grew with a ${growthPercentage}% success rate.`
);
