const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const numbers = input[1].split(" ").map(Number);
const v = Number(input[2]);
const answer = numbers.filter((number) => number === v);

console.log(answer.length);
