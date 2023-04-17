const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input[0];

let answer = 0;

for (let i = 1; i <= n; i++) {
  for (let j = i * i; j <= n; j += i) {
    answer++;
  }
}

console.log(answer);
