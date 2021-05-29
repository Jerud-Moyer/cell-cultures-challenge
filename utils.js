//grow culture on livable patches
const growCulture = (arr) => {
  return arr.map(i => {
    if(i === 'L') return '#';
    return '.';
  });
};

// check for adjacent number of growths
const isOvercrowded = (grid, col, row) => {
  let adjacentOccupied = 0 ;

  if((col >= 1) && (grid[col - 1][row]) === '#')
  {adjacentOccupied ++;}

  if(grid[col + 1][row] === '#') {adjacentOccupied ++;}

  if((row >= 1) && grid[col][row - 1] === '#') {adjacentOccupied ++;}

  if(grid[col][row + 1] === '#') {adjacentOccupied ++;}

  if(grid[col + 1][row + 1] === '#') {adjacentOccupied ++;}

  if(grid[col + 1][row - 1] === '#') {adjacentOccupied ++;}

  if((col >= 1) && (grid[col - 1][row + 1]) === '#') 
  {adjacentOccupied ++;}

  if((col >= 1) && (row >= 1) && (grid[col - 1][row - 1]) === '#') {adjacentOccupied ++;}
  
  console.log(grid[col][1], adjacentOccupied);
  if(adjacentOccupied >= 4) return true;
  else return false;

} ;

// check for growth medium
const isWasteland = (col, row) => {
  return col[row] === '.';
  
};

// combine above to check for viability
const isViable = (grid, col, row) => {
  return (!isOvercrowded(grid, col, row) && !isWasteland(col, row));

};

const isStable = (data, newData) => {

  return data.every((row, rowIndex) => {
    return row.every((col, colIndex) => {
      return col === newData[rowIndex][colIndex];
    });
  });
};

module.exports = {
  growCulture,
  isOvercrowded,
  isViable,
  isStable
};
