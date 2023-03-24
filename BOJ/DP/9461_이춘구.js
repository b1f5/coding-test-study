const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number)
  .slice(1);

solution(input);

function solution(input) {
  const dp = [1, 1, 1, 2, 2, 3];
  const length = dp.length;
  const max = Math.max(...input);

  for (let i = length; i <= max; i += 1) {
    dp[i] = dp[i - 1] + dp[i - 5];
  }
  input.forEach((N) => console.log(dp[N - 1]));
}
