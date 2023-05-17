const [INPUT_N, ...INPUT_ARR] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const [N, K] = INPUT_N.split(' ').map(Number);
const coins = INPUT_ARR.map(Number);
let count = 0;
let money = K;

while (money > 0 && coins.length) {
  const coin = coins.pop();

  count += Math.floor(money / coin);
  money %= coin;
}

console.log(count);
