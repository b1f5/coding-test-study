const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .slice(1);

console.log(input.map((inp) => inp[0] + inp.at(-1)).join("\n"));
