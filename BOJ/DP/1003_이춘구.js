const [_, ...Ns] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const answers = [];
const dp = [1, 0];

for (let i = 2; i <= 41; i += 1) {
  dp[i] = dp[i - 1] + dp[i - 2];
}

Ns.forEach((N) => {
  answers.push(N === 0 ? "1 0" : `${dp[N]} ${dp[N + 1]}`);
});

console.log(answers.join("\n"));
