const {default: tta} = require('../cjs');

const random = parseInt(process.argv.pop(), 10) || 1000;
const length = 0xFFF;
const test = [];

const info = `prepared for ${length} templates with randomness of ${random}`;
console.log('');
console.time(info);
for (let i = 0; i < 0xFFF; i++) {
  test[i] = eval('() => tta`' + createTemplate() + '`');
}
console.timeEnd(info);

setTimeout(() => {
  console.time('convert template tag arguments');
  test.forEach(reassign);
  console.timeEnd('convert template tag arguments');
  console.log('');
}, 500);


function createTemplate() {
  const length = Math.ceil(1 + (Math.random() * random));
  return '${' + Array.from({length}, (v, i) => i).join('}-${') + '}';
}

function reassign(value, i, arr) {
  arr[i] = value();
}
