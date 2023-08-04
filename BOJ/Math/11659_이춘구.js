const [_, NUMBERS, ...ranges] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const numbers = NUMBERS.split(" ").map(Number);
const dp = [numbers[0]];
const answer = [];

for (let i = 1; i < numbers.length; i += 1) {
  dp[i] = numbers[i] + dp[i - 1];
}

for (const range of ranges) {
  const [start, end] = range.split(" ").map(Number);

  const sumToStart = start - 2 < 0 ? 0 : dp[start - 2];
  const sumToEnd = dp[end - 1];

  const sum = sumToEnd - sumToStart;
  answer.push(sum);
}

console.log(answer.join("\n"));
