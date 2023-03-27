const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, X] = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number);
const answer = A.filter((a) => a < X);

console.log(answer.join(" "));
