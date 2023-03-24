/* 파도반 수열 */
const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const T = +input.shift();
const N_LIST = input.map(Number);

function solution(T, N_LIST) {
  const getPN = (N) => {
    let dp = [0, 1, 1, 1, 2, 2, 3, 4, 5, 7, 9];

    if (N <= 10) return dp[N];

    for (let i = 11; i <= N; i += 1) {
      dp[i] = dp[i - 3] + dp[i - 2];
    }

    return dp[N];
  };

  let result = N_LIST.map((N) => {
    return getPN(N);
  });

  console.log(result.join('\n'));
}

solution(T, N_LIST);
