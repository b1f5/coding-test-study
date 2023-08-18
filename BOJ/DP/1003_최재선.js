/* eslint-disable no-param-reassign */
const fs = require('fs');

const input = fs.readFileSync('./input.txt').toString().trim().split('\n');

function solution(args) {
  args = args.map((el) => Number(el));

  const bigNum = Math.max(...args);
  const memo = new Array(bigNum + 1).fill(null);

  memo[0] = 0;
  memo[1] = 1;

  const fibo = (num) => {
    if (memo[num] !== null) return memo[num];

    const sum = fibo(num - 2) + fibo(num - 1);
    memo[num] = sum;
    return sum;
  };

  fibo(bigNum);

  console.log(args.map((arg) => {
    if (arg === 0) return '1 0';

    return `${memo[arg - 1]} ${memo[arg]}`;
  }).join('\n'));
}

solution(input.slice(1));
