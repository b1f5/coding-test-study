/* 01타일 */
const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input.shift();

function solution(N) {
  const DIVISOR = 15746;
  let dp = [0, 1, 2];

  for (let i = 3; i <= N; i += 1) {
    dp[i] = (dp[i - 2] + dp[i - 1]) % DIVISOR;
  }

  console.log(dp[N]);
}

solution(N);
