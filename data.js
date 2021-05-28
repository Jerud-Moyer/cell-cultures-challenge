const fs = require('fs');
const { isContext } = require('vm');
module.exports = () => {
  const file = fs.readFileSync('./cell-cultures.txt', 'utf-8');
  return file.split('\n').map(row => row.split('')).slice(0, -1);
};
