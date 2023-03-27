const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

solution(input);

function solution(input) {
  console.log(input.reduce((acc, curr) => acc + curr, 0));
}
