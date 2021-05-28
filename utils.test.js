const { isStable } = require('./utils');

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

  it('should return true if 4 or more adjacent blocks have growth', () => {
    const data = [[]]
  });
});
