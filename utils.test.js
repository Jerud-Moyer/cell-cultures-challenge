const { 
  isStable, 
  adjacentGrowths, 
  growCulture, 
  regrow, 
  dieBack,  
  livableCount 
} = require('./utils');

describe('growCulture', () => {
  it('should take an array and find the livable areas and return with growths', () => {
    const arr = [',', 'L', 'L', 'L', '.'];
    const culturedArr = ['.', '#', '#', '#', '.'];

    expect(growCulture(arr)).toEqual(culturedArr);
  });
});

describe('isStable', () => {
  it('should return true if arrays match', () => {
    const data = [
      ['apple', 'orange', 'pear'], 
      ['dog', 'cat', 'pig'], 
      ['floor', 'ceiling', 'wall']
    ];
    const newData = [
      ['apple', 'orange', 'pear'], 
      ['dog', 'cat', 'pig'], 
      ['floor', 'ceiling', 'wall']
    ];

    expect(isStable(data, newData)).toEqual(true);
  });

  it('should return false if arrays dont match', () => {
    const data = [
      ['apple', 'monkey', 'pear'], 
      ['dog', 'cat', 'pig'], 
      ['floor', 'ceiling', 'wall']
    ];
    const newData = [
      ['apple', 'orange', 'pear'], 
      ['dog', 'cat', 'pig'], 
      ['floor', 'ceiling', 'wall']
    ];

    expect(isStable(data, newData)).toEqual(false);
  });

});

describe('adjacentGrowths', () => {
  it('should return number of adjacent growths', () => {
    const data = [
      ['.', '#', '.'], 
      ['#', '#', '#'], 
      ['#', '.', '.']
    ];
    
    expect(adjacentGrowths(data, 1, 1)).toEqual(4);
  });

  it('should return number of adjacent growths', () => {
    const data = [
      ['.', '#', '.'], 
      ['.', '#', '.'], 
      ['#', '.', '.']
    ];
    
    expect(adjacentGrowths(data, 0, 1)).toEqual(1);
  });

});

describe('dieBack', () => {
  it('should turn live cultures back to empty livable patches when 4 or more adjacent growths are present', () => {
    const initialGrowth = [
      ['#', '.', '#', '#', '#'],
      ['#', '.', '.', '#', '#'],
      ['#', '.', '#', '#', '.']
    ];
    const afterDieBack = [
      ['#', '.', '#', 'L', '#'],
      ['#', '.', '.', 'L', 'L'],
      ['#', '.', '#', '#', '.']
    ];
    
    expect(dieBack(initialGrowth)).toEqual(afterDieBack);
  });
});

describe('reGrowth', () => {
  it('should regrow #s where no adjacent #s exist', () => {
    const afterDieBack = [
      ['.', '#', 'L', 'L', 'L', '#'], 
      ['.', '#', 'L', 'L', 'L', '#'], 
      ['.', '#', 'L', 'L', 'L', '#']
    ];
    const regrown = [
      ['.', '#', 'L', '#', 'L', '#'], 
      ['.', '#', 'L', '#', 'L', '#'], 
      ['.', '#', 'L', '#', 'L', '#']
    ];
    
    expect(regrow(afterDieBack)).toEqual(regrown);
  });
});


describe('livableCount', () => {
  it('should take a grid and return number of growths and total livable areas', () => {
    const grid = [
      ['#', '.', '#', 'L'],
      ['L', 'L', '.', 'L'],
      ['#', '.', 'L', '#']
    ];

    expect(livableCount(grid)).toEqual(
      {
        livable: 9,
        growths: 4
      }
    );
  });
});
