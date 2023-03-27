const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

console.log(input.reduce((acc, curr) => acc + curr * curr, 0) % 10);
