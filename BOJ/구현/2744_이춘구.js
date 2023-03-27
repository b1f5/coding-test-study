const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("");

console.log(
  input
    .map((inp) =>
      inp === inp.toUpperCase() ? inp.toLowerCase() : inp.toUpperCase()
    )
    .join("")
);
