const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const arr = input.map(Number);
const sum = arr.reduce((acc, cur) => acc + cur, 0);
let result;

for (let i = 0; i < 8; i++) {
  for (let j = i + 1; j < 9; j++) {
    const temp = arr[i] + arr[j];
    if (sum - temp === 100) {
      // arr.splice(j, 1);
      // arr.splice(i, 1);
      result = arr.filter((el, idx) => idx !== i && idx !== j);
    }
  }
}

result.sort((a, b) => a - b);
result.forEach((el) => console.log(el));

// arr.sort((a, b) => a - b);
// arr.forEach((el) => console.log(el));
// console.log(arr.sort((a, b) => a - b).join("\n"));
