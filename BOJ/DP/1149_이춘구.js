let [N, ...costs] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

N = Number(N);
costs = costs.map((cost) => cost.split(" ").map(Number));

const dp = Array.from({ length: N }, () => new Array(3).fill(0));
dp[0] = costs[0];

for (let r = 1; r < N; r += 1) {
  dp[r][0] = Math.min(dp[r - 1][1], dp[r - 1][2]) + costs[r][0];
  dp[r][1] = Math.min(dp[r - 1][0], dp[r - 1][2]) + costs[r][1];
  dp[r][2] = Math.min(dp[r - 1][0], dp[r - 1][1]) + costs[r][2];
}

console.log(Math.min(...dp[N - 1]));
