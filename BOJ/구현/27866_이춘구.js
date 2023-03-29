const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [S, i] = input;

console.log(S.slice(i - 1, i));
