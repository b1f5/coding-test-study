const [T, ...ARR] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

for (let i = 0; i < T; i++) {
  const dp = [
    [1, 0],
    [0, 1],
  ];

  const N = ARR[i];

  for (let j = 2; j <= N; j++) {
    dp[j] = [dp[j - 1][0] + dp[j - 2][0], dp[j - 1][1] + dp[j - 2][1]];
  }

  console.log(dp[N].join(' '));
}
