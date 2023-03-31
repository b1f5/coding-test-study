const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input[0];

const DP = [0, 1, 2];

for (let i = 3; i <= N; i++) {
  DP[i] = (DP[i - 1] + DP[i - 2]) % 15746;
}

console.log(DP[N]);
