const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const nums = input[1].split(" ").map(Number);
let answer = 0;

const findDecimal = (num) => {
  let cnt = 1;
  if (num === 1) return false;
  if (num === 2) return true;
  for (let i = 2; i <= num; i++) {
    if (num % i === 0) {
      cnt++;
    }
    if (cnt > 2) break;
  }
  return cnt === 2;
};

nums.forEach((num) => {
  if (findDecimal(num)) {
    answer++;
  }
});
console.log(answer);
