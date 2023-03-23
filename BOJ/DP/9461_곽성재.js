const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [T, ...n] = input;

const MAX = Math.max(...n);

const answer = [];

const DP = [0, 1, 1, 1, 2, 2];
for (let i = 6; i <= MAX; i++) {
  DP[i] = DP[i - 1] + DP[i - 5];
}

n.forEach((v) => answer.push(DP[v]));
console.log(answer.join("\n"));
