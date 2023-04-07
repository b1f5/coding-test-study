const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");
input.pop();
const answer = [];
input.forEach((str) => {
  const [big, mid, small] = str
    .split(" ")
    .map(Number)
    .sort((a, b) => b - a);
  if (big ** 2 === mid ** 2 + small ** 2) answer.push("right");
  else answer.push("wrong");
});

console.log(answer.join("\n"));
