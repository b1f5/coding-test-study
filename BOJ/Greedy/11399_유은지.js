const [INPUT_N, INPUT_ARR] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const N = Number(INPUT_N);
const arr = INPUT_ARR.split(' ')
  .map(Number)
  .sort((a, b) => a - b);

let sum = 0;
const answer = [arr[0]];

for (let i = 1; i < N; i++) {
  answer[i] = arr[i] + answer[i - 1];
}

console.log(answer.reduce((v, i) => v + i, 0));
