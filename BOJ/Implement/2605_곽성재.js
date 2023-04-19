const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = +input[0];
const arr = input[1].split(" ").map(Number);

const result = [];

arr.forEach((el, idx) => {
  if (el === 0) {
    result.push(idx + 1);
  } else {
    result.splice(result.length - el, 0, idx + 1);
  }
});

console.log(result.join(" "));
