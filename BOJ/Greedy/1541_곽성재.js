const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const excludeMinus = input[0].split("-");
// ['1', '9+7+2', '3+1']

const NUMS = [];

// includePlusStr : 1+2+3 / 1
for (const includePlusStr of excludeMinus) {
  // prettier-ignore
  const sumOfExpression = includePlusStr.split("+").map(Number).reduce((acc, cur) => acc + cur, 0);
  NUMS.push(sumOfExpression);
}

let answer = NUMS[0];

for (let i = 1; i < NUMS.length; i++) {
  answer -= NUMS[i];
}
console.log(answer);
