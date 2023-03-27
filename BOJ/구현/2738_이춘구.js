const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const height = Number(input[0].split(" ")[0]);
const A = input
  .slice(1, height + 1)
  .map((a) => a.trim().split(" ").map(Number));
const B = input.slice(height + 1).map((b) => b.trim().split(" ").map(Number));

console.log(
  A.map((row, r) => row.map((el, i) => el + B[r][i]).join(" ")).join("\n")
);
