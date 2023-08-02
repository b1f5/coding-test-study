const [INPUT_N, INPUT_ARR] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const numArr = INPUT_ARR.split(' ').map(Number);

const setArr = Array.from(new Set(numArr)).sort((a, b) => a - b);
const obj = {};
const answer = [];

setArr.forEach((num, idx) => (obj[num] = idx));

for (let i = 0; i < numArr.length; i++) {
  answer.push(obj[numArr[i]]);
}

console.log(answer.join(' '));
