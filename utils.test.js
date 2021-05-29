const { isStable, isOvercrowded, growCulture } = require('./utils');

describe('growCulture', () => {
  it('should take an array and find the livable areas and return with growths', () => {
    const arr = [',', 'L', 'L', 'L', '.'];
    const culturedArr = ['.', '#', '#', '#', '.'];

    expect(growCulture(arr)).toEqual(culturedArr);
  });
});

describe('isStable', () => {
  it('should return true if arrays match', () => {
    const data = [['apple', 'orange', 'pear'], ['dog', 'cat', 'pig'], ['floor', 'ceiling', 'wall']];
    const newData = [['apple', 'orange', 'pear'], ['dog', 'cat', 'pig'], ['floor', 'ceiling', 'wall']];

    expect(isStable(data, newData)).toEqual(true);
  });

  it('should return false if arrays dont match', () => {
    const data = [['apple', 'monkey', 'pear'], ['dog', 'cat', 'pig'], ['floor', 'ceiling', 'wall']];
    const newData = [['apple', 'orange', 'pear'], ['dog', 'cat', 'pig'], ['floor', 'ceiling', 'wall']];

    expect(isStable(data, newData)).toEqual(false);
  });

});

describe('isOvercrowded', () => {
  it('should return true if 4 or more adjacent blocks have growth', () => {
    const data = [['.', '#', '.'], ['#', '#', '#'], ['#', '.', '.']];
    
    expect(isOvercrowded(data, 1, 1)).toEqual(true);
  });

  it('should return false if 4 or more adjacent blocks have growth', () => {
    const data = [['.', '#', '.'], ['.', '#', '.'], ['#', '.', '.']];
    
    expect(isOvercrowded(data, 0, 1)).toEqual(false);
  });

});
