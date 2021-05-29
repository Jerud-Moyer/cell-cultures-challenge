//grow culture on livable patches
const growCulture = (arr) => {
  return arr.map(i => {
    if(i === 'L') return '#';
    return '.';
  });
};

//check for and count adjacent growths
const adjacentGrowths = (grid, col, row) => {
  let adjacentOccupied = 0 ;

  if((grid[col - 1])
    && (grid[col - 1][row]) === '#')  
  {adjacentOccupied ++;}

  if((grid[col + 1]) 
    && grid[col + 1][row] === '#') 
  {adjacentOccupied ++;}

  if((grid[col])
    && (grid[col][row - 1]) 
    && grid[col][row - 1] === '#') 
  {adjacentOccupied ++;}

  if((grid[col])
    && (grid[col][row + 1]) 
    && grid[col][row + 1] === '#')
  {adjacentOccupied ++;}

  if((grid[col + 1])
    && (grid[col + 1][row + 1]) 
    && grid[col + 1][row + 1] === '#') 
  {adjacentOccupied ++;}

  if((grid[col + 1])
    && (grid[col + 1][row - 1]) 
    && grid[col + 1][row - 1] === '#') 
  {adjacentOccupied ++;}

  if((grid[col - 1])
    && (grid[col - 1][row + 1])
    && (grid[col - 1][row + 1]) === '#') 
  {adjacentOccupied ++;}

  if((grid[col - 1])
    && (grid[col - 1][row - 1]) 
    && (grid[col - 1][row - 1]) === '#')
  {adjacentOccupied ++;}
  
  return adjacentOccupied;

};

// check for growth medium
const isWasteland = (col, row) => {
  return col[row] === '.';
  
};

// combine above to check for viability
const isViable = (grid, col, row) => {
  return ((adjacentGrowths(grid, col, row) <= 3) && !isWasteland(col, row));

};

//create dieBack function based on viability
const dieBack = (grid) => {
  return grid.map((col, colIndex) => {
    return col.map((row, rowIndex) => {
      if(row === '.') return row;
      if(isViable(grid, colIndex, rowIndex)) return row;
      if(!isViable(grid, colIndex, rowIndex)) return 'L';
    });
  });
};

//regrow culture where no adjacent growths are present
const regrow = (grid) => {
  return grid.map((col, colIndex) => {
    return col.map((row, rowIndex) => {
      if(row === '.') return row;
      if((row === 'L') 
        && (adjacentGrowths(grid, colIndex, rowIndex) === 0)) {
        return '#';
      }
      return row;
    });
  });
};
 

//compare last outcome with next outcome to stop recursion
const isStable = (data, newData) => {

  return data.every((row, rowIndex) => {
    return row.every((col, colIndex) => {
      return col === newData[rowIndex][colIndex];
    });
  });
};



module.exports = {
  dieBack,
  regrow,
  growCulture,
  adjacentGrowths,
  isViable,
  isStable
};
