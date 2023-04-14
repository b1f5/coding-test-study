const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = input[0];
const arr = input[1].split(" ").map(Number);
const [B, C] = input[2].split(" ").map(Number);

let result = 0;

for (let i of arr) {
  let answer = 0;
  if (i < B) {
    answer = 1;
  } else {
    answer += 1 + Math.ceil((i - B) / C);
  }
  result += answer;
}

console.log(result);
