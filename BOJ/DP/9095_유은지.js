const [N, ...M] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

// 1, 2, 3의 조합으로 합을 나타낸다
const dp = [];

dp[0] = 1; // 1 => 1
dp[1] = 2; // 2 => 1+1, 2
dp[2] = 4; // 3 => 1+1+1, 2+1, 1+2, 3
dp[3] = 7; // 4 => 1+1+1+1, 2+1+1, 1+2+1, 1+1+2, 2+2, 1+3, 3+1

const dpFunc = (num) => {
  for (let i = 4; i <= num; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
  }

  return dp[num - 1];
};

M.forEach((n) => console.log(dpFunc(n)));
