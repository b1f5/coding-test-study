const [_, ...tcs] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const dp = [0, 1, 2, 4];
const maxTc = Math.max(...tcs);

for (let i = 4; i <= maxTc; i += 1) {
  dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
}

console.log(tcs.map((tc) => dp[tc]).join("\n"));
