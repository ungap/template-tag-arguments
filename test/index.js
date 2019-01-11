const {default: tta} = require('../cjs');

var result = [
  tag(1),
  tag(2)
];

console.assert(result[0][0] === result[1][0], 'same template literal');
console.assert(result[0].length === result[1].length, 'same amount of arguments');
console.assert(result[0][1] !== result[1][1], 'different interpolations');
console.assert(result[0][1] === 1 && result[1][1] === 2, 'correct interpolations');

function tag(value) {
  return tta`a${value}b`;
}
